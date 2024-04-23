import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_modular/flutter_modular.dart';
import '../interfaces/asssistido_remote_storage_interface.dart';
import 'package:get_mac_address/get_mac_address.dart';
import 'package:just_audio/just_audio.dart';

//Reatividade na classe inteira
class TelasController {
  String macAddress = 'Unknown';
  final _getMacAddressPlugin = GetMacAddress();
  bool isEnd = false;
  final isRunningSync = ValueNotifier<bool>(false);
  final completeSendData = Completer<dynamic>();
  final answer = ValueNotifier<List<(int, String)>>([]);
  final idPage = ValueNotifier<int>(0);
  int rowId = 0;
  final answerAux = ValueNotifier<List<ValueNotifier<String>>>([]);
  final emailAux = ValueNotifier<String>("");
  final isImagemFull = ValueNotifier<bool>(true);
  final storage = Modular.get<AssistidoRemoteStorageInterface>();

  Future<dynamic> sync() async {
    if (isRunningSync.value == false) {
      isRunningSync.value = true;
      int colId;
      String syncVar;
      while (answer.value.isNotEmpty) {
        (colId, syncVar) = answer.value.removeAt(0);
        dynamic resp;
        int count = 0;
        if (rowId == 0) {
          do {
            count++;
            final macAddress = await getMacAddress();
            resp = await storage.addData([macAddress, syncVar]);
          } while ((resp == null || resp is! int) && count < 5);
          rowId = resp;
        } else {
          if (isEnd == true && answer.value.isEmpty) {
            completeSendData.complete(Future.sync(
              () async {
                do {
                  count++;
                  resp = await storage.setData(syncVar, rowId, colId);
                } while ((resp == null || resp is! int || resp != colId) &&
                    count < 5);
                return true;
              },
            ));
          } else {
            do {
              count++;
              resp = await storage.setData(syncVar, rowId, colId);
            } while (
                (resp == null || resp is! int || resp != colId) && count < 5);
          }
        }
      }
      isRunningSync.value = false;
    }
    return null;
  }

  void delay(
      {required bool hasProx,
      required int time,
      required ValueNotifier<List<ValueNotifier<String>>> answerNotifier,
      required void Function(void Function()) setState}) async {
    Future.delayed(Duration(seconds: time)).then((value) {
      setState(() {
        if (hasProx) {
          answerNotifier.value = [ValueNotifier<String>('Sucess')];
        } else {
          //idPage.value++;
          Modular.to.popAndPushNamed("/", arguments: idPage.value + 1);
        }
      });
    });
  }

  void playMusic({required int id, required String fileName}) async {
    final player = AudioPlayer();
    if (fileName != '.mp3') {
      try {
        player
            .setAudioSource(
              AudioSource.uri(Uri.parse("asset:///$fileName")),
              initialPosition: Duration.zero,
              preload: true,
            )
            .whenComplete(
              () =>
                  //await player.setAsset(path); //load audio from assets
                  player.play().whenComplete(
                () {
                  Modular.to.popAndPushNamed("/", arguments: id + 1);
                },
              ),
            );
      } catch (e) {
        debugPrint("Error loading audio source: $e");
      }
    } else {
      Future.delayed(const Duration(seconds: 3)).then(
        (value) {
          Modular.to.popAndPushNamed("/", arguments: id + 1);
        },
      );
    }
  }

  Future<String> getMacAddress() async {
    String macAddress;
    try {
      macAddress =
          await _getMacAddressPlugin.getMacAddress() ?? 'Unknown mac address';
    } on PlatformException {
      macAddress = 'Failed mac address';
    }
    return macAddress;
  }
}
