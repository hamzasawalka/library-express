// var socket = io('http://localhost:5000');
// console.log(socket)
// socket.on('saveDone', function(data) {
//     console.log('Data' ,data);
//   });
function detectHtmlInXhr(callback) {
    if (!window.XMLHttpRequest) {
      window.setTimeout(function() { callback(false); }, 0);
      return;
    }
    var done = false;
    var xhr = new window.XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && !done) {
        done = true;
        callback(!!(this.responseXML && this.responseXML.title && this.responseXML.title == "&&<"));
      }
    }
    xhr.onabort = xhr.onerror = function() {
      if (!done) {
        done = true;
        callback(false);
      }
    }
    try {
      xhr.open("GET", "detect.html");
      xhr.responseType = "document";
      xhr.send();
    } catch (e) {
      window.setTimeout(function() {
        if (!done) {
          done = true;
          callback(false);
        } 
      }, 0);
    }
  }