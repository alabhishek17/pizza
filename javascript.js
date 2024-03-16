// function getRandomTime() {
//     return Math.floor(Math.random() * 5000) + 2000 //random time between 2 to 7 sec
// }

function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
}
document.getElementById("orderbtn").addEventListener("click", function () {
    const selecteditems = [];
    const checkBox = document.getElementsByName("foodIteam");
    checkBox.forEach(function (checkbox) {
        if (checkbox.checked) {
            selecteditems.push(checkbox.value);
        }

    });
    //   console.log(selecteditems);
    if (selecteditems.length === 0) {
        alert("plese select iteam");
        return;
    }

    const orderbutton = document.getElementById("orderbtn");
    orderbutton.disabled = true;

    //display part of use ui
    const foodimg = document.getElementById('foodimg');
    const orderIdElement = document.getElementById('orderID');
    const orderIdValueElement = document.getElementById('orderIdValue');
     foodimg.style.display = "none";
    orderIdElement.style.display = "none";
    // });

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve()
        }, 2000) //getRandomTime()
    });

    promise.then(function(){
        const orderId = getRandomOrderId();
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';

        const foodToShow = selecteditems[Math.floor(Math.random() * selecteditems.length)];

        switch(foodToShow){
            case 'Burger':
                foodimg.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                break;
            case 'Pizza':
                foodimg.src = 'pizza.jpg'
                break;
            case 'Drinks':
                foodimg.src = 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                break;
            default:
                foodimg.src = 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
        }
               
    //    for(let i=0;i<selecteditems.length;i++){
    //     if(selecteditems===0){
    //         // console.log(selecteditems);
    //     }
    //    }
    //    console.log(selecteditems);
        foodimg.style.display = 'block';
        orderbutton.disabled = false;
    });
});