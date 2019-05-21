var app = {
    initialize: function() {
        document.addEventListener('deviceready', () => {
            console.log(navigator.camera);
        }, false);
    }
};

document.getElementById('takephoto').addEventListener('click', function(){
    navigator.camera.getPicture(cbDataSuccess, cbDataError, {
        sourceType: Camera.PictureSourceType.CAMERA,
        destinationType: Camera.DestinationType.DATA_URL,
        correctOrientation: true
      }
    );
  });

var takePicture = (options) => {
    navigator.camera.getPicture((image_data) => {

            var image = document.getElementById('image');
            image.src = "data:image/jpeg;base64," + image_data;
        },
        (error) => {
            console.log(error)
        }, options)
}

app.initialize();