function adduser() {
    player1Name=document.getElementById("player1_input").value;
    player2Name=document.getElementById("player2_input").value;
    localStorage.setItem("player1name",player1Name);
    localStorage.setItem("player2name",player2Name);
    window.location="game_page.html";
}