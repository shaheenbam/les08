var f1, f2, f3, btn, out, sel;

f1 = document.querySelector('#field1');
f2 = document.querySelector('#field2');
f3 = document.querySelector('#field3');
btn = document.querySelector('button');
out = document.querySelector('output');
sel = document.querySelector('select');
//Name der Funktion calcAddition
function calc() {
    console.log(sel.value);
    var sum = 0;
    sum = Number(f1.value) + Number(f2.value) + Number(f3.value);
   
    out.value = sum;
}
btn.onclick = calc;
