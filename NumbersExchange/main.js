var stage = 1;
var showMix = false;
var mixColor;

function checkStage(){

  user_private_color = document.querySelector("#user_private_color");
  bank_private_color = document.querySelector("#bank_private_color");
  user_mix_color = document.querySelector("#user_mix_color");
  bank_mix_color = document.querySelector("#bank_mix_color");
  public_color = document.querySelector("#public_color");
  public_color = document.querySelector("#public_color");
  mixer1 = document.querySelector("#mixer1");
  mixer2 = document.querySelector("#mixer2");
  mixer_intersection = document.querySelector("#mixer_intersection_svg");
  bank_mix_container = document.querySelector("#bank_mix_container");
  hacker_mix_diamond_1 = document.querySelector("#hacker_mix_diamond_1");
  hacker_mix_diamond_2 = document.querySelector("#hacker_mix_diamond_2");
  user_shared_color = document.querySelector("#user_shared_color");
  bank_shared_color = document.querySelector("#bank_shared_color");
  instructions =  document.querySelector("#instructions");

  //Start with public color and 2 private colors

  console.log("STAGE: " + stage);
  console.log(hasDropped);
  if (stage == 1) {
    /*
    Stage 1
    -------
    ACTION: user drags private into mix 1
    -- RESPONSE: set private user non-drag
                 set public as drag
           set color mix 1 non-drop
           set color mix 2 drop
           stage++
    */

    if (true) {
      instructions.innerHTML = "Mix your private color with the public color."
      user_private_color.classList.remove('drag');
      user_private_color.classList.add('nondrag');
      public_color.classList.add('drag');
      public_color.classList.remove('nondrag');
      mixer1.classList.remove('drop');
      mixer1.classList.add('nondrop');
      mixer2.classList.add('drop');
      mixer2.classList.remove('nondrop');
      showMix = true;
      mixColor = "#354354"
      stage ++;
    }
  } else if (stage == 2) {
    /*
    Stage 2
    -------
    ACTION: user drags public into mix 2
    -- RESPONSE: set color mix 2 non-drop
           set user mix to new color
           set public as non-drag
           reset color mixes (non-drag)
           set color mix 1 to drop
           set bank private to drag
    */
    instructions.innerHTML = "Mix the bank's private color with the public color."
    document.getElementById("user_mix_color_diamond").style.fill = "#354354";
    document.getElementById("user_mix_color_text").style.fill = "#FFF";
    user_mix_color.classList.add('nondrag');
    user_mix_color.classList.remove('drag');

    public_color.classList.add('nondrag');
    public_color.classList.remove('drag');
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    mixer1.style.backgroundColor = "#ccc";
    mixer2.style.backgroundColor = "#ccc";
    mixer_intersection_svg.style.fill = "#ccc";
    mixer1.classList.add('drop');
    mixer1.classList.remove('nondrop');
    bank_private_color.classList.remove('nondrag');
    bank_private_color.classList.add('drag');
    stage++;

  } else if (stage == 3) {
    /*
    Stage 3
    -------
    ACTION: drag bank private into mix 1
    -- RESPONSE: set bank to nondrag
           set public color to drag
           set mixer 1 to nondrop
           set mixer 2 to droppable
           stage++
    */
    instructions.innerHTML = "Mix the bank's private color with the public color."
    bank_private_color.classList.remove('drag');
    bank_private_color.classList.add('nondrag');
    public_color.classList.add('drag');
    public_color.classList.remove('nondrag');
    mixer1.classList.remove('drop');
    mixer1.classList.add('nondrop');
    mixer2.classList.add('drop');
    mixer2.classList.remove('nondrop');
    showMix = true;
    mixColor = "#f3d2f3";
    stage ++;
    
  } else if (stage == 4) {
    /*
    Stage 4
    -------
    ACTION: user drags public into mix 2
    -- RESPONSE: set color mix 2 non-drop
           set user mix to new color
           set public as non-drag
           reset color mixes (non-drag)
           set color mix 1 to drop
           set bank private to drag
    */
    instructions.innerHTML = "Exchange your mixed color with the bank's mixed color."
    document.getElementById("bank_mix_color_diamond").style.fill = "#f3d2f3";

    // bank_mix_color.style.backgroundColor = "#f3d2f3";
    bank_mix_color.classList.add('nondrag');
    bank_mix_color.classList.remove('drag');
    public_color.classList.add('nondrag');
    public_color.classList.remove('drag');
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    mixer1.style.backgroundColor = "#ccc";
    mixer2.style.backgroundColor = "#ccc";
    mixer_intersection_svg.style.fill = "#ccc";
    user_mix_color.classList.remove('nondrag');
    user_mix_color.classList.add('drag');
    bank_mix_container.classList.add('drop')
    stage++;
    
  } else if (stage == 5) {
    /*
    Stage 5
    -------
    INSTRUCTION: "Exchange your mixed color with the bank's mixed color."
    More granular instruction/error message: "Drag your mixed color into the bank's mixed color to swap the two colors."
    ACTION: user drags user mix to bank mix
    RESPONSE: set user mix (base) to bank mix <- NOT SURE WHERE THIS IS HAPPENING
          set hacker mix 1 to user mix
          set hacker mix 2 to bank mix
          nondrop: bank mix
          nondrag: user mix
          drop: color mix 1
            drag: private color
          stage++
    */
    instructions.innerHTML = "Mix your private color with the color you just received from the bank."
    hacker_mix_diamond_1.style.fill = "#354354";
    hacker_mix_diamond_2.style.fill = "#f3d2f3";   
    user_private_color.classList.add('drag');
    user_private_color.classList.remove('nondrag');
    public_color.classList.add('nondrag');
    public_color.classList.remove('drag');
    // user_mix_color.classList.remove('nondrag');
    // user_mix_color.classList.add('drag');
    mixer2.classList.remove('drop');
    mixer2.classList.add('nondrop');
    mixer1.classList.add('drop');
    mixer1.classList.remove('nondrop');
    bank_mix_container.classList.remove('drop')
    stage ++;


    
  } else if (stage == 6) {
  /*
    Stage 6
    -------
    INSTRUCTION: "Mix your private color with the color you just received from the bank."
    More granular instruction/error message: "Drag your private color into the color mixing palette."
    ACTION: user drags user private into mix 1
    RESPONSE: nondrop: color mix 1
          drop: color mix 2
          nondrag: user private
          drag: user-mix-color
          stage++
  */
    instructions.innerHTML = "Mix your private color with the color you just received from the bank."
    user_private_color.classList.add('drag');
    user_private_color.classList.remove('nondrag');
    public_color.classList.add('nondrag');
    public_color.classList.remove('drag');
    mixer2.classList.remove('nondrop');
    mixer2.classList.add('drop');
    mixer1.classList.add('nondrop');
    mixer1.classList.remove('drop');
    user_mix_color.classList.remove('nondrag');
    user_mix_color.classList.add('drag');
    showMix = true;
    mixColor = "#BA7FA4";
    stage ++;

  } else if (stage == 7) {
    /*
    Stage 7
    -------
    INSTRUCTION: "Mix your private color with the color you just received from the bank."
    More granular instruction/error message: "Drag your newly received mixed color into the color mixing palette."
    ACTION: user drags user-mix-color into mix 2
    RESPONSE: set user key to resulting color
              nondrop: color mix 2
          nondrag: user-mix-color
          drag: bank private
          drop: color mix 1
          stage++
      */
    instructions.innerHTML = "Mix the bank's private color with the color it just received from you."
    // need to set delay here
    user_shared_color_diamond.style.fill = "#BA7FA4"; // CHANGE THIS TO FINAL COLOR!!!
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    user_mix_color.classList.add('nondrag');
    user_mix_color.classList.remove('drag');
    bank_private_color.classList.add('drag');
    bank_private_color.classList.remove('nondrag');
    mixer1.classList.add('drop');
    mixer1.classList.remove('nondrop');
    mixer1.style.backgroundColor = "#ccc";
    mixer2.style.backgroundColor = "#ccc";
    mixer_intersection_svg.style.fill = "#ccc";

    stage ++;
    
  } else if (stage == 8) {
    instructions.innerHTML = "Mix the bank's private color with the color it just received from you."
    mixer2.classList.add('drop');
    mixer2.classList.remove('nondrop');
    bank_mix_color.classList.add('drag');
    bank_mix_color.classList.remove('nondrag');
    bank_private_color.classList.add('nondrag');
    bank_private_color.classList.remove('drag');
    mixer1.classList.add('nondrop');
    mixer1.classList.remove('drop');
    mixer2.classList.add('drop');
    mixer2.classList.remove('nondrop');
    showMix = true;
    mixColor = "#BA7FA4";

    stage ++;

  } else if (stage == 9) {
    /*
    Stage 9
    -------
    INSTRUCTION: "Mix the bank's private color with the color it just received from you."
    More granular instruction/error message: "Drag the bank's mixed color that it received from you into the color mixing palette."
    ACTION: user drags bank-mix-color into mix 2
    RESPONSE: set bank key to resulting color
              nondrop: color mix 2
          nondrag: bank-mix-color
          stage++

*/
    instructions.innerHTML = "You and the bank now have a shared secret color!"
    bank_shared_color_diamond.style.fill = "#BA7FA4"; // CHANGE THIS TO FINAL COLOR!!!
    bank_mix_color.classList.add('nondrag');
    bank_mix_color.classList.remove('drag');

    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');

    mixer1.style.backgroundColor = "#ccc";
    mixer2.style.backgroundColor = "#ccc";
    mixer_intersection_svg.style.fill = "#ccc";
    
    stage++;


  } else if (stage == 10) {
    instructions.innerHTML = "You and the bank now have a shared secret color!"
    bank_shared_color_diamond.style.fill = "#BA7FA4"; // CHANGE THIS TO FINAL COLOR!!!

  }
}

