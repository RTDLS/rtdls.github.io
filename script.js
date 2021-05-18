var ina;
function get(){
  ina = document.getElementById("username").value;

}





function aaaa(){

}

  document.getElementById("insert").onclick = function(){
    get();
    firebase.database().ref('isIntact/').update({
        coordinate: "(52,45)",
        isIntact: ina,
   
    });
    }

    function load(){
        document.getElementById('not').innerHTML = "RTDLS not performed";
        document.getElementById('status').style.display  = "none";
        document.getElementById('cod').style.display  = "none";

        var ref = firebase.database().ref("/");
        var dd = "damage";
        var nn = "intact";
       
        ref.on("child_changed", function(snapshot) {
            var data = snapshot.val().isIntact;
            if(data == nn){
                console.log(data);
                document.getElementById('not').style.display  = "none";
                document.getElementById('status').style.display  = "block";
                document.getElementById('intact').style.display  = "block";
                document.getElementById('damage').style.display  = "none";
                document.getElementById('cod').style.display  = "none";

            }
            if(data == dd){
                console.log(data);
                document.getElementById('not').style.display  = "none";
                document.getElementById('status').style.display  = "block";
                document.getElementById('intact').style.display  = "none";
                document.getElementById('damage').style.display  = "block";
                document.getElementById('cod').style.display  = "block";
                document.getElementById('co').innerHTML  = snapshot.val().coordinate;
            }
        
            

        }, function (error) {
           console.log("Error: " + error.code);
        });
    }