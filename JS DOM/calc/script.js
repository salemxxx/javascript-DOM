let res =document.getElementById('result'),
    clean=document.getElementById("ac"),
    equal = document.getElementById('equal'),
    numPart1 = '',
    numPart2 = '',
    resNumber =0;
    document.addEventListener("click" ,(event)=>{
        res.innerText+= event.target.value.trim(); 
        clean.onclick=()=>{
            clean=  document.getElementById('result').innerText ="0";
            numPart1 = 0;
            numPart2 = 0;
            resNumber = 0;
        }
        equal.onclick=()=>{
            let num = document.getElementById('result').innerText,
            count =0,
            opreter = '';
            for (let index = 0; index < num.length; index++) {
                if (num[index]=='+' ||num[index]=='-' || num[index]=='*' || num[index]=='/'){
                    opreter = num[index];
                    break;
                }
                else{
                    numPart1+= num[index];
                    count++;
                }
            }
            for (let index = count+1; index < num.length; index++) {
                numPart2 += num[index];
            }
            switch (opreter) {
                case '+':
                    resNumber = parseFloat(numPart1) + parseFloat(numPart2);
                    break;
                case '-':
                    resNumber = parseFloat(numPart1) - parseFloat(numPart2);
                    break;
                case '*':
                    resNumber = parseFloat(numPart1) * parseFloat(numPart2);
                    break;
                case '/':
                    resNumber =  parseFloat(numPart1) / parseFloat(numPart2);
                    break;
            }
        document.getElementById('result').innerText=resNumber;
        numPart1 = 0;
        numPart2 = 0;
        resNumber = 0;
    }
});