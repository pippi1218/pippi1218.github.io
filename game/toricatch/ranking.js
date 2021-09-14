var db = firebase.firestore();

function submit(p) {

    var el_n = document.getElementById("e_name")
    var name = el_n.value

    var point = p

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

    //scoreの高い順に10個取得する
    db.collection("scores").orderBy('point', 'desc').limit(10).get().then((querySnapshot) => {
            var buff = [];
            var html = "<ol>";
            querySnapshot.forEach((doc) => {
                var data = doc.data();
                html += `<li>${data.name} :${data.point}羽</li>`;
                buff.push(doc.id);
            });
            html += "</ol>";
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