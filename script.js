//your JS code here. If required.
const chnageButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset")
const blockInput = document.getElementById("block_id");
const colorInput = document.getElementById("colour_id");
const gridItems = document.querySelectorAll(".grid-item")

function resetColors() {
	gridItems.forEach(item => item.style.backgroundColor = "transparent")
}

chnageButton.addEventListener("click" , ()=> {
	const blockID = blockInput.value;
	const color = colorInput.value;

	if(blockID>=1 && blockID<=9 && color){
		resetColors();
		const target = document.getElementById(blockID);
		if(target){
			target.style.backgroundColor = color;
		}
	}
	else{
		console.log("Invalid Block Number")
	}
});

resetButton.addEventListener("click" , resetColors)