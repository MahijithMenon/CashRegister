billAmt=document.getElementById('BillAmt');
cashGiven=document.getElementById('CashGiven');
check=document.getElementById('check');
errorMsg=document.getElementById('errormessage')
result=document.getElementById('result')
noOfNotes=document.querySelectorAll('.no-of-notes');
table=document.getElementById('table');
availableNotes=[2000,500,200,100,50,10,5,1];
check.addEventListener('click',function(){
    if(Number(billAmt.value>0) && Number(cashGiven.value>0)){
    if(Number(cashGiven.value)>Number(billAmt.value)){
   const calculateRemianing=cashGiven.value-billAmt.value;
   table.style.display="block"
   errorMsg.style.fontSize="20px";
   errorMsg.style.color="green";
//    console.log(typeof calculateRemianing)
   calculateChange(calculateRemianing);
    }
    else if(Number(cashGiven.value)==Number(billAmt.value)){
        errorMsg.innerText="No Need to Give Change";
        errorMsg.style.fontSize="50px";
        errorMsg.style.color="black";
        table.style.display="none"
    }
    else{
        errorMsg.innerText="You need to take more Cash";
        errorMsg.style.fontSize="50px";
        errorMsg.style.color="red";
        table.style.display="none"
    }
    }
    else{
       errorMsg.innerText="Your Value should be greater than 0";
       errorMsg.style.fontSize="50px";
     errorMsg.style.color="red";
       table.style.display="none"
    }
})
function calculateChange(amt){
    errorMsg.innerText=`Remaining Cash to be given back : ${amt}`;
 for(let i=0;i<availableNotes.length;i++){
 const numberOfNotes = Math.trunc(amt/availableNotes[i])
 amt%=availableNotes[i];
 noOfNotes[i].innerText = numberOfNotes;
 }
}