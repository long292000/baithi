// let n= parseInt(prompt(`Nhap so nguyen duong n:`));
// let inputNumber=parseInt(prompt(`Nhap so can tim`));
// if(n<4 || n>20){
//     prompt(`Nhap sai moi nhap lai:`);
// }else{
//     function findOppositeNumber(n,inputNumber){
//         if (inputNumber<(n/2)) {
//             let a=(n/2)+inputNumber;
//             alert(`So can tim la ${a}`);
//         } else {
//             let a=inputNumber-(n/2);
//             alert(`So can tim la ${a}`);
//         } 
//     }
//     findOppositeNumber(n,inputNumber);
// }



// let String1= prompt(`Nhap chuoi 1:`);
// let String2= prompt(`Nhap chuoi 2:`);

// function merge2String(String1,String2){
//     let array1= String1.split("");
//     let array2=String2.split("");
//     let a="";
//     if(array1.length<array2.length){
//         for(let i=0;i<array1.length;i++){
//             a += array1[i];
//             a+= array2[i];
//         }
//         for(i=array1.length; i<array2.length;i++){
//             a+=array2[i];
//         }
    
//     }else{
//         for(let i=0; i<array2.length;i++){
//             a+= array2[i];
//             a+= array1[i];
//         }
//         for(let i=array2.length;i<array1.length;i++){
//             a+=array1[i];
//         }
//     }
//     alert(a);
// }
// merge2String(String1,String2);



let lucky=Math.floor(Math.random * 10)
const addbtn= document.getElementById("btn");
const input1= document.getElementById("input");
let b=0;
addbtn.onclick=function (){
    let a= input1.value;
    if(a!=lucky){
        alert(`Moi nhap lai:`);
        input1.value=""
        b++;
    }else if(b>3){
        alert(`So dung la ${lucky}`);
        input1.value=""
    }
}
