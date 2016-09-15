//Simple event tracker currently for use with google analytics but can be set
//to work with other services.


$( document ).ready(function() {

  function sendEvent(data){
    //Sample analytics event code
    // ga('send', 'event', [eventCategory], [eventAction], [eventLabel], [eventValue], [fieldsObject]);

    eventName = data.eventName;
    eventCategory = data.eventCategory;
    eventAction = data.eventAction;
    eventLabel = data.eventLabel;

    ga('send', eventName, eventCategory, eventAction, eventLabel);
    // console.log(eventName+"-"+eventCategory+"-"+eventLabel);
  };

  //Default HTML Elements

  //anchors clicked
  $('a').on('click', function (e) {

    //Sets title attr or ID as link title
    if($(this).attr('title')){
      anchorTitle = $(this).attr('title');
    }else if ($(this).text()!="") {
        anchorTitle =$(this).text();
    }else if($(this).attr('id')){
        anchorTitle = $(this).attr('id');
    }else if($(this).attr('class')){
      anchorTitle = $(this).attr('class');
    }else{
      anchorTitle = ""
    }

    data = {
      eventName:"event",
      eventCategory:"Anchor",
      eventAction:"Clicked",
      eventLabel:anchorTitle
    };
    sendEvent(data);

  });

  //Bootstrap v3 Elements

  //modal window shown
  $('.modal').on('shown.bs.modal', function (e) {

    modalTitle = $(this).find('.modal-title, .title').text();
    data = {
      eventName:"event",
      eventCategory:"Modal",
      eventAction:"Shown",
      eventLabel:modalTitle
    };
    sendEvent(data);

  });

  //modal window hidden
  $('.modal').on('hidden.bs.modal', function (e) {

    modalTitle = $(this).find('.modal-title').text();
    data = {
      eventName:"event",
      eventCategory:"Modal",
      eventAction:"Hidden",
      eventLabel:modalTitle
    };
    sendEvent(data);

  });

  //Carousel Indicators
  $('.carousel-indicators li').on('click', function (e) {

    carouselName = $(this).attr('data-target');
    data = {
      eventName:"event",
      eventCategory:"Carousel Indicator",
      eventAction:"Clicked",
      eventLabel:carouselName
    };
    sendEvent(data);

  });

});
