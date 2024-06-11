let son1 = Number(prompt("1-sonni kiriting"));
let son2 = Number(prompt("2-sonni kiriting"));

function max(n1, n2) {
    if(n1 > n2){
        return n1;
    } else {
        return n2;
    }
}

alert(max(son1, son2));
