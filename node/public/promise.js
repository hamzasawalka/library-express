var title = document.getElementById('title');
var age = document.getElementById('age');

var a = function (){
 console.log('asdasda')
}

function send2() {
    var p =  new Promise( (resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                resolve(a);
                
            }
        };
        xhttp.open("get", "/getAge");
        xhttp.send(age.value);

    });
    // debugger
    return p;
}
function send(){
    
    send2().then(
        value => console.log(value())
        ,err => console.log(err)
        );

}


