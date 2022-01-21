const particlesConfig = 
{
  "background": {
    "color": {
      "value": "#009688"
    },
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "enable": false,
    "zIndex": 0
  },
  "interactivity": {
    "events": {
      "onClick": {
        "mode": "push"
      },
      "onHover": {
        "enable": true,
        "mode": "",
        "parallax": {
          "enable": true,
          "force": 100
        }
      }
    },
    "modes": {
      "bubble": {
        "distance": 400,
        "duration": 2,
        "opacity": 0.8,
        "size": 40
      },
      "grab": {
        "distance": 400
      }
    }
  },
  "particles": {
    "color": {
      "value": "#000000"
    },
    "links": {
      "color": {
        "value": "#000000"
      },
      "distance": 200,
      "enable": true,
      "opacity": 0.4
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "path": {},
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      },
      "spin": {}
    },
    "number": {
      "density": {
        "enable": true,
        "area": 800,
        "factor": 400
      }
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 0.5
      },
      "animation": {
        "enable": true,
        "speed": 3,
        "minimumValue": 0.1
      }
    },
    "size": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 10
      },
      "animation": {
        "enable": true,
        "speed": 20,
        "minimumValue": 0.1
      }
    }
  }
}


      export default particlesConfig