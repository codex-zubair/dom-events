
const items = document.getElementsByClassName('item');

for (const item of items) {
    item.addEventListener('click', (event) => {
        //1st Loop throw item optional
        // console.log(item)

        // 2nd option event.target.
        console.log(event.target.parentNode)


        // Removing targeted Element...
        event.target.parentNode.removeChild(event.target)
    })
}
