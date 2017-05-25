var stage = 1;

function checkStage(){
  //Start with public color and 2 private colors
  if (stage == 1) {
    /*
    if both mixtures have colors then move to next step
    */
  } else if (stage == 2) {
    
  } else if (stage == 3) {
    
  } else if (stage == 4) {
    
  } else if (stage == 5) {
    
  } else if (stage == 6) {
    
  } else if (stage == 7) {
    
  } else if (stage == 8) {
    
  } else if (stage == 9) {
    
  } else if (stage == 10) {
    
  }
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
  } else if (stage == 2) {
    
  } else if (stage == 3) {
    
  } else if (stage == 4) {
    
  } else if (stage == 5) {
    
  } else if (stage == 6) {
    
  } else if (stage == 7) {
    
  } else if (stage == 8) {
    
  } else if (stage == 9) {
    
  } else if (stage == 10) {
    
  }
}

// target elements with the "draggable" class
interact('.has_color')
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
interact('.color_mixer').dropzone({
  // only accept elements matching this CSS selector
  accept: '.has_color',
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

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    var color = $(draggableElement).css("background-color");
    console.log(hexc(color));
    dropzoneElement.style.backgroundColor = hexc(color);
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
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