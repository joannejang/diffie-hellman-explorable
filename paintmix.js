  // target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true, //false,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1}
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      // leaving this be for later
    }
  });

    // target elements with the "draggable" class
interact('.draggable-2')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true, //false,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1}
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListenerMystery,
    // call this function on every dragend event
    onend: function (event) {
      // leaving this be for later
    }
  });

var blue_x1 = 200; //205;
var blue_x2 = 500; // 405;
var yellow_x1 = 0;
var yellow_x2 = 200;

var intersect_x1 = 0;
var intersect_x2 = 0;


function dragMoveListener (event) {
  var target = event.target,
  // keep the dragged position in the data-x/data-y attributes
  x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
  y = (parseFloat(target.getAttribute('data-y')) || 0);

  // translate the element
  target.style.webkitTransform = 
  target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);

  if (target.getAttribute('id') == 'drag-2') {
    blue_x1 = x + 200; // initial x offset
    blue_x2 = blue_x1 + 300; // width offset
  } else { // yellow
    yellow_x1 = x;
    yellow_x2 = yellow_x1 + 200; // width offset
  }

  // console.log(blue_x1, blue_x2, yellow_x1, yellow_x2);
  if (((yellow_x1 > blue_x2 && yellow_x2 > blue_x2)) || (blue_x1 > yellow_x2 && blue_x2 > yellow_x2)) {
    // no intersection
    intersection.style.width = 0;
    intersect_x2 = intersect_x1
  } else {
    // intersection
    if (yellow_x1 > blue_x1 && yellow_x2 < blue_x2) {
      intersect_x1 = yellow_x1;
      intersect_x2 = yellow_x2;
    } else if (yellow_x2 > blue_x2) {
      intersect_x1 = yellow_x1;
      intersect_x2 = blue_x2;
      $("#intersection").width(intersect_x2 - intersect_x1);
    } else if (blue_x2 > yellow_x2) {
      intersect_x1 = blue_x1;
      intersect_x2 = yellow_x2;
      $("#intersection").width(intersect_x2 - intersect_x1);
    }
  }
  $("#intersection").css("left", intersect_x1);
}

var mystery_x1 = 200; 
var mystery_x2 = 500; 
var pink_x1 = 0;
var pink_x2 = 200;

var intersect_x1_mystery = 0;
var intersect_x2_mystery = 0;
var old_intersect_x1_mystery = 0;

var mystery_initial_color = "pink";


function dragMoveListenerMystery (event) {
  var target = event.target,
  // keep the dragged position in the data-x/data-y attributes
  x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
  y = (parseFloat(target.getAttribute('data-y')) || 0);

  // translate the element
  target.style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)';
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

  // update the posiion attributes
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);

  var intersection_mystery = document.getElementById('intersection_mystery');

  if (target.getAttribute('id') === "drag-4") {
    mystery_x1 = x + 200; // initial x offset
    mystery_x2 = mystery_x1 + 300; // width offset
  } else { // pink
    pink_x1 = x;
    pink_x2 = pink_x1 + 200; // width offset
  }

  // console.log(mystery_x1, mystery_x2, pink_x1, pink_x2);
  if (((pink_x1 > mystery_x2 && pink_x2 > mystery_x2)) || (mystery_x1 > pink_x2 && mystery_x2 > pink_x2)) {
    // no intersection
    intersection_mystery.style.width = 0;
    intersect_x2_mystery = intersect_x1_mystery;
  } else {
    // intersection
    old_intersect_x1_mystery = intersect_x1_mystery;
    if (pink_x1 > mystery_x1 && pink_x2 < mystery_x2) {
      intersect_x1_mystery = pink_x1;
      intersect_x2_mystery = pink_x2;
    } else if (pink_x2 > mystery_x2) {
      intersect_x1_mystery = pink_x1;
      intersect_x2_mystery = mystery_x2;
      $("#intersection_mystery").width(intersect_x2_mystery - intersect_x1_mystery);
    } else if (mystery_x2 > pink_x2) {
      intersect_x1_mystery = mystery_x1;
      intersect_x2_mystery = pink_x2;
      $("#intersection_mystery").width(intersect_x2_mystery - intersect_x1_mystery);
    }
  }
  $("#intersection_mystery").css("left", intersect_x1_mystery);
}

function showPicker() {
  document.getElementById('color_input').jscolor.show();
}
    
var attempts = 0;
var mystery_attempts = 0;
var color1 = "rgb(255, 153, 102)";
var color2;

var intersection_color = "rgb(255, 192, 203)";

function updateIntersection(jscolor) { // mixing with pink
  color2 = jscolor.toRGBString();
  // // 'jscolor' instance can be used as a string
  document.getElementById('drag-4').style.backgroundColor = '#' + jscolor;
  $("#drag-4").css("border", "none");
  updateMixedColor(jscolor);

  mystery_attempts += 1;
  document.getElementById('attempts_mystery').innerHTML = "# of Attempt(s): " + mystery_attempts;
  document.getElementById('match_mystery').style.backgroundColor = (mystery_attempts % 2 == 0) ? '#808080' : '#787878';
}

function updateMixedColor(jscolor) {
  cmyk_color1 = RGBtoCMYK(color1);
  cmyk_color2 = RGBtoCMYK(color2);

  rgb_mixed_color = mixColors(cmyk_color1, cmyk_color2);

  document.getElementById('intersection_mystery').style.backgroundColor = rgb_mixed_color;
  document.getElementById('mixed_color_mystery').style.backgroundColor = rgb_mixed_color;
  document.getElementById('drag-4').style.backgroundColor = '+' + jscolor;  
  document.getElementById('mystery_result').innerHTML = '<b>Mixed Color</b><br>' + rgbToHex(rgb_mixed_color) + '<br><br>';
}

// COLOR MANIPULATION
function RGBtoCMYK(color) {
  rgb = color.substring(4, color.length-1)
          .replace(/ /g, '')
          .split(',');

  cyan    = 255 - rgb[0];
  magenta = 255 - rgb[1];
  yellow  = 255 - rgb[2];
  black   = Math.min(cyan, magenta, yellow);
  cyan    = ((cyan - black) / (255 - black));
  magenta = ((magenta - black) / (255 - black));
  yellow  = ((yellow  - black) / (255 - black));
  return {c:cyan,m:magenta,y:yellow,k:black/255,a:50};
}

function CMYKtoRGB(color) {
  color.c = color.c;
  color.m = color.m;
  color.y = color.y;
  color.k = color.k;
  R = color.c * (1.0 - color.k) + color.k;
  G = color.m * (1.0 - color.k) + color.k;
  B = color.y * (1.0 - color.k) + color.k;
  R = Math.round((1.0 - R) * 255.0 + 0.5);
  G = Math.round((1.0 - G) * 255.0 + 0.5);
  B = Math.round((1.0 - B) * 255.0 + 0.5);
  RGB_str = "rgb(" + R + "," + G + "," + B + ")"
  return RGB_str;
}

function mixColors(color1, color2){
  if(typeof(color1)=='object'&&(color1 instanceof Array)==false)
    color1 = new Array(color1,color2);

  C = 0;
  M = 0;
  Y = 0;
  K = 0;
  A = 0;

  for(var i=0;i<color1.length;i++){
    C += color1[i].c;
    M += color1[i].m;
    Y += color1[i].y;
    K += color1[i].k;
    A += color1[i].a;
  }

  C = C/color1.length;
  M = M/color1.length;
  Y = Y/color1.length;
  K = K/color1.length;
  A = A/color1.length;
  color = {c:C,m:M,y:Y,k:K,a:A};
  color = CMYKtoRGB(color);
  return color;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(color) {
  rgb = color.substring(4, color.length-1)
          .replace(/ /g, '')
          .split(',');
  hex_string = "#" + decimalToHexString(parseInt(rgb[0])) + decimalToHexString(parseInt(rgb[1])) + decimalToHexString(parseInt(rgb[2]));
  return hex_string.toUpperCase();
}

function decimalToHexString(number)
{
  if (number < 0)
  {
      number = 0xFFFFFFFF + number + 1;
  } else if (number == 256) {
    return "FF";
  }
  return number.toString(16).toUpperCase();
}