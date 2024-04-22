import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:internet_connection_checker/internet_connection_checker.dart';
import '../interfaces/asssistido_remote_storage_interface.dart';
import 'package:just_audio/just_audio.dart';

//Reatividade na classe inteira
class TelasController {
  bool isEnd = false;
  final isRunningSync = ValueNotifier<bool>(false);
  final completeSendData = Completer<dynamic>();
  final answer = ValueNotifier<List<String>>([]);
  final idPage = ValueNotifier<int>(0);
  final answerAux = ValueNotifier<List<ValueNotifier<String>>>([]);
  final emailAux = ValueNotifier<String>("");
  final isImagemFull = ValueNotifier<bool>(true);
  final storage = Modular.get<AssistidoRemoteStorageInterface>();

  TelasController() {
    answer.addListener(() => sync());
  }

  Future<dynamic> sync() async {
    if (await InternetConnectionChecker().hasConnection) {
      if (isRunningSync.value == false) {
        isRunningSync.value = true;
        String? sync;
        while (sync != null) {
          try {
            sync = answer.value.first;
            answer.value = answer.value.sublist(1);
            if (isEnd == true && answer.value.isEmpty) {
              completeSendData.complete(storage.addData(answer.value));
            } else {
              await storage.addData(answer.value);
            }
          } catch (e) {
            sync = null;
          }
        }
        isRunningSync.value = false;
      }
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
}
