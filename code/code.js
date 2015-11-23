(function() {
    var context = canvas.getContext('2d');
    context.font = 'verdana';

    var mousePosition = {
      x: 0,
      y: 0
    };
    var mousePressed = false;

    canvas.addEventListener('mousemove', function(event) {
      mousePosition.x = event.offsetX || event.layerX;
      mousePosition.y = event.offsetY || event.layerY;
    });

    canvas.addEventListener('mousedown', function(event) {
      mousePressed = true;
    });
    canvas.addEventListener('mouseup', function(event) {
      mousePressed = false;
    });

    function Button(x, y, w, h, text, colors, clickCB) {
      this.x = 200;
      this.y = 100;
      this.width = w;
      this.height = h;
      this.colors = colors;
      this.text = text;

      this.state = 'default'; 
        
      var isClicking = false;

      this.update = function() {
        if (mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
            mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) {
          this.state = 'hover';

          if (mousePressed) {
            this.state = 'active';
              
            if (typeof clickCB === 'function' && !isClicking) {
              clickCB();
              isClicking = true;
            }
          }
          else {
            isClicking = false;
          }
        }
        else {
          this.state = 'default';
        }
      };

      this.draw = function() {
        context.save();

        var colors = this.colors[this.state];
        var halfH = this.height / 2;

        // button
        context.fillStyle = colors.top;
        context.fillRect(this.x, this.y, this.width, halfH);
        context.fillStyle = colors.bottom;
        context.fillRect(this.x, this.y + halfH, this.width, halfH);

        // text
        var size = context.measureText(this.text);
        var x = this.x + (this.width - size.width) / 2;
        var y = this.y + (this.height - 15) / 2 + 12;

        context.fillStyle = '#FFF';
        context.fillText(this.text, x, y);

        context.restore();
      };
    }

    var playButton = new Button(50, 50, 100, 50, 'Red Pill', {
      'default': {
        top: '#FA1122',
        bottom: '#B7000D'
      },
      'hover': {
        top: '#678834',
        bottom: '#093905'
      },
      'active': {
        top: '#EB7723',
        bottom: '#A80000'
      }
    }, function() {
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");

		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

		var english = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+<>,.?/1234567890";
		english = english.split("");

		var font_size = 10;
		var columns = canvas.width/font_size;
		var drops = [];
		for(var x = 0; x < columns; x++)
			drops[x] = 1; 

		function draw() {
			context.fillStyle = "rgba(0, 0, 0, 0.05)";
			context.fillRect(0, 0, canvas.width, canvas.height);
	
			context.fillStyle = "#0F0";
			context.font = font_size + "verdana";
			for(var i = 0; i < drops.length; i++) {
				var text = english[Math.floor(Math.random()*english.length)];
				context.fillText(text, i*font_size, drops[i]*font_size);
		
				if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
					drops[i] = 0;
		
				drops[i]++;
			}
		}

		setInterval(draw, 33);
    });

    function animate() {
      requestAnimationFrame(animate);

      playButton.update();
      playButton.draw();
    }

    requestAnimationFrame(animate);
})();
(function() {
    var context = canvas.getContext('2d');
    context.font = 'verdana';

    var mousePosition = {
      x: 0,
      y: 0
    };
    var mousePressed = false;

    canvas.addEventListener('mousemove', function(event) {
      mousePosition.x = event.offsetX || event.layerX;
      mousePosition.y = event.offsetY || event.layerY;
    });

    canvas.addEventListener('mousedown', function(event) {
      mousePressed = true;
    });
    canvas.addEventListener('mouseup', function(event) {
      mousePressed = false;
    });

function Button(x, y, w, h, text, colors, clickCB) {
      this.x = 200;
      this.y = 200;
      this.width = w;
      this.height = h;
      this.colors = colors;
      this.text = text;

      this.state = 'default'; 
        
      var isClicking = false;

      this.update = function() {
        if (mousePosition.x >= this.x && mousePosition.x <= this.x + this.width &&
            mousePosition.y >= this.y && mousePosition.y <= this.y + this.height) {
          this.state = 'hover';

          if (mousePressed) {
            this.state = 'active';
              
            if (typeof clickCB === 'function' && !isClicking) {
              clickCB();
              isClicking = true;
            }
          }
          else {
            isClicking = false;
          }
        }
        else {
          this.state = 'default';
        }
      };

      this.draw = function() {
        context.save();

        var colors = this.colors[this.state];
        var halfH = this.height / 2;

        // button
        context.fillStyle = colors.top;
        context.fillRect(this.x, this.y, this.width, halfH);
        context.fillStyle = colors.bottom;
        context.fillRect(this.x, this.y + halfH, this.width, halfH);

        // text
        var size = context.measureText(this.text);
        var x = this.x + (this.width - size.width) / 2;
        var y = this.y + (this.height - 15) / 2 + 12;

        context.fillStyle = '#FFF';
        context.fillText(this.text, x, y);

        context.restore();
      };
    }

    var playButton = new Button(50, 50, 100, 50, 'Deeper', {
      'default': {
        top: '#1879BD',
        bottom: '#084D79'
      },
      'hover': {
        top: '#678834',
        bottom: '#093905'
      },
      'active': {
        top: '#EB7723',
        bottom: '#A80000'
      }
    }, function() {
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		context.font = "verdana";
		context.fillStyle = "red";
		context.textAlign = "center";
		context.fillText("The Matrix has you...", canvas.width / 2, canvas.height / 2);
	 });

    function animate() {
      requestAnimationFrame(animate);

      playButton.update();
      playButton.draw();
    }

    requestAnimationFrame(animate);
})();



