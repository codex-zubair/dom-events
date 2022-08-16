

// Enable button

document.getElementById('text-box2').addEventListener('keyup', () => {
    console.log(document.getElementById('text-box2').value)

    if ((document.getElementById('text-box2').value) == 'a') {
        document.getElementById('update2').removeAttribute('disabled')
    }



})





// Adding INFO With P TAG  
document.getElementById('update2').addEventListener('click', () => {



    // Getting the value from the input text
    const inputValue = document.getElementById('text-box2')



    // storing the value in a variable...
    const finalValue = inputValue.value





        // Creating Elements.
        const p = document.createElement('p')


        // Storing Value into p text.
        p.innerText = finalValue



        //  Appending the p tag into section.

        const noteSection = document.getElementById('note-section')

        noteSection.appendChild(p);

        // Empty comment box field.
        inputValue.value = '';

    }

)






