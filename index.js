function input(n){
    for(let i=1; i <= n; i++){
        if (i % 3===0 && i % 5 ===0){
            console.log("FizzBuzz");
        } else if (i % 5===0){
            console.log("Buzz");
        } else if (i % 3===0){
            console.log("Fizz");
        } else {
            console.log(i);
        }

    }        

}
input(20)

window.addEventListener('load', function(event){
    printText()
})
// addEventlistener is used to run javascript code once a HTML event has occurred
//This one is load - as in loading webpage
//When page is loaded then printText function is run 

function printText(){
    const textbtn = document.getElementById('click-btn')
    textbtn.addEventListener('click', () =>{
        const h1 = document.getElementById('title')
        h1.innerHTML="<p> This is a test</p>"
        //innerHTML converts HTML elements within the string ie. Text will be shown as a using paragraph tag
        //For h1.innerText="<p> This is a test</p>"
        //Text will contain <p></p> as HTML element is not converted

    })

}
