billAmt=document.getElementById('BillAmt');
cashGiven=document.getElementById('CashGiven');
check=document.getElementById('check');
errorMsg=document.getElementById('errormessage')
result=document.getElementById('result')
noOfNotes=document.querySelectorAll('.no-of-notes');
availableNotes=[2000,500,200,100,50,10,5,1];
check.addEventListener('click',function(){
    if(billAmt.value>0 && cashGiven.value>0){
    if(cashGiven.value>=billAmt.value){
   const calculateRemianing=cashGiven.value-billAmt.value;
   calculateChange(calculateRemianing);
    }
    else{
        errorMsg.innerText="You need to take more Cash";
    }
    }
    else{
       errorMsg.innerText="Your Value should be greater than 0";
    }
})
function calculateChange(amt){
 for(let i=0;i<availableNotes.length;i++){
 const numberOfNotes = Math.trunc(amt/availableNotes[i])
 amt%=availableNotes[i];
 noOfNotes[i].innerText = numberOfNotes;
 }
 console.log("hello");
}