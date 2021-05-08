let typing_box_letter = document.getElementsByClassName('typing_box_letter')[0]
let selected_text_index = Math.floor(Math.random()*text_array.length)
let textarea = document.getElementById('textarea')
let Grosspeed = null
let speed = null
let accuracy = null
let totalCorrect  = null
let totalIncorrect = null
let alert = document.getElementsByClassName('alert')[0]
let strong = alert.querySelector('strong')
let accuracyDiv = document.getElementById('accuracyDiv')
let correct = document.getElementById('correct')
let incorrect = document.getElementById('incorrect')
let progress = document.querySelector('progress')
let speedDiv = document.getElementById('speedDiv')

typing_box_letter.innerText = text_array[selected_text_index]
let split_textarea_text = typing_box_letter.innerText.split(" ")


function calculateAccuracy (comp) {
	let len = comp.length
	let percent = (totalCorrect/len)*100
	accuracy = `${(totalCorrect/len)*100}%`
	accuracyDiv.querySelector('p').innerText = parseInt(accuracy)
	correct.querySelector('p').innerText = totalCorrect
	incorrect.querySelector('p').innerText = totalIncorrect
	progress.value = parseInt(percent)
	progress.innerText = parseInt(percent)
	
}



function compare (text,comp) {

	console.log('compare calling in compare function')
	let len = null
	if(text.length>comp.length){
		calculateAccuracy(comp);
		len = comp.length
	}else if(text.length==comp.length){
		textarea.value = ''
		calculateAccuracy(comp);

	}else{
		calculateAccuracy(comp);
		len = text.length
	}

		totalIncorrect = 0
	totalCorrect = 0

	for(let i=0;i<len;i++){
		if(text[i]==comp[i]){
			totalCorrect+=1
		}else{
			totalIncorrect+=1
		}
	}


}


textarea.addEventListener('keydown',(e) => {
	// setIntervalFunc()
	let text = textarea.value.split(" ")
  	let text_value = textarea.value
  	console.log(e.keyCode)
  	if(e.keyCode==32){
  		console.log('compare calling in keyCode')
  		
  		compare(split_textarea_text,text)
  	}else if(e.keyCode==8){
  		textarea.value = text_value
  	}
});






































