//For input
const item = document.querySelector("#item");
//for list item
const toDo = document.querySelector("#todobox");

//when user press the key so listen event 
item.addEventListener(
    "keyup", 
function (event) 
{
    if (event.key == "Enter") {

        addtoDo(this.value);
        this.value=""
        
    }
})

const addtoDo =(item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>


    `;

    listitem.addEventListener(
        "click",
        function () {
            //toggle means us class ko add krna remove krna
            this.classList.toggle("done")
        }

    )
    listitem.querySelector("i").addEventListener(
        "click",
        function () {
            listitem.remove()
        }
    )
    toDo.appendChild(listitem)
}
