
var getAdvice = () => {
		const e_advice = document.getElementById('AdviceDescription').innerHTML = '<loader></loader>';
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function () {
		let advice = {
			id: 0,
			advice: ""
		}
		try {
			advice = JSON.parse(this.responseText).slip;
			console.log(advice);
		} catch (error) {
			advice.advice;
		}
		const e_id = document.getElementById('AdviceId');
		const e_advice = document.getElementById('AdviceDescription');
		if (e_id) e_id.innerHTML = advice.id;
		if (e_advice) e_advice.innerHTML = `"${advice.advice}"`;
	}
	xhttp.open("GET", "https://api.adviceslip.com/advice");
	xhttp.send();
}
document.onload = getAdvice();