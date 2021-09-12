var db = firebase.database();


function submit() {
    var el_n = document.getElementById("e_name")
    var name = el_n.value
    if (name == "") {
        alert("Please fill out the blank!");
        return;
    }
    db.collection("scores").add({
        name: name,
        point: 12,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}