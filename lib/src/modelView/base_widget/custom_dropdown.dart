import 'package:flutter/material.dart';

class CustomDropdown extends StatefulWidget {
  final List<String> list;
  final ValueNotifier<String> answer;  
  const CustomDropdown({super.key, required this.list, required this.answer});

  @override
  State<CustomDropdown> createState() => _CustomDropdownState();
}

class _CustomDropdownState extends State<CustomDropdown> {
  String dropdownValue = "";

  @override
  void initState() {
    dropdownValue = widget.answer.value; //widget.list.first;
    super.initState();
  }
  @override
  Widget build(BuildContext context) {
    return DropdownButton<String>(
      value: dropdownValue,
      icon: const Icon(Icons.arrow_downward),
      elevation: 16,
      style: const TextStyle(color: Colors.deepPurple),
      underline: Container(
        height: 2,
        color: Colors.deepPurpleAccent,
      ),
      onChanged: (String? value) {
        // This is called when the user selects an item.
        setState(() {
          dropdownValue = value!;
          widget.answer.value = value;
        });
      },
      items: widget.list.map<DropdownMenuItem<String>>((String value) {
        return DropdownMenuItem<String>(
          value: value,
          child: Text(value),
        );
      }).toList(),
    );
  }
}
