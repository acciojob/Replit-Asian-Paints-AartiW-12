//your JS code here. If required.
const chnageButton = document.getElementById("change_button");
const resetButton = document.getElementById("reset_button")
const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");
const gridItems = document.querySelectorAll(".grid-item")

function resetColors() {
	gridItems.forEach(item => item.style.backgroundColor = "transparent")
}

chnageButton.addEventListener("click" , ()=> {
	const blockID = parseInt(blockInput.value , 10);
	const color = colorInput.value;

	if(blockID>=1 && blockID<=9 && color){
		resetColors();
		gridItems[blockID - 1].style.backgroundColor = color
	}
});

resetButton.addEventListener("click" , resetColors)