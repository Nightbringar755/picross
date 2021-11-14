"use strict";

// let name = "Jesse";
// let phrase = `Hello, my name is ${name}.`;

// let docuBody = document.querySelector('body');
// let testDiv = docuBody.querySelector('#test-div');

// testDiv.innerHTML = "hello world";


// let newSpan = document.createElement('span');
// newSpan.innerHTML = "Meow";
// newSpan.classList.add('green-color');


// testDiv.after(newSpan);

// let testSpan = docuBody.querySelector('.assigned-class.special-class span');


// function myFunk(firstName, lastName) {
// 	return `${firstName} ${lastName} got funky!`;
// }


// const funktownCity = myFunk('John', 'JacobjinglehiemerShit');


// let funkEle = document.createElement('span');
// funkEle.innerHTML = funktownCity;
// const pinkColor = document.createAttribute('style');
// pinkColor.value = "color: #c7778d; display: block";
// funkEle.setAttributeNode(pinkColor);
// newSpan.after(funkEle);


// let arr = ['apple', 'pineapple', 'banana'];

// for (let i = 0; i < arr.length; i++) {
// 	//console.log(arr[i]);
// }

// let arr2 = [['apple', 'pineapple'], 'banana'];
// ['apple', 'pineapple', 'banana'].map(item => console.log(item));

// let isMe = true;
// let reality = false;
// if (isMe || reality) {
// 	console.log('I am me.');
// } else if (reality == 1) {

// } else if (reality == 2) {

// } else if (reality == 3) {

// }


// switch(reality) {
// 	case 0:
// 		console.log(reality);
// 		break;
// 	case 1:
// 		console.log(reality);
// 		break;
// 	case 2:
// 	case 3: 
// 		console.log(reality);
// 		break;
// 	default:
// 		console.log(reality);
// 		break;
// }

// const hello = () => console.log(`hello ${reality}`);
// hello();

// document.write(phrase);

let myObj = {
	name: 'hesini',
	birthday: '09/20/10',
}

console.log(myObj.name);

class Board {
	constructor(height, width, rowPossibility, columnPossibility) {
		this.height = height;
		this.width = width;
		this.rowPossibility = rowP;
		this.columnPossibility = colP;
		this.lastBoardCalculation = [];
		this.board = [];
		this.calInteration = 0;
		this.isFinished = false;
	}

	desribe = () => {
		return `The board is ${height} by ${width}.`;	
	}

	drawBoard = () => {
		let newBoard = [];
		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				this.newBoard[i][j].push({
					isPossible: undefined,
					isImpossible: undefined,
					isConcrete: undefined,
					rowPos: this.rowP[i],
					colPos: this.colP[j]
				});
			}
		}
		this.board = newBoard;
	}

	checkIfComplete = () => {
		let isComplete = false;
		const total = this.height * this.width;
		let counter = 0;
		this.board.map(cell => {
			if((isPossible || isImpossible) && isComplete) {
				counter++;
			}
		})

		if(counter === total) {
			return this.board;
		} else if (this.board === this.lastBoardCalculation) {
			isFinished = true;
			return false
		} else {
			caclulateBoard();
		}
	}

	caclulateBoard = () => {
		this.calInteration++;
		const last = this.lastBoardCalculation;
		let newBoardCal = []
		this.board.map(cell => {
			while(cell) {
				//DO THINGS
			}
		})
		this.lastBoardCalculation = this.board;
		this.board = newBoardCal;
	}


}

const testBoard = new Board(3, 4, [], []);