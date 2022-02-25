
  function findOppositeNumber() {
    document.getElementById("ketqua").innerHTML = ''
    let inputNumber = document.getElementById("inputN").value
    inputNumber = parseInt(inputNumber)
    KQ = inputNumber + 10/2
    if (inputNumber === ''){
        alert('Bạn chưa nhập số')
        return
    }
    if (inputNumber > 9 || inputNumber < 0 ) {
        alert('Số bạn tìm nằm ngoài khoảng 0 đến 9')
        return
    }
    if (inputNumber >= 5 ){
        KQ = KQ - 10
        document.getElementById("ketqua").innerHTML += KQ
    } else {
        KQ = KQ
        document.getElementById("ketqua").innerHTML += KQ
    }
   
}

function merge() {
    let chuoi1 = document.getElementById("chuoi1").value;
for (let i = 0; i < chuoi1.length; i++){
    console.log(chuoi1[i]);
}
let chuoi2 = document.getElementById("chuoi2").value;
for (let i = 0; i < chuoi2.length; i++){
    console.log(chuoi2[i]);
}
let arr = Array.from(chuoi1, function(a){
    return a+a
})
console.log(arr)
document.getElementById("ketqua2").innerHTML += chuoi1 + chuoi2
}

function mathRandom() {
let num = Math.floor(Math.random() * 10) + 1;
document.getElementById("ketqua3").innerHTML = num
let lucNum = document.getElementById("text3").value
lucNum = parseInt(lucNum)
let value = true
document.getElementById("div1").style.display = "none"
if (lucNum > 10 || lucNum <= 0){
   
  document.getElementById("div1").style.display = "block"
  value = false
}
else if (lucNum === ''){
    alert('Bạn chưa nhập số')
    value= false;
 }

else if (lucNum != num){
    alert('bạn đã dự đoán sai')
    value= false;
} 
else if (lucNum === num) {
    alert('Bạn đã trúng thưởng')
    value = true;
}

}