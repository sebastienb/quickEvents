# Quick Events

Drop this on a website to quickly enable event tracking for google analytics on websites and web apps. Some of the tracking is built for sites using bootstrap 3 but they can be removed or modified to work with other frameworks or scripts.

### Requirements and setup
QuickEvents requires you to have jQuery and Google analytics on your site. To use simply add it to your footer after your other scripts.

```
<script src="PATH-TO-SCRIPT/quick-events.js"></script>
```



### Anchors and Buttons
First checks for a title tag, if none is present it then checks for the text inside the anchor and if none is present it used the `ID` and `Class` of the anchor.

### Bootstrap Modals
Tracks modal window shown and sends the modal window title with event action `Shown` and category `Modal`.
Tracks modal window hidden and sends the modal window title with event action `Hidden` and category `Modal`.

### Bootstrap Carousel Indicators

 Tracks carousel indicator clicks and sends the action `Clicked` with category `Carousel Indicator` and label `Carousel Name`.
