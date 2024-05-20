const toothDOM = document.getElementById("dişler");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


toothDOM.onclick = () => {
    modal.style.display = "block";
    console.log("tıklandı");
}

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
