window.onload = function() {

    initLocalClocks();
    setUpMinuteHands();
    moveSecondHands();
  
  }
  
  function initLocalClocks() {
    var date = new Date;
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
  
    var hands = [
      {
        hand: 'hours',
        angle: (hours * (360/12)) + (minutes * ((360/12)/60))
      },
      {
        hand: 'minutes',
        angle: (minutes * (360/60))
      },
      {
        hand: 'seconds',
        angle: (seconds * (360/60))
      }
    ];
    
    for (var j = 0; j < hands.length; j++) {
      var elements = document.querySelectorAll('.' + hands[j].hand);

   elements[0].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)'; 
   elements[0].style.transform = 'rotateZ('+ hands[j].angle +'deg)'
   
   if (hands[j].hand === 'minutes') {
     elements[0].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
   }
    }
  }
  
  function setUpMinuteHands() {
    var containers = document.querySelectorAll('.minutes-container');
    var secondAngle = containers[0].getAttribute("data-second-angle");
    if (secondAngle > 0) {

      var delay = (((360 - secondAngle) / 6) + 0.1) * 1000; 
      setTimeout(function() {
        moveMinuteHands(containers);
      }, delay);
    }
  }

  function moveMinuteHands(containers) {
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.webkitTransform = 'rotateZ(6deg)';
      containers[i].style.transform = 'rotateZ(6deg)';
    }
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 12;
        } else {
          containers[i].angle += 6; 
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 60000);
  }
  
  function moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');

    setInterval(function() {
   
   if (containers[0].angle === undefined) {
     containers[0].angle = 6;
   } else {
     containers[0].angle += 6;
     }
   containers[0].style.webkitTransform = 'rotateZ('+ containers[0].angle +'deg)';
   containers[0].style.transform = 'rotateZ('+ containers[0].angle +'deg)';
     
    }, 1000);
  }
