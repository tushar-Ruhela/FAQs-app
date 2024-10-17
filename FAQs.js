let showBtn = document.querySelectorAll(".plus");
let showMinus = document.querySelectorAll(".minus");
let answerPara = document.getElementsByClassName("ans");

let arrMinus = Array.from(showMinus);
let array = Array.from(showBtn);
let arrayAnswer = Array.from(answerPara);

array.forEach((btn, index) => {
    btn.addEventListener("click", function() {
    
        arrMinus.forEach(logo => {
            logo.style.display = "none";
        });
        arrayAnswer.forEach(ans => {
            ans.style.display = "none";
        });
        array.forEach(plus => {
            plus.style.display = "block"; 
        });

        if (arrMinus[index]) {
            arrMinus[index].style.display = "block";
        }
        if (arrayAnswer[index]) {
            arrayAnswer[index].style.display = "block"; 
            arrayAnswer[index].style.color=" hsl(292, 16%, 49%)"
        }
        
        btn.style.display = "none";
    });
});

arrMinus.forEach((btn, index) => {
    btn.addEventListener("click", function() {
        if (arrayAnswer[index]) {
            arrayAnswer[index].style.display = "none"; 
        }
        if (arrMinus[index]) {
            arrMinus[index].style.display = "none"; 
        }

        if (array[index]) {
            array[index].style.display = "block"; 
        }
    });
});
