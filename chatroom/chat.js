
var db = firebase.database();
db.ref('msg').on("child_added", function(obj) {
    var data = obj.val();
    var name = data.name;
    var content = data.content;
    var e = document.createElement("div");
    e.setAttribute("class", "msg");
    e.innerHTML = "<p class='name'>名前: " + name + "</p><p class='content'>" + content + "</p>";
    var box=document.getElementById("main");
    box.appendChild(e);
    box.scrollTop=box.scrollHeight;
})
function submit() {
    var el_n = document.getElementById("e_name")
    var el_c = document.getElementById("e_content")
    var name = el_n.value,
        content = el_c.value;
    if (name == "" || content == "") {
        alert("Please fill out the blank!");
        return;
    }
    el_c.value = "";
    db.ref('msg').push().set({
        "name": name,
        "content": content
    });
}
