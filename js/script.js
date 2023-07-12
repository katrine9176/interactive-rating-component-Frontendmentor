const btns = document.querySelectorAll('.your-opinion__numbers-number')
const yourOpinionWindow = document.querySelector('.your-opinion')
const thanksWindow = document.querySelector('.thanks-window')
const number = document.querySelector('.thanks-window__select-span')
const submitBtn = document.querySelector('.your-opinion__submit')
let num

btns.forEach(btn => {
	btn.addEventListener('click', () => {
		for (let i = 0; i < btns.length; i++) {
			btns[i].classList.remove('clicked')
		}
		btn.classList.add('clicked')
		num = btn.textContent
	})
})

const submit = () => {
	thanksWindow.style.display = 'flex'
	yourOpinionWindow.style.display = 'none'
	number.textContent = num
}

submitBtn.addEventListener('click', submit)
