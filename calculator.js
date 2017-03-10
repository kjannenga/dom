$(document).ready(function(){
	var answerStr = ""
	var opperator = ""
	$(".button, .symbol").on('click', function(){
		answerStr += $(this).html()
		$("#answer").html(answerStr)
		if ($(this).html() === "+") {

			$("#answer").html("")
			opperator = "+"

		}
		else if ($(this).html() === "-") {

			$("#answer").html("")
			opperator = "-"

		}
		else if ($(this).html() === "/") {

			$("#answer").html("")
			opperator = "/"

		}
		else if ($(this).html() === "x") {

			$("#answer").html("")
			opperator = "x"

		}
		else if ($(this).html() === "="){
			answerStr = answerStr.substring(0, answerStr.length-1)
			if (opperator === "+"){
				answerStr = answerStr.split("+")
				$("#answer").html( Number(answerStr[0]) + Number(answerStr[1]))
			}
			else if (opperator === "x"){
				answerStr = answerStr.split("x")
				$("#answer").html( Number(answerStr[0]) * Number(answerStr[1]))
			}
			else if (opperator === "/"){
				answerStr = answerStr.split("/")
				$("#answer").html( Number(answerStr[0]) / Number(answerStr[1]))
			}
			else if (opperator === "-"){
				answerStr = answerStr.split("-")
				$("#answer").html( Number(answerStr[0]) - Number(answerStr[1]))
			}

		}
		else if ($(this).html() === "C"){
			answerStr = ""
			$("#answer").html("")
		}

	})
		





















})