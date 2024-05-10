const d = document;
const rating = d.querySelector(".rating");
const ratingBtn = d.querySelectorAll(".rating-number");
const result = d.querySelector("#result");
const submit = d.querySelector("#submit")
console.log(ratingBtn);


ratingBtn.forEach((rate) => {
let arrayResult = [];
    d.addEventListener("click", e => {
        e.stopPropagation(); 

        if(e.target === ratingBtn[0]) {
            if (arrayResult.length != 0) {
                arrayResult = [];
            } 
            console.log("hola")
            let result = d.getElementById("one").value;
            arrayResult.push(result);
            console.log(arrayResult);
            ratingBtn[0].classList.add("active");
            ratingBtn[1].classList.remove("active");
            ratingBtn[2].classList.remove("active");
            ratingBtn[3].classList.remove("active");
            ratingBtn[4].classList.remove("active");
        } 
        if(e.target === ratingBtn[1]) {
            let result = d.getElementById("two").value;
            if (arrayResult.length != 0) {
                arrayResult = [];
            } 
            arrayResult.push(result);
            console.log(arrayResult);
            ratingBtn[1].classList.add("active");
            ratingBtn[0].classList.remove("active");
            ratingBtn[2].classList.remove("active");
            ratingBtn[3].classList.remove("active");
            ratingBtn[4].classList.remove("active");
        } 
        if(e.target === ratingBtn[2]) {
            let result = d.getElementById("three").value;
            if (arrayResult.length != 0) {
                arrayResult = [];
            } 
            arrayResult.push(result);
            console.log(arrayResult);
            ratingBtn[2].classList.add("active");
            ratingBtn[1].classList.remove("active");
            ratingBtn[0].classList.remove("active");
            ratingBtn[3].classList.remove("active");
            ratingBtn[4].classList.remove("active");
        } 
        if(e.target === ratingBtn[3]) {
            let result = d.getElementById("four").value;
            if (arrayResult.length != 0) {
                arrayResult = [];
            } 
            arrayResult.push(result);
            console.log(arrayResult);
            ratingBtn[3].classList.add("active");
            ratingBtn[1].classList.remove("active");
            ratingBtn[2].classList.remove("active");
            ratingBtn[0].classList.remove("active");
            ratingBtn[4].classList.remove("active");
        } 
        if(e.target === ratingBtn[4]) {
            let result = d.getElementById("five").value;
            if (arrayResult.length != 0) {
                arrayResult = [];
            } 
            arrayResult.push(result);
            console.log(arrayResult);
            ratingBtn[4].classList.add("active");
            ratingBtn[1].classList.remove("active");
            ratingBtn[2].classList.remove("active");
            ratingBtn[3].classList.remove("active");
            ratingBtn[0].classList.remove("active");
        }
    })

    if(arrayResult.length = 1) {
        submit.addEventListener("click", e => {
            e.preventDefault();
            rating.style.display = "none";
            result.style.display = "flex";
            number.textContent = arrayResult;
        })
    }
});
  


