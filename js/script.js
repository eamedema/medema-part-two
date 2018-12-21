// JavaScript Document

function run() {

	document.getElementById("submit").addEventListener("click", function() {

		var tempFahr = document.getElementById("airTemp");

		var eventType = document.getElementById("affairType");

		whatToWear(tempFahr.value, eventType.value)
	});

		function whatToWear(airTemp, affair){
			var casual = "somthing comfy"
			var semiFormal = "a polo"
			var formal = "a suit"

			var coat = "a coat"
			var jacket = "a jacket"
			var noJacket = "no jacket"

			var a = "Since it is "
			var b = " degrees and you are going to a "
			var c = " event, you should wear "
			var d = " & "

			var result;

				if (affair === "casual" && 54 <= airTemp || airTemp <= 70) {
					result = a + airTemp + b + affair + c + casual + d + jacket

				} else if (affair === "casual" && airTemp < 54) {
					result = a + airTemp + b + affair + c + casual + d + coat

				} else if (affair === "casual" && airTemp > 70) {
					result = a + airTemp + b + affair + c + casual + d + noJacket

				} else if (affair === "semi-formal" && 54 <= airTemp || airTemp <= 70) {
					result = a + airTemp + b + affair + c + semiFormal + d + jacket

				} else if (affair === "semi-formal" && airTemp < 54) {
					result = a + airTemp + b + affair + c + semiFormal + d + jacket

				} else if (affair === "semi-formal" && airTemp > 70) {
					result = a + airTemp + b + affair + c + semiFormal + d + jacket

				} else if (affair === "formal" && 54 <= airTemp || airTemp <= 70) {
					result = a + airTemp + b + affair + c + formal + d + jacket

				} else if (affair === "formal" && airTemp < 54) {
					result = a + airTemp + b + affair + c + formal + d + coat

				} else if (affair === "formal" && airTemp > 70) {
					result = a + airTemp + b + affair + c + formal + d + noJacket

				}
				console.log(result);
		}
}

window.onload = run;
