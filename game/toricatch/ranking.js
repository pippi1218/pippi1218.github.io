var db = firebase.firestore();

function submit() {
    var el_n = document.getElementById("e_name")
    var name = el_n.value

    var el_p = document.getElementById("e_point")
    var point = Number(el_p.innerText)

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