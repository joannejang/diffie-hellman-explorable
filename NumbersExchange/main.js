var stage = 1;
var showMix = false;
var mixColor;

var USER_MIX = "#b4a0b7"
var BANK_MIX = "#B0948F"
var FINAL_COLOR = "#8facb5"

function delay(delayMillis){
  setTimeout(function() {
    //your code to be executed after 1 second
  }, delayMillis);
}

function checkStage(){

  user_private_color = document.querySelector("#user_private_color");
  bank_private_color = document.querySelector("#bank_private_color");
  user_mix_color = document.querySelector("#user_mix_color");
  bank_mix_color = document.querySelector("#bank_mix_color");
  public_color_base = document.querySelector("#public_color_base");
  mixer1 = document.querySelector("#mixer1");
  mixer2 = document.querySelector("#mixer2");
  mixer_intersection = document.querySelector("#mixer_intersection_svg");
  mixer4_result = document.querySelector("#mixer4_result");
  bank_mix_container = document.querySelector("#bank_mix_container");
  hacker_mix_diamond_1 = document.querySelector("#hacker_mix_diamond_1");
  hacker_mix_diamond_2 = document.querySelector("#hacker_mix_diamond_2");
  user_shared_color = document.querySelector("#user_shared_color");
  bank_shared_color = document.querySelector("#bank_shared_color");
  instructions =  document.querySelector("#instruction_text");
  base_text = document.querySelector("#base_text");
  exp_text =  document.querySelector("#exp_text");
  solution_text =  document.querySelector("#solution_text");

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
      user_private_color.classList.remove('drag');
      user_private_color.classList.add('nondrag');
      public_color_base.classList.add('drag');
      public_color_base.classList.remove('nondrag');
      mixer2.classList.remove('drop');
      mixer2.classList.add('nondrop');
      mixer1.classList.add('drop');
      mixer1.classList.remove('nondrop');
      showMix = true;
      mixColor = USER_MIX;
      stage ++;
      exp_text.innerHTML = "6";
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
    instructions.innerHTML = "The mix you have just created is the result of a one-way function. It is nearly impossible to find your private number based off of the mix so you can safely transfer this number. Go ahead and create a mix for the bank by using the bank's private number and the public number.";
    document.getElementById("user_mix_color_diamond").style.fill = USER_MIX;
    document.getElementById("user_mix_color_text").style.fill = "#FFF";
    user_mix_color.classList.add('nondrag');
    user_mix_color.classList.remove('drag');

    public_color_base.classList.add('nondrag');
    public_color_base.classList.remove('drag');
    mixer1.classList.add('nondrop');
    mixer1.classList.remove('drop');
    setTimeout(function() {
      mixer1.style.backgroundColor = "#ccc";
      mixer2.style.backgroundColor = "#ccc";
      mixer4_result.style.fill = "#fff";
      base_text.innerHTML = "";
      exp_text.innerHTML = "";
      solution_text.innerHTML = "";
    }, 1000);
    mixer2.classList.add('drop');
    mixer2.classList.remove('nondrop');
    bank_private_color.classList.remove('nondrag');
    bank_private_color.classList.add('drag');
    base_text.innerHTML = "5";
    solution_text.innerHTML = "8";
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
    bank_private_color.classList.remove('drag');
    bank_private_color.classList.add('nondrag');
    public_color_base.classList.add('drag');
    public_color_base.classList.remove('nondrag');
    mixer2.classList.remove('drop');
    mixer2.classList.add('nondrop');
    mixer1.classList.add('drop');
    mixer1.classList.remove('nondrop');
    showMix = true;
    mixColor = BANK_MIX;
    exp_text.innerHTML = "15";
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
    instructions.innerHTML = "Now that you and the bank have mixed numbers. Go ahead and swap your mixed number with the bank."
    document.getElementById("bank_mix_color_diamond").style.fill = BANK_MIX;

    // bank_mix_color.style.backgroundColor = "#f3d2f3";
    bank_mix_color.classList.add('nondrag');
    bank_mix_color.classList.remove('drag');
    public_color_base.classList.add('nondrag');
    public_color_base.classList.remove('drag');
    mixer1.classList.add('nondrop');
    mixer1.classList.remove('drop');
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    user_mix_color.classList.remove('nondrag');
    user_mix_color.classList.add('drag');
    $(user_mix_color_diamond).style.border = "2px dashed gray";
    bank_mix_container.classList.add('drop');
    setTimeout(function() {
      mixer1.style.backgroundColor = "#ccc";
      mixer2.style.backgroundColor = "#ccc";
      mixer4_result.style.fill = "#fff";
      base_text.innerHTML = "";
      exp_text.innerHTML = "";
      solution_text.innerHTML = "";
    }, 1000);

    base_text.innerHTML = "5";
    solution_text.innerHTML = "19";
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
    instructions.innerHTML = "Looks like the hacker has intercepted the mixed numbers while you and your bank were swapping them. Luckily, it is nearly impossible to guess a private numbers from a mix. Next, use your newly, received mix as the base with your private number as the exponent to create a shared number."
    hacker_mix_diamond_1.style.fill = USER_MIX;
    hacker_mix_diamond_2.style.fill = BANK_MIX;   
    user_private_color.classList.add('drag');
    user_private_color.classList.remove('nondrag');
    public_color_base.classList.add('nondrag');
    public_color_base.classList.remove('drag');
    // user_mix_color.classList.remove('nondrag');
    // user_mix_color.classList.add('drag');
    mixer1.classList.remove('drop');
    mixer1.classList.add('nondrop');
    mixer2.classList.add('drop');
    mixer2.classList.remove('nondrop');
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
    user_private_color.classList.add('drag');
    user_private_color.classList.remove('nondrag');
    public_color_base.classList.add('nondrag');
    public_color_base.classList.remove('drag');
    mixer1.classList.remove('nondrop');
    mixer1.classList.add('drop');
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    user_mix_color.classList.remove('nondrag');
    user_mix_color.classList.add('drag');
    showMix = true;
    mixColor = FINAL_COLOR;
    exp_text.innerHTML = "6";
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
    instructions.innerHTML = "Repeat the same steps for the bank. Use the mix number that the bank just received as the base and bank's private number as the exponent."
    // need to set delay here
    user_shared_color_diamond.style.fill = FINAL_COLOR; // CHANGE THIS TO FINAL COLOR!!!
    mixer1.classList.add('nondrop');
    mixer1.classList.remove('drop');
    user_mix_color.classList.add('nondrag');
    user_mix_color.classList.remove('drag');
    bank_private_color.classList.add('drag');
    bank_private_color.classList.remove('nondrag');
    mixer2.classList.add('drop');
    mixer2.classList.remove('nondrop');
    setTimeout(function() {
        mixer1.style.backgroundColor = "#ccc";
        mixer2.style.backgroundColor = "#ccc";
        mixer4_result.style.fill = "#fff";
        base_text.innerHTML = "";
        exp_text.innerHTML = "";
        solution_text.innerHTML = "";
      }, 1000);
    base_text.innerHTML = "19";
    solution_text.innerHTML = "2";

    stage ++;
    
  } else if (stage == 8) {
    mixer1.classList.add('drop');
    mixer1.classList.remove('nondrop');
    bank_mix_color.classList.add('drag');
    bank_mix_color.classList.remove('nondrag');
    bank_private_color.classList.add('nondrag');
    bank_private_color.classList.remove('drag');
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    mixer1.classList.add('drop');
    mixer1.classList.remove('nondrop');
    showMix = true;
    mixColor = FINAL_COLOR;
    exp_text.innerHTML = "15";

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
    instructions.innerHTML = "Nice work! You and the bank have generated a shared key that can never be cracked by the hacker. The hacker would need access to either of the private keys to generate the shared key. Since you used a one-way function, it is impossible to find private numbers from the mixes."
    bank_shared_color_diamond.style.fill = FINAL_COLOR; // CHANGE THIS TO FINAL COLOR!!!
    bank_mix_color.classList.add('nondrag');
    bank_mix_color.classList.remove('drag');

    mixer1.classList.add('nondrop');
    mixer1.classList.remove('drop');

    base_text.innerHTML = "8";
    solution_text.innerHTML = "2";

    setTimeout(function() {
          mixer1.style.backgroundColor = "#ccc";
          mixer2.style.backgroundColor = "#ccc";
          mixer4_result.style.fill = "#fff";
          base_text.innerHTML = "";
          exp_text.innerHTML = "";
          solution_text.innerHTML = "";
        }, 1000);
    
    stage++;


  } else if (stage == 10) {
    instructions.innerHTML = "Nice work! You and the bank have generated a shared key that can never be cracked by the hacker. The hacker would need access to either of the private keys to generate the shared key. Since you used a one-way function, it is impossible to find private numbers from the mixes."
    bank_shared_color_diamond.style.fill = FINAL_COLOR; // CHANGE THIS TO FINAL COLOR!!!

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
      user_mix_color.style.color = BANK_MIX;
      bank_mix_color.style.color = USER_MIX;
      user_mix_number.x = "7.75356852";
      user_mix_number.y = "11";
      bank_mix_number.x = "8.60961914";
      bank_mix_number.y = "11.5";
      bank_mix_number.innerHTML = "8";
      user_mix_number.innerHTML = "19";
    } else {
      // feedback the possibility of a drop
      var color = $(draggableElement).css("color");
      console.log(hexc(color));
      dropzoneElement.style.backgroundColor = hexc(color);
      mixer4_result = document.querySelector("#mixer4_result");
      if (!showMix) { // should replace w boolean testing for middle section
          mixer4_result.style.fill = "#fff";//hexc(color);
      } else {
        console.log("show mix!");
        mixer4_result.style.fill = mixColor;
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