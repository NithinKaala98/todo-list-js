const item = document.querySelector("#item")
const tdl = document.querySelector("#todobox")

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            adtodo(this.value)
            this.value = " "
        }
    }
)
 
const adtodo = (item) => {
    const listitem = document.createElement("li");
    listitem.innerHTML =` ${item}
    <i class="fa fa-times"></i>`;

    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listitem.querySelector("i").addEventListener(
        "click",
        function(){
            listitem.remove();
        }
    )
     
    tdl.appendChild(listitem)
} 