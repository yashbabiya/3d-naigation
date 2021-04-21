let pages = [".home" , ".about" , ".project" , ".contact"]
var home = document.querySelector(".home");
var about = document.querySelector(".about");
var project = document.querySelector(".project");
var contact = document.querySelector(".contact");

const div = (x) =>(document.querySelector(pages[x]))
function page(x){
    for(let i=0;i<4;i++)
    {
        if(i===x)
        {
            div(i).classList.remove("hide");
            console.log(div(i).classList);
        }
        else
        {
            div(i).classList.add("hide");
        }
    }
}