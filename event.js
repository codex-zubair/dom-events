
// Function For Testing button
function start() {
    console.log("working?")

    document.body.style.color = 'red'
}



// H1 Variable DECLARE
const yesText = document.getElementById('yes-text-id')



// FUNCTION FOR YES TEXT
function yes() {
    yesText.innerText = 'YES'
    yesText.style.color = 'blue'
}


// FUNCTION FOR NO TEXT
function no() {
    yesText.innerText = 'NO'
    yesText.style.color = 'black'
}



// Color Changing
const color = ['red', 'blue', 'sky', 'green']
function start() {
    document.body.style.backgroundColor = color[(Math.random() * 4).toFixed(0)]
}



// Background color changing with event handler.
const clear = document.getElementById('background-white')


clear.addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'white'
})





  
    // Directly Adding event listener a button
    // Setup clicking Event by getting button id
    document.getElementById('update').addEventListener('click', function update(){

        // collecting input field 
        const inputField = document.getElementById('text-box')

        // Checking input field value
        console.log(inputField.value)



        // Setup input value into top heading.
        document.getElementById('input-field-header').innerText = inputField.value
    })
            
