getAdvice = () => {
	const e_advice = document.getElementById('AdviceDescription')
	if(e_advice) e_advice.innerHTML = '<span class="loader"></span>';

	const xhttp = new XMLHttpRequest();
	xhttp.onload = function () {
		let advice = {
			id: 0,
			advice: ""
		}
		try {
			advice = JSON.parse(this.responseText).slip;
			document.getElementById('AdviceId').innerHTML = advice.id;
			document.getElementById('AdviceDescription').innerHTML = `"${advice.advice}"`;
		} catch (error) {
			console.error(error)
		}
	}
	xhttp.open("GET", "https://api.adviceslip.com/advice");
	xhttp.send();
}
document.onload = getAdvice();