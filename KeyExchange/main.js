var stage = 1;

function checkStage(){

  user_private_color = document.querySelector("#user_private_color");
  bank_private_color = document.querySelector("#bank_private_color");
  user_mix_color = document.querySelector("#user_mix_color");
  bank_mix_color = document.querySelector("#bank_mix_color");
  public_color = document.querySelector("#public_color");
  public_color = document.querySelector("#public_color");
  mixer1 = document.querySelector("#mixer1");
  mixer2 = document.querySelector("#mixer2");
  bank_mix_container = document.querySelector("#bank_mix_container");
  //Start with public color and 2 private colors
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
      public_color.classList.add('drag');
      public_color.classList.remove('nondrag');
      mixer1.classList.remove('drop');
      mixer1.classList.add('nondrop');
      mixer2.classList.add('drop');
      mixer2.classList.remove('nondrop');
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
    user_mix_color.style.backgroundColor = "#354354";
    user_mix_color.classList.add('nondrag');
    user_mix_color.classList.remove('drag');
    public_color.classList.add('nondrag');
    public_color.classList.remove('drag');
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    mixer1.style.backgroundColor = "#ccc";
    mixer2.style.backgroundColor = "#ccc";
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
    console.log("stage3");
    bank_private_color.classList.remove('drag');
    bank_private_color.classList.add('nondrag');
    public_color.classList.add('drag');
    public_color.classList.remove('nondrag');
    mixer1.classList.remove('drop');
    mixer1.classList.add('nondrop');
    mixer2.classList.add('drop');
    mixer2.classList.remove('nondrop');
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
    bank_mix_color.style.backgroundColor = "#f3d2f3";
    bank_mix_color.classList.add('nondrag');
    bank_mix_color.classList.remove('drag');
    public_color.classList.add('nondrag');
    public_color.classList.remove('drag');
    mixer2.classList.add('nondrop');
    mixer2.classList.remove('drop');
    mixer1.style.backgroundColor = "#ccc";
    mixer2.style.backgroundColor = "#ccc";
    user_mix_color.classList.remove('nondrag');
    user_mix_color.classList.add('drag');
    bank_mix_container.classList.add('drop')
    stage++;
    
  } else if (stage == 5) {
    
  } else if (stage == 6) {
    
  } else if (stage == 7) {
    
  } else if (stage == 8) {
    
  } else if (stage == 9) {
    
  } else if (stage == 10) {
    
  }
}

function makeNondrag() {

}

function checkMixture() {

  if (stage == 1) {
    /*
    one color must be public and one color must be private
    if private color is user then set user mixture to mix
    if private color is bank then set bank mixture to mix
    else ERROR can't mix two colors that are both private
    check steps
    */
    checkStage();
  } else if (stage == 2) {
    checkStage();
  } else if (stage == 3) {
    checkStage();
  } else if (stage == 4) {
    checkStage();
  } else if (stage == 5) {
    checkStage();
  } else if (stage == 6) {
    checkStage();
  } else if (stage == 7) {
    checkStage();
  } else if (stage == 8) {
    checkStage();
  } else if (stage == 9) {
    checkStage();
  } else if (stage == 10) {
    checkStage();
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

    if (dropzoneElement.id == "bank_mix_container") {
      dropzoneElement.classList.add('drop-target');
      draggableElement.classList.add('can-drop');
      bank_mix_color = document.querySelector("#bank_mix_color");
      var color1 = $(bank_mix_color).css("background-color");
      var color2 = $(draggableElement).css("background-color");
      draggableElement.style.backgroundColor = hexc(color1);
      bank_mix_color.style.backgroundColor = hexc(color2);
    } else {
      // feedback the possibility of a drop
      var color = $(draggableElement).css("background-color");
      console.log(hexc(color));
      dropzoneElement.style.backgroundColor = hexc(color);
    }
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    checkMixture();
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