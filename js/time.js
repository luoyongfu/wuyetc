let oHour = document.querySelector("#section .title-right .countDown .hour");
let oMinute = document.querySelector("#section .title-right .countDown  .minute");
let oSecond = document.querySelector("#section .title-right .countDown  .second");

function tow(n){
    return n >=0 && n < 10 ? n = "0" + n : n = "" + n;
}

let timer2 = setInterval(time,1000);
function time(){
    let oDate = new Date();
    let oldTime = oDate.getTime();
    let newDate = new Date("2019/8/21 00:00:00");
    let newTime = newDate.getTime();
    let second = Math.floor((newTime - oldTime)/1000);
    if(second <= 0){
        oHour.innerHTML = "00";
        oMinute.innerHTML = "00";
        oSecond.innerHTML = "00";
        clearInterval(timer2);
    }else{
        second %= 86400;
        let hour = Math.floor(second / 3600);
        second %= 3600;
        let minute = Math.floor(second / 60);
        second %= 60;
        oHour.innerHTML = tow(hour);
        oMinute.innerHTML = tow(minute);
        oSecond.innerHTML = tow(second);
    }
}
time();
console.log(oHour,oMinute, oSecond)