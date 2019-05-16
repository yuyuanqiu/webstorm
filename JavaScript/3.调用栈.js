//调用栈，嵌套调用，导致栈空间溢出

//闭包
function notice() {
    return toElse();
}
function toElse() {
    return notice();
}
console.log(notice() + "came here!");