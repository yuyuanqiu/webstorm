var first = getId('first');
first.onclick = function () {
    console.log(this);
    console.log(window.history);
};

function getId(id) {
    return document.getElementById(id);
}
