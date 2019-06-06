var second = getId('second');
second.onclick = function () {
    console.log(this);
    console.log(window.history);
};

function getId(id) {
    return document.getElementById(id);
}