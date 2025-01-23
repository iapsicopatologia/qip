import 'package:flutter/material.dart';

const double _kScrollbarThickness = 6.0;

class CustomScrollbar extends StatefulWidget {
  final ScrollableWidgetBuilder builder;
  final ScrollController? scrollController;

  const CustomScrollbar({
    super.key,
    this.scrollController,
    required this.builder,
  });

  @override
  State<CustomScrollbar> createState() => _CustomScrollbarState();  
}

class _CustomScrollbarState extends State<CustomScrollbar> {
  ScrollbarPainter? _scrollbarPainter;
  ScrollController? _scrollController;
  Orientation? _orientation;

  @override
  void initState() {
    super.initState();
    _scrollController = widget.scrollController ?? ScrollController();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _updateScrollPainter(_scrollController!.position);
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _scrollbarPainter = _buildMaterialScrollbarPainter();
  }

  @override
  void dispose() {
    _scrollbarPainter!.dispose();
    super.dispose();
  }

  ScrollbarPainter _buildMaterialScrollbarPainter() {
    return ScrollbarPainter(
      color: Theme.of(context).highlightColor.withAlpha(1),
      textDirection: Directionality.of(context),
      thickness: _kScrollbarThickness,
      fadeoutOpacityAnimation: const AlwaysStoppedAnimation<double>(1.0),
      padding: MediaQuery.of(context).padding,
    );
  }

  bool _updateScrollPainter(ScrollMetrics position) {
    _scrollbarPainter!.update(
      position,
      position.axisDirection,
    );
    return false;
  }

  @override
  void didUpdateWidget(CustomScrollbar oldWidget) {
    super.didUpdateWidget(oldWidget);
    _updateScrollPainter(_scrollController!.position);
  }

  @override
  Widget build(BuildContext context) {
    return OrientationBuilder(
      builder: (context, orientation) {
        _orientation ??= orientation;
        if (orientation != _orientation) {
          _orientation = orientation;
          _updateScrollPainter(_scrollController!.position);
        }
        return NotificationListener<ScrollNotification>(
          onNotification: (notification) =>
              _updateScrollPainter(notification.metrics),
          child: CustomPaint(
            painter: _scrollbarPainter,
            child: widget.builder(context, _scrollController!),
          ),
        );
      },
    );
  }
}
