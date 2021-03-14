let x = 0;
let A = Array();
function them() {
    A[x] = document.getElementById("giatri").value;
    x++;
    document.getElementById("giatri").value = "";
}
function hienthi() {
    let e = "Các phần tử : <br>";
    for (let i = 0; i < A.length; i++) {
        e += "Element " + i + " = " + A[i] + "<br>";
    }
    document.getElementById("hienthi").innerHTML = e;
}