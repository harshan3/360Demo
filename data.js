var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -0.3757537029673532,
        "pitch": 0.009218702278698032,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -0.38907272862752507,
          "pitch": 0.04473308386174857,
          "rotation": 4.71238898038469,
          "target": "1-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lift",
      "name": "Lift",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.1486210214376733,
        "pitch": -0.03945222708846963,
        "fov": 1.403086486818207
      },
      "linkHotspots": [
        {
          "yaw": -1.2999233949093494,
          "pitch": 0.3996128080437167,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
