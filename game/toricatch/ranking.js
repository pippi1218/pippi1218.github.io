function submit() {

    var el_n = document.getElementById("e_name")
    var name = el_n.value

    //var el_p = document.getElementById("e_point")
    //var point = Number(el_p.innerText)

    var point = 100

    if (name == "" || point == "") {
        alert("Please fill out the blank!");
        return;
    }
    db.collection("scores").add({
        name: name,
        point: point,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}

function read_ranking(){
    var LIST = [];  //ID保管用

    db.collection("scores").get().then((querySnapshot) => {
            var buff = [];
            var html = "<ul>";
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                html += `<li>${data.name}, ${data.point}</li>`;
                buff.push(doc.id);
            });
            html += "</ul>";
            LIST = buff;
            showMessage(html);
        })
        .catch((error)=>{
            showMessage(`データの取得に失敗しました (${error})`);
        });


    function showMessage(str){
        var msg = document.querySelector("#ranking");
        msg.innerHTML = str;
        msg.style.display = "block";
    }
}