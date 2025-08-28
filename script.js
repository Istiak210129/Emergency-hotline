// heart icon handle

let hearts=  document.getElementsByClassName("heartBtn");

for(let heart of hearts)
{
    heart.addEventListener("click",function(){
        let count = document.getElementById("heartNumber")

        count.innerText = parseInt(count.innerText) + 1;
    })
}

//  call button handler

let calls = document.getElementsByClassName("callBtn");

for(let call of calls){
    call.addEventListener("click",function(){


        
        
        let coin = document.getElementById("coinBtn");
        
        coin.innerText = parseInt(coin.innerText) - 20;

        if(coin.innerText < 20)
        {
            alert("you have not Sufficient balance");
            return;
        }

    })
}