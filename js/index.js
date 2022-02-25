
  function findOppositeNumber() {
    document.getElementById("ketqua").innerHTML = ''
    let inputNumber = document.getElementById("inputN").value
    inputNumber = parseInt(inputNumber)
    KQ = inputNumber + 10/2
    if (document.getElementById("inputN").value == ''){
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
let arr1 = Array.from(chuoi1, function(a){
    return a
})
console.log(arr1)
let arr2 = Array.from(chuoi2, function(a){
    return a
})
console.log(arr2)
arr3 = []
//const a = arr1.length;
//if (arr1.length < arr2.length) {
  //  a = arr2.length
   // return a
//}
for (i=0; i<=arr1.length; i++) {
    arr3.push(arr1.slice([i],i+1) + arr2.slice([i],i+1))
}
document.getElementById("ketqua2").innerHTML = ''
document.getElementById("ketqua2").innerHTML += arr3.join('')
}

let counter = 0;
//localStorage.setItem('clickCounter',counter)
//counter = localStorage.getItem('clickCounter').value
counter = parseInt(counter)


function mathRandom() {
let num = Math.floor(Math.random() * 10) + 1;
document.getElementById("ketqua3").innerHTML = num;
let lucNum = document.getElementById("text3").value;
lucNum = parseInt(lucNum)
let value = true
document.getElementById("div1").style.display = "none"
if (lucNum > 10 || lucNum <= 0){
   
  document.getElementById("div1").style.display = "block"
  value = false
}
else if (document.getElementById("text3").value ==""){
    document.getElementById("div2").style.display = "block"
    value= false;
 }

else if (lucNum != num){
    document.getElementById("div1").style.display = "none"
    document.getElementById("div2").style.display = "none"
    document.getElementById("div3").innerHTML = 'Chúc bạn may mắn lần sau'
    value= false;
} 
else if (lucNum === num) {
    
    document.getElementById("div1").style.display = "none"
    document.getElementById("div2").style.display = "none"
    document.getElementById("div3").innerHTML = 'Chúc mừng! Bạn đã trúng thưởng'
    value = true;
}



counter = counter + 1
if (counter > 3) {
   
    document.getElementById("quay").innerHTML = ""
    document.getElementById("quay").innerHTML += "Hết lượt quay"
    document.getElementById("quay").style.color = "orange"
    document.getElementById("text3").style.display ="none"
}
if (counter == 3) {
   document.getElementById("luot").innerHTML =''
    document.getElementById("luot").innerHTML = "0"
}
if (counter == 2) {
   document.getElementById("luot").innerHTML =''
   document.getElementById("luot").innerHTML = "1"
}

else if (counter == 1) {
    document.getElementById("luot").innerHTML =''
 document.getElementById("luot").innerHTML = "2"
}
 


   
    



}

