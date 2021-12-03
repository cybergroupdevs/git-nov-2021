// Function called whenever user tab on any box
function myfunc() {

	// Setting DOM to all boxes or input field
	var a1, a2, a3, b1, b2, b3, c1, c2, c3;
	a1 = document.getElementById("a1").value;
	a2 = document.getElementById("a2").value;
	a3 = document.getElementById("a3").value;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	c1 = document.getElementById("c1").value;
	c2 = document.getElementById("c2").value;
	c3 = document.getElementById("c3").value;

	// Checking if Player X won or not and after
	// that disabled all the other fields
	if ((a1 == 'x' || a1 == 'X') && (a2 == 'x' ||
		a2 == 'X') && (a3 == 'x' || a3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player X won');
	}
	else if ((a1 == 'x' || a1 == 'X') && (b1 == 'x' ||
		b1 == 'X') && (c1 == 'x' || c1 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;

		window.alert('Player X won');
	}
	else if ((c1 == 'x' || c1 == 'X') && (c2 == 'x' ||
		c2 == 'X') && (c3 == 'x' || c3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		window.alert('Player X won');
	}
	else if ((a3 == 'x' || a3 == 'X') && (b3 == 'x' ||
		b3 == 'X') && (c3 == 'x' || c3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		window.alert('Player X won');
	}
	else if ((a1 == 'x' || a1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (c3 == 'x' || c3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		window.alert('Player X won');
	}
	else if ((a3 == 'x' || a3 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (c1 == 'x' || c1 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player X won');
	}
	else if ((a2 == 'x' || a2 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (c2 == 'x' || c2 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player X won');
	}

	// Checking of Player X finsh
	// Checking for Player 0 starts, Is player 0 won or
	// not and after that disabled all the other fields
	else if ((a1 == '0' || a1 == '0') && (a2 == '0' ||
		a2 == '0') && (a3 == '0' || a3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((a1 == '0' || a1 == '0') && (b1 == '0' ||
		b1 == '0') && (c1 == '0' || c1 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((c1 == '0' || c1 == '0') && (c2 == '0' ||
		c2 == '0') && (c3 == '0' || c3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((a3 == '0' || a3 == '0') && (b3 == '0' ||
		b3 == '0') && (c3 == '0' || c3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((a1 == '0' || a1 == '0') && (b2 == '0' ||
		b2 == '0') && (c3 == '0' || c3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((a3 == '0' || a3 == '0') && (b2 == '0' ||
		b2 == '0') && (c1 == '0' || c1 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((a2 == '0' || a2 == '0') && (b2 == '0' ||
		b2 == '0') && (c2 == '0' || c2 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("a1").disabled = true;
		document.getElementById("a2").disabled = true;
		document.getElementById("a3").disabled = true;
		document.getElementById("c1").disabled = true;
		document.getElementById("c2").disabled = true;
		document.getElementById("c3").disabled = true;
		window.alert('Player 0 won');
	}

	// Checking of Player 0 finsh
	// Here, Checking about Tie
	else if ((a1 == 'X' || a1 == '0') && (a2 == 'X'
		|| a2 == '0') && (a3 == 'X' || a3 == '0') &&
		(b1 == 'X' || b1 == '0') && (b2 == 'X' ||
		b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(c1 == 'X' || c1 == '0') && (c2 == 'X' ||
		c2 == '0') && (c3 == 'X' || c3 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('a1').value = '';
	document.getElementById("a2").value = '';
	document.getElementById("a3").value = '';
	document.getElementById("b1").value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("c1").value = '';
	document.getElementById("c2").value = '';
	document.getElementById("c3").value = '';

}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("a1").value = "X";
		document.getElementById("a1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a1").value = "0";
		document.getElementById("a1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("a2").value = "X";
		document.getElementById("a2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a2").value = "0";
		document.getElementById("a2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("a3").value = "X";
		document.getElementById("a3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("a3").value = "0";
		document.getElementById("a3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("c1").value = "X";
		document.getElementById("c1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("c1").value = "0";
		document.getElementById("c1").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("c2").value = "X";
		document.getElementById("c2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("c2").value = "0";
		document.getElementById("c2").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("c3").value = "X";
		document.getElementById("c3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("c3").value = "0";
		document.getElementById("c3").disabled = true;
		flag = 1;
	}
}