var hasDropped = false;

function checkMixture(draggableElement) {

  user_private_color = document.querySelector("#user_private_color");
  bank_private_color = document.querySelector("#bank_private_color");
  user_mix_color = document.querySelector("#user_mix_color");
  bank_mix_color = document.querySelector("#bank_mix_color");
  public_color = document.querySelector("#public_color");
  public_color = document.querySelector("#public_color");
  mixer1 = document.querySelector("#mixer1");
  mixer2 = document.querySelector("#mixer2");
  bank_mix_container = document.querySelector("#bank_mix_container");
  hacker_mix_diamond_1 = document.querySelector("#hacker_mix_diamond_1");
  hacker_mix_diamond_2 = document.querySelector("#hacker_mix_diamond_2");
  user_shared_color = document.querySelector("#user_shared_color");
  bank_shared_color = document.querySelector("#bank_shared_color");
  instructions =  document.querySelector("#instructions");

  if (stage == 1) {
    /*
    Stage 1
    -------
    ACTION: user drags private into mix 1
    -- RESPONSE: set private user non-drag
                 set public as drag
                 set color mix 1 non-drop
                 set color mix 2 drop
                 stage++
    */
    if (draggableElement == user_private_color && !hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 2) {
    if (draggableElement != user_private_color && !hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 3) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 4) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 5) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 6) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 7) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 8) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 9) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  } else if (stage == 10) {
    if (!hasDropped) {
      hasDropped = true;
      checkStage();
    }
  }
}

// target elements with the "draggable" class
interact('.drag')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      hasDropped = false;
    }
  });

  var originalX = 0;
  var originalX = 0;
  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

  // enable draggables to be dropped into this
interact('.drop').dropzone({
  // only accept elements matching this CSS selector
  accept: '.drag',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    if (hasDropped) {return;}
    if (dropzoneElement.id == "bank_mix_container") {
      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
      bank_mix_color = document.querySelector("#bank_mix_color");
      bank_mix_number = document.querySelector("#bank_mix_number");
      user_mix_number = document.querySelector("#user_mix_number");
      var color1 = $(bank_mix_color_diamond).css("fill");
      var color2 = $(user_mix_color_diamond).css("fill");
      user_mix_color_diamond.style.fill = hexc(color1);
      bank_mix_color_diamond.style.fill = hexc(color2);
      // user_mix_color_text.style.fill = "#000";
      // bank_mix_color_text.style.fill = "#fff";
      bank_mix_number.innerHTML = "19";
      user_mix_number.innerHTML = "13";
    } else {
      // feedback the possibility of a drop
      var color = $(draggableElement).css("color");
      console.log(hexc(color));
      dropzoneElement.style.backgroundColor = hexc(color);
      mixer_intersection_svg = document.querySelector("#mixer_intersection_svg");
      if (!showMix) { // should replace w boolean testing for middle section
          mixer_intersection_svg.style.fill = hexc(color);
      } else {
        console.log("show mix!");
        mixer_intersection_svg.style.fill = mixColor;
        showMix = false;
      }
    }
  },
  ondragleave: function (event) {
    var draggableElement = event.relatedTarget,
    dropzoneElement = event.target;
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    checkMixture(draggableElement);
  },
  ondrop: function (event) {
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});

function hexc(colorval) {
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    return color = '#' + parts.join('');
}