/* Boton "To top" */
const d =document;
export  const toTop = d.querySelector(".to__top") 
window.addEventListener("scroll",()=>{
	if(window.pageYOffset > 500){
		toTop.classList.add("active");
	}else{
		toTop.classList.remove("active");
	}
})