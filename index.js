
window.alert("Selamat Datang")
// just a normal comment

/*
let age = window.prompt("kamu berapa tahun?");
let radius = window.prompt("Berapa jari jari lingkaran? ");
radius = Number(radius);
let keliling = 2 * pi * radius;
let roundedkel = Math.round(keliling);
age =Number(age);
age += 1;
*/
const pi = 3.14159;
let count = 0;

/*
console.log(nametest.length);
console.log(nametest.charAt(0));
console.log(nametest.indexOf("d"));
nametest = nametest.toUpperCase();
*/




/*
console.log("Selamat ulang tahun. kamu sekarang", age, "tahun");
console.log("Keliling lingakaran adalah: ", keliling);
console.log("Jika dibulatkan maka hasilnya adalah: ", roundedkel);
*/

document.getElementById("myButton").onclick = function(){
    
    username = document.getElementById("myText").value;
    usernamermspace = username.replace(/ /g, "");
    usernamecount = usernamermspace.length;
    usernamecounttwo = String(usernamecount);
    namablk = username.slice(username.indexOf(" ") + 1);
    // nama belakang slice all words after index of space( space is counted ) and the add 1 so it start add word
    namadpn = username.slice(0, username.indexOf(" "));
    //nama dpn slice all words from 0 to index of space but space isnt included
    document.getElementById("myLabel").innerHTML = "Selamat datang " + username + " dan namamu memiliki " + usernamecounttwo + " huruf. " + "Nama depanmu adalah " + namadpn + " dan nama belakang mu adalah " + namablk;
}
// how is that work is the first line of the javascritp code is after we click by using the method of .onclick from the variable of "myButton", we create a function that happening each line from up to down. first is we create variable username and get the value from "myText" which is from the index.html file, and that variable is a input type of text, and then we put the username to a console. the last thing is by function innerhtml assigned to ",myLabel" which is the first line of the program, we change the value of "myLabel" to the new assigned value.

document.getElementById("myButton1").onclick = function(){

    age1 = document.getElementById("myText1").value;
    age2 = String(age1);

        if ((age1 >= 17) && (age1 <= 30)) {
            document.getElementById("myLabel1").innerHTML = "Wah ternyata kamu sudah " + age2 +" tahun";
        }
        else if (age1 >= 31) {
            document.getElementById("myLabel1").innerHTML = "Umurmu " + age2 +" tahun, tua sekali";
        }
        else if (age1 < 0) {
            document.getElementById("myLabel1").innerHTML = "Kamu belum lahir yaaa" + " masa " + age2 + " tahun";
        }
        else{
            document.getElementById("myLabel1").innerHTML = "masih kecil kamu" + " cuma " + age2 + " tahun";
        }
}
// same as above but because the input is number we converted it to string first

document.getElementById("submitcircle").onclick = function(){

    jarijav = document.getElementById("nilaicircle").value;
    kelilingjav = 2 * pi * jarijav;
    kelilingjavround = Math.round(kelilingjav);
    kelilingjav = String(kelilingjav);
    kelilingjavround = String(kelilingjavround);
    document.getElementById("labelcircle").innerHTML = "Keliling lingkaran adalah " + kelilingjav + " dan jika dibulatkan maka hasilnya " + kelilingjavround

}
// same as above but a little bit complex

document.getElementById("submitsegitiga").onclick = function(){

    a = document.getElementById("sisgak").value;
    b = document.getElementById("sisdar").value;
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    c = String(c);
    document.getElementById("labelmir").innerHTML = "Nilai sisi miring segitiga siku siku adalah " + c;



}
// pythagoras

document.getElementById("decreasebutton").onclick = function(){

    count-= 1;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("resetbutton").onclick = function(){

    count = 0;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("increasebutton").onclick = function(){

    count+= 1;
    document.getElementById("countlabel").innerHTML = count;
}
// reset increase 

document.getElementById("roll").onclick = function(){

    let bingo1 = Math.floor(Math.random() * 7);
    let bingo2 = Math.floor(Math.random() * 7);
    let bingo3 = Math.floor(Math.random() * 7);
    document.getElementById("youroll1").innerHTML = bingo1;
    document.getElementById("youroll2").innerHTML = bingo2;
    document.getElementById("youroll3").innerHTML = bingo3;

}

document.getElementById("mybutton").onclick = function(){
    if(document.getElementById("mycheckbox").checked){
        console.log("You are Subscribed");
    }
    else{
        console.log("You are not Subscribed");
    }
    if(document.getElementById("Gopay").checked){
        console.log("You are paying with gopay");
    }
    else if(document.getElementById("Shopee").checked){
        console.log("You are paying with Shopee");
    }
    else if(document.getElementById("LinkAja").checked){
        console.log("You are paying with LinkAja");
    }
    else{
        console.log("You must choose paying system");
    }
}   

document.getElementById("submitnilai").onclick = function(){
    inputnilai = document.getElementById("inputnilai");
    nilai = document.getElementById("nilai");
    switch(inputnilai.value){
        case "A":
            nilai.innerHTML = "You did Great";
            break;
        case "B":
            nilai.innerHTML = "You did Good";
            break;
        case "C":
            nilai.innerHTML = "You did Normal";
            break;
        case "D":
            nilai.innerHTML = "Barely Pass";
            break;
        case "E":
            nilai.innerHTML = "You dont study Enough but passed";
            break;
        case "F":
            nilai.innerHTML = "You failed";
            break;
        default:
            nilai.innerHTML = inputnilai.value + " is not a grade";
    }
}

document.getElementById("submitsuhu").onclick = function(){
    jsinputsuhu = document.getElementById("inputsuhu");
    if(!(jsinputsuhu.value > 0)){
        document.getElementById("suhu").innerHTML = "its cold outside";
    }
    else{
        document.getElementById("suhu").innerHTML = "its warm outside";
    }
}