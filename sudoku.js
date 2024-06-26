submitbtn=document.querySelector(".submitButton");
allInputs=document.querySelectorAll("#box1");
statement=document.querySelector("#statement");
console.log(allInputs);
checkSudoku=()=>{
    var c=true;
    for(let k=0;k<16;k+=4){
        var check = [0,0,0,0];
        var b = true;
    for(let i=k;i<k+4;i++){
        if(allInputs[i].value==""){
            statement.innerText="Error! Some Empty value found";
            b=false;
            break;
        }else if(allInputs[i].value=="1"){
            if(check[0]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[0]=1;
            }
        }else if(allInputs[i].value=="2"){
            if(check[1]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[1]=1;
            }
        }else if(allInputs[i].value=="3"){
            if(check[2]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[2]=1;
            }
        }else if(allInputs[i].value=="4"){
            if(check[3]!=0){
                statement.innerText="Repetition found";
                b=false;
                break;
            }else{
                check[3]=1;
            }
        }else{
            statement.innerText="Some other value than 1,2,3,4 found";
            b=false;
            break;
        }

    }
    if(b!=true){
        c=false;
        break;
    }
}
if(c==true){
    statement.innerText="HURRAY! YOU DID IT....";
}
}
submitbtn.addEventListener("click",checkSudoku);