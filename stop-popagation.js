
 // EVENT stopPropagation
 document.getElementById('item-2').addEventListener('click',(event)=> {
    console.log("item-2 clicked");
    
})

 // EVENT stopPropagation
 document.getElementById('item-2').addEventListener('click',(event)=> {
    console.log("item-2 clicked second");

})

 // EVENT stopPropagation
 document.getElementById('item-2').addEventListener('click',(event)=> {
    console.log("item-2 clicked third");
    event.stopPropagation();
})

 // EVENT stopPropagation
 document.getElementById('item-2').addEventListener('click',(event)=> {
    console.log("item-2 Fourth");

})



document.getElementById('ul').addEventListener('click',()=> {
    console.log("ul clicked");
})


// 