    var socket = io.connect('http://localhost');
 
    // var div = document.getElementById('div');
    socket.on('saveDone', function(data) {
        console.log('Data' ,data);
        // div.innerHTML += data + '<br>';
      });
