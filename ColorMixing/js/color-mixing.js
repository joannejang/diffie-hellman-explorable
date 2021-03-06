		<script>
		function updateCirc1(jscolor) {
			// console.log(jscolor);
		    // 'jscolor' instance can be used as a string
		    document.getElementById('circ1').style.backgroundColor = '#' + jscolor;
		    updateMixedColor(jscolor);
		}
		function updateCirc2(jscolor) {
			// console.log(jscolor);
		    // 'jscolor' instance can be used as a string
		    document.getElementById('circ2').style.backgroundColor = '#' + jscolor
		    updateMixedColor(jscolor);
		}

		function updateMixedColor(jscolor) {
			color1 = document.getElementById('circ1').style.backgroundColor;
			color2 = document.getElementById('circ2').style.backgroundColor;

			cmyk_color1 = RGBtoCMYK(color1);
			cmyk_color2 = RGBtoCMYK(color2);

			rgb_mixed_color = mixColors(cmyk_color1, cmyk_color2);
			console.log(rgb_mixed_color);

			document.getElementById('mixed_color').style.backgroundColor = rgb_mixed_color;	
		}

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
		</script>