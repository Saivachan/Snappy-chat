function sign_in(){
    user_id = document.getElementById("user_id").value;
    localStorage.setItem("user_id", user_id);
    window.location="chat_room.html";
}