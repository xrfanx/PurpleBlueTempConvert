let $ = document
let input = $.querySelector(".celsius-input")
let celsius = true




function convert() {

    if (celsius === true) {
        let inputValue = parseFloat(input.value)
        let resultValue = (inputValue * 9/5) + 32
        $.querySelector(".result-value").innerHTML = resultValue.toFixed(2) + "°F"
        $.querySelector(".result-value").style.display = "flex"
        $.querySelector(".result-value").style.fontSize = "3rem"
        $.querySelector(".result-container").style.height = "8rem"
        $.querySelector(".result-container").style.margin = "1rem 0"
        $.querySelector(".result-container").style.boxShadow = "20px 20px 50px rgba(0, 0, 0, 0.5)"
        $.querySelector(".title").style.transform = "translateY(0)"
        $.querySelector(".title").style.transition = "all 0.8s ease  0.1s"
        $.querySelector(".title").style.marginBottom = "1rem"
        $.querySelector(".celsius-input").style.transform = "translateY(0)"
        $.querySelector(".celsius-input").style.transition = "all 0.8s ease  0.1s"
        if (isNaN(inputValue)) {
            $.querySelector(".result-value").innerHTML = "!لطفا ورودی عددی وارد کنید"
            $.querySelector(".result-value").style.fontSize = "1.5rem"
            $.querySelector(".result-value").style.display = "flex"
            $.querySelector(".result-value").style.transform = "translateY(-1px)"
            $.querySelector(".result-container").style.height = "8rem"
            $.querySelector(".result-container").style.margin = "1rem 0"
            $.querySelector(".result-container").style.boxShadow = "20px 20px 50px rgba(0, 0, 0, 0.5)"
            $.querySelector(".title").style.transform = "translateY(0)"
            $.querySelector(".title").style.transition = "all 0.8s ease  0.1s"
            $.querySelector(".title").style.marginBottom = "1rem"
            $.querySelector(".celsius-input").style.transform = "translateY(0)"
            $.querySelector(".celsius-input").style.transition = "all 0.8s ease  0.1s"
        }
    
    }
    else {
        let inputValue = input.value
        let resultValue = (inputValue - 32) * 5/9
        $.querySelector(".result-value").innerHTML = resultValue.toFixed(2) + "°C"
        $.querySelector(".result-value").style.display = "flex"
        $.querySelector(".result-container").style.height = "8rem"
        $.querySelector(".result-container").style.margin = "1rem 0"
        $.querySelector(".result-container").style.boxShadow = "20px 20px 50px rgba(0, 0, 0, 0.5)"
        $.querySelector(".title").style.transform = "translateY(0)"
        $.querySelector(".title").style.transition = "all 0.8s ease  0.1s"
        $.querySelector(".title").style.marginBottom = "1rem"
        $.querySelector(".celsius-input").style.transform = "translateY(0)"
        $.querySelector(".celsius-input").style.transition = "all 0.8s ease  0.1s"
    }
   
    
}
function clearInput() {
    input.value = ""
    $.querySelector(".result-value").style.display = "none"
    $.querySelector(".result-container").style.height = "0"
    $.querySelector(".result-container").style.margin = "0"
    $.querySelector(".result-container").style.boxShadow = "none"
    $.querySelector(".title").style.transform = "translateY(-2rem)"
    $.querySelector(".title").style.transition = "all 0.8s ease  0.1s"
    $.querySelector(".title").style.marginBottom = "0"
    $.querySelector(".celsius-input").style.transform = "translateY(-2rem)"
    $.querySelector(".celsius-input").style.transition = "all 0.8s ease  0.1s"
}  
function reverseInput() {
    celsius = !celsius
    if (celsius === false) {
        $.querySelector(".title").innerHTML = "تبدیل فارنهایت به سلسیوس"
        $.querySelector(".celsius-input").placeholder = "...درجه فارنهایت را وارد کنید"
    }
    else {
        $.querySelector(".title").innerHTML = "تبدیل سلسیوس به فارنهایت"
        $.querySelector(".celsius-input").placeholder = "...درجه سلسیوس را وارد کنید"
    }
       input.value = ""
    $.querySelector(".result-value").style.display = "none"
    $.querySelector(".result-container").style.height = "0"
    $.querySelector(".result-container").style.margin = "0"
    $.querySelector(".result-container").style.boxShadow = "none"
    $.querySelector(".title").style.transform = "translateY(-2rem)"
    $.querySelector(".title").style.transition = "all 0.8s ease  0.1s"
    $.querySelector(".title").style.marginBottom = "0"
    $.querySelector(".celsius-input").style.transform = "translateY(-2rem)"
    $.querySelector(".celsius-input").style.transition = "all 0.8s ease  0.1s"
}   



// The key is performance
// XrfanX