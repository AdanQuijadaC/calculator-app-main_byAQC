//****************** TOGGLE THEME SECTION ******************/
const toggleInputOne = document.querySelector(".toggle-input--one");
const toggleInputTwo = document.querySelector(".toggle-input--two");
const toggleInputThree = document.querySelector(".toggle-input--three");
const theme = document.querySelector("#theme");

// Activate main theme
toggleInputOne.addEventListener("click", (e) => {
  toggleInputOne.style.opacity = 1;
  toggleInputTwo.style.opacity = 0;
  toggleInputThree.style.opacity = 0;

  //Activate theme main
  theme.href = "styles.css";
});

// Activate theme two
toggleInputTwo.addEventListener("click", (e) => {
  toggleInputOne.style.opacity = 0;
  toggleInputTwo.style.opacity = 1;
  toggleInputThree.style.opacity = 0;

  //Activate theme 2

  theme.href = "theme2.css";
});

// Activate theme three
toggleInputThree.addEventListener("click", (e) => {
  toggleInputOne.style.opacity = 0;
  toggleInputTwo.style.opacity = 0;
  toggleInputThree.style.opacity = 1;

  //Activate theme 3

  theme.href = "theme3.css";
});

//****************** BUTTONS SECTION ******************/

// Key Numbers
buttonSeven = document.querySelector(".calculator__number--seven");
buttonEight = document.querySelector(".calculator__number--eight");
buttonNine = document.querySelector(".calculator__number--nine");
buttonFour = document.querySelector(".calculator__number--four");
buttonFive = document.querySelector(".calculator__number--five");
buttonSix = document.querySelector(".calculator__number--six");
buttonOne = document.querySelector(".calculator__number--one");
buttonTwo = document.querySelector(".calculator__number--two");
buttonThree = document.querySelector(".calculator__number--three");
buttonZero = document.querySelector(".calculator__number--zero");

// Key PointerEvents
function hideNumbers() {
  buttonSeven.style.pointerEvents = "none";
  buttonEight.style.pointerEvents = "none";
  buttonNine.style.pointerEvents = "none";
  buttonFour.style.pointerEvents = "none";
  buttonFive.style.pointerEvents = "none";
  buttonSix.style.pointerEvents = "none";
  buttonOne.style.pointerEvents = "none";
  buttonTwo.style.pointerEvents = "none";
  buttonThree.style.pointerEvents = "none";
  buttonZero.style.pointerEvents = "none";
}
function showNumbers() {
  buttonSeven.style.pointerEvents = "auto";
  buttonEight.style.pointerEvents = "auto";
  buttonNine.style.pointerEvents = "auto";
  buttonFour.style.pointerEvents = "auto";
  buttonFive.style.pointerEvents = "auto";
  buttonSix.style.pointerEvents = "auto";
  buttonOne.style.pointerEvents = "auto";
  buttonTwo.style.pointerEvents = "auto";
  buttonThree.style.pointerEvents = "auto";
  buttonZero.style.pointerEvents = "auto";
}

// Key Operations
const plusButton = document.querySelector(".calculator__number--plus");
const minusButton = document.querySelector(".calculator__number--minus");
const crossButton = document.querySelector(".calculator__number--cross");
const slashButton = document.querySelector(".calculator__number--slash");
const resetButton = document.querySelector(".calculator__number--span-reset");
const equalButton = document.querySelector(".calculator__number--span-equal");
const pointButton = document.querySelector(".calculator__number--point");
const del = document.querySelector(".calculator__number--delete");

// Text Screen
const total = document.querySelector(".total");
const plusKey = document.querySelector(".plus");
const minusKey = document.querySelector(".minus");
const multiKey = document.querySelector(".multi");
const divKey = document.querySelector(".div");
const errorDialog = document.querySelector(".error");
function keyResets() {
  plusKey.style.display = "none";
  minusKey.style.display = "none";
  multiKey.style.display = "none";
  divKey.style.display = "none";
}

// Screen Operations
let resultScreenArray = [];
let firstOperator = [];
let secondOperator = [];
let totalAccumulated = [];

// Logical Operations
let error = false;
let plus = false;
let minus = false;
let multi = false;
let div = false;
let equal = false;
let point = false;
let activateOne = false;
let activateTwo = false;
let activateThree = false;
let activateFour = false;
let activateFive = false;
let activateSix = false;
let activateSeven = false;
let activateEight = false;
let activateNine = false;
let activateZero = false;
let activatePlus = false;
let activateMinus = false;
let activateMulti = false;
let activateDiv = false;
let activatePoint = false;
let activateEqual = false;
let activateDel = false;

// Mouse Events
document.addEventListener("click", (e) => {
  errorDialog.textContent = [];

  if (e.target.matches(".calculator__number--seven")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(7);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(7);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(7);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--eight")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(8);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(8);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(8);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--nine")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(9);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(9);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(9);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--delete")) {
    e.target.classList.add("buttonToggle-two");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle-two");
    }, 100);

    if (minus === false && multi === false && div === false && plus == false) {
      if (resultScreenArray.length > 1) {
        firstOperator.pop();
        resultScreenArray.pop();
        let resultScreenString = resultScreenArray.join("");

        total.textContent = resultScreenString;
      } else {
        resultScreenArray = [];
        total.textContent = [];
        firstOperator = [];
        del.style.pointerEvents = "none";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        equalButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "none";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (resultScreenArray.length > 1) {
        secondOperator.pop();
        resultScreenArray.pop();
        let resultScreenString = resultScreenArray.join("");

        total.textContent = resultScreenString;
      } else {
        resultScreenArray = [];
        total.textContent = [];
        secondOperator = [];
        del.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "none";
      }
    }
  }
  if (e.target.matches(".calculator__number--four")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(4);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(4);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(4);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--five")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(5);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(5);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(5);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--six")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(6);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(6);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(6);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--plus")) {
    showNumbers();
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);
    plusKey.style.display = "flex";
    minusKey.style.display = "none";
    multiKey.style.display = "none";
    divKey.style.display = "none";
    total.textContent = [];
    resultScreenArray = [];
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    plus = true;
    minus = false;
    multi = false;
    div = false;
  }
  if (e.target.matches(".calculator__number--one")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(1);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(1);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(1);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--two")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(2);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(2);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(2);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--three")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(3);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(3);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(3);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--minus")) {
    showNumbers();
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);
    plusKey.style.display = "none";
    minusKey.style.display = "flex";
    multiKey.style.display = "none";
    divKey.style.display = "none";
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    total.textContent = [];
    resultScreenArray = [];

    plus = false;
    minus = true;
    multi = false;
    div = false;
  }
  if (e.target.matches(".calculator__number--point")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (
      typeof resultScreenArray[resultScreenArray.length - 1] === typeof 0 &&
      resultScreenArray.length < 12
    ) {
      resultScreenArray.push(".");
      if (
        minus === false &&
        multi === false &&
        div === false &&
        plus == false
      ) {
        firstOperator.push(".");
      }

      if (minus === true || multi === true || div === true || plus == true) {
        secondOperator.push(".");
      }
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();
  }
  if (e.target.matches(".calculator__number--zero")) {
    // Add press effect
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(0);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(0);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(0);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
      }
    }
  }
  if (e.target.matches(".calculator__number--slash")) {
    showNumbers();
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);
    plusKey.style.display = "none";
    minusKey.style.display = "none";
    multiKey.style.display = "none";
    divKey.style.display = "flex";
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    total.textContent = [];
    resultScreenArray = [];

    plus = false;
    minus = false;
    multi = false;
    div = true;
  }
  if (e.target.matches(".calculator__number--cross")) {
    showNumbers();
    e.target.classList.add("buttonToggle");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle");
    }, 100);
    plusKey.style.display = "none";
    minusKey.style.display = "none";
    multiKey.style.display = "flex";
    divKey.style.display = "none";
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    total.textContent = [];
    resultScreenArray = [];

    plus = false;
    minus = false;
    multi = true;
    div = false;
  }
  if (e.target.matches(".calculator__number--span-reset")) {
    // Add press effect
    e.target.classList.add("buttonToggle-two");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle-two");
    }, 100);

    //resets
    equal = false;
    plus = false;
    minus = false;
    multi = false;
    div = false;
    showNumbers();

    firstOperator = [];
    secondOperator = [];
    resultScreenArray.splice(0);
    total.textContent = [];
    totalAccumulated = [];
    errorDialog.textContent = [];
    total.style.fontSize = "3rem";

    plusKey.style.display = "none";
    minusKey.style.display = "none";
    multiKey.style.display = "none";
    divKey.style.display = "none";

    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";
    plusButton.style.pointerEvents = "none";
    minusButton.style.pointerEvents = "none";
    crossButton.style.pointerEvents = "none";
    slashButton.style.pointerEvents = "none";
    equalButton.style.pointerEvents = "none";
  }
  if (e.target.matches(".calculator__number--span-equal")) {
    // Add press effect
    e.target.classList.add("buttonToggle-three");
    setTimeout(() => {
      e.target.classList.remove("buttonToggle-three");
    }, 100);

    // resets
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";
    plusButton.style.pointerEvents = "auto";
    minusButton.style.pointerEvents = "auto";
    crossButton.style.pointerEvents = "auto";
    slashButton.style.pointerEvents = "auto";
    equalButton.style.pointerEvents = "none";

    hideNumbers();

    if (equal === false) {
      if (plus) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(firstOperatorAcc) + parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (minus) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(firstOperatorAcc) - parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (multi) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(firstOperatorAcc) * parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (div) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        if (parseFloat(secondOperatorAcc) === 0) {
          errorDialog.textContent = "Division by 0 not allowed";

          //resets
          equal = true;
          plus = false;
          minus = false;
          multi = false;
          div = false;
          equal = false;
          firstOperator = [];
          secondOperator = [];
          total.textContent = [];
          resultScreenArray = [];
          totalAccumulated = [];
          total.style.display = "none";
          plusButton.style.pointerEvents = "none";
          minusButton.style.pointerEvents = "none";
          crossButton.style.pointerEvents = "none";
          slashButton.style.pointerEvents = "none";
          showNumbers();
        } else {
          totalAccumulated =
            parseFloat(firstOperatorAcc) / parseFloat(secondOperatorAcc);

          if (
            parseFloat(firstOperatorAcc) % parseFloat(secondOperatorAcc) ===
            0
          ) {
            let fixedFloat =
              parseFloat(firstOperatorAcc) / parseFloat(secondOperatorAcc);

            total.textContent = parseFloat(fixedFloat.toLocaleString());

            total.style.fontSize = "3rem";
          } else {
            if (totalAccumulated.toString().length < 13) {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "3rem";
            } else {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "2rem";
            }
          }

          //resets
          plus = false;
          minus = false;
          multi = false;
          div = false;
          equal = true;
          firstOperator = [];
          secondOperator = [];
        }
      }
    } else {
      if (plus) {
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(totalAccumulated) + parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (minus) {
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(totalAccumulated) - parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }
        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (multi) {
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(totalAccumulated) * parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (div) {
        let secondOperatorAcc = secondOperator.join("");

        if (parseFloat(secondOperatorAcc) === 0) {
          errorDialog.textContent = "Division by 0 not allowed";

          //resets
          equal = false;
          plus = false;
          minus = false;
          multi = false;
          div = false;
          firstOperator = [];
          secondOperator = [];
          total.textContent = [];
          total.style.display = "none";
          plusButton.style.pointerEvents = "none";
          minusButton.style.pointerEvents = "none";
          crossButton.style.pointerEvents = "none";
          slashButton.style.pointerEvents = "none";
          showNumbers();
        } else {
          totalAccumulated =
            parseFloat(totalAccumulated) / parseFloat(secondOperatorAcc);

          if (
            parseFloat(totalAccumulated) % parseFloat(secondOperatorAcc) ===
            0
          ) {
            total.textContent = totalAccumulated.toLocaleString();

            total.style.fontSize = "3rem";
          } else {
            if (totalAccumulated.toString().length < 13) {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "3rem";
            } else {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "2rem";
            }
          }

          //resets
          plus = false;
          minus = false;
          multi = false;
          div = false;
          equal = true;
          firstOperator = [];
          secondOperator = [];
        }
      }
    }
  }
});

// Keyboard Events
document.addEventListener("keydown", function (e) {
  const keyCode = e.keyCode || e.which;

  errorDialog.textContent = [];

  if (e.key === "7" && activateSeven === false) {
    // Add press effect
    buttonSeven.classList.add("buttonToggle");
    setTimeout(() => {
      buttonSeven.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(7);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(7);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";

        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(7);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";

        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "8" && activateEight === false) {
    // Add press effect
    buttonEight.classList.add("buttonToggle");
    setTimeout(() => {
      buttonEight.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(8);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(8);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(8);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "9" && activateNine === false) {
    // Add press effect
    buttonNine.classList.add("buttonToggle");
    setTimeout(() => {
      buttonNine.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(9);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(9);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(9);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (keyCode === 8 && activateDel === true) {
    del.classList.add("buttonToggle-two");
    setTimeout(() => {
      del.classList.remove("buttonToggle-two");
    }, 100);

    if (minus === false && multi === false && div === false && plus == false) {
      if (resultScreenArray.length > 1) {
        firstOperator.pop();
        resultScreenArray.pop();
        let resultScreenString = resultScreenArray.join("");

        total.textContent = resultScreenString;
      } else {
        resultScreenArray = [];
        total.textContent = [];
        firstOperator = [];
        del.style.pointerEvents = "none";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        equalButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "none";
        activateDel = false;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (resultScreenArray.length > 1) {
        secondOperator.pop();
        resultScreenArray.pop();
        let resultScreenString = resultScreenArray.join("");

        total.textContent = resultScreenString;
      } else {
        resultScreenArray = [];
        total.textContent = [];
        secondOperator = [];
        del.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "none";
        activateDel = false;
      }
    }
  }
  if (e.key === "4" && activateFour === false) {
    // Add press effect
    buttonFour.classList.add("buttonToggle");
    setTimeout(() => {
      buttonFour.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(4);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(4);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(4);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "5" && activateFive === false) {
    // Add press effect
    buttonFive.classList.add("buttonToggle");
    setTimeout(() => {
      buttonFive.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(5);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(5);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(5);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "6" && activateSix === false) {
    // Add press effect
    buttonSix.classList.add("buttonToggle");
    setTimeout(() => {
      buttonSix.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(6);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(6);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(6);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "+" && activatePlus === true) {
    // Add press affect
    showNumbers();
    plusButton.classList.add("buttonToggle");
    setTimeout(() => {
      plusButton.classList.remove("buttonToggle");
    }, 100);

    //resets
    plusKey.style.display = "flex";
    minusKey.style.display = "none";
    multiKey.style.display = "none";
    divKey.style.display = "none";
    total.textContent = [];
    resultScreenArray = [];
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    plus = true;
    minus = false;
    multi = false;
    div = false;
    point = false;

    activatePoint = false;
    activateDel = false;
    activateEqual = false;
    activateOne = false;
    activateTwo = false;
    activateThree = false;
    activateFour = false;
    activateFive = false;
    activateSix = false;
    activateSeven = false;
    activateEight = false;
    activateNine = false;
    activateZero = false;
  }
  if (e.key === "1" && activateOne === false) {
    // Add press effect
    buttonOne.classList.add("buttonToggle");
    setTimeout(() => {
      buttonOne.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(1);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(1);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(1);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "2" && activateTwo === false) {
    // Add press effect
    buttonTwo.classList.add("buttonToggle");
    setTimeout(() => {
      buttonTwo.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(2);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(2);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(2);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "3" && activateThree === false) {
    // Add press effect
    buttonThree.classList.add("buttonToggle");
    setTimeout(() => {
      buttonThree.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(3);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(3);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(3);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "-" && activateMinus === true) {
    // add press effect
    showNumbers();
    minusButton.classList.add("buttonToggle");
    setTimeout(() => {
      minusButton.classList.remove("buttonToggle");
    }, 100);

    // resets
    plusKey.style.display = "none";
    minusKey.style.display = "flex";
    multiKey.style.display = "none";
    divKey.style.display = "none";
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    total.textContent = [];
    resultScreenArray = [];

    plus = false;
    minus = true;
    multi = false;
    div = false;
    point = false;

    activatePoint = false;
    activateDel = false;
    activateEqual = false;
    activateOne = false;
    activateTwo = false;
    activateThree = false;
    activateFour = false;
    activateFive = false;
    activateSix = false;
    activateSeven = false;
    activateEight = false;
    activateNine = false;
    activateZero = false;
  }
  if (e.key === "." && activatePoint === true) {
    // Add press effect
    pointButton.classList.add("buttonToggle");
    setTimeout(() => {
      pointButton.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (
      typeof resultScreenArray[resultScreenArray.length - 1] === typeof 0 &&
      resultScreenArray.length < 12
    ) {
      resultScreenArray.push(".");
      if (
        minus === false &&
        multi === false &&
        div === false &&
        plus == false
      ) {
        firstOperator.push(".");
      }

      if (minus === true || multi === true || div === true || plus == true) {
        secondOperator.push(".");
      }
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();
    activatePoint = false;
  }
  if (e.key === "0" && activateZero === false) {
    // Add press effect
    buttonZero.classList.add("buttonToggle");
    setTimeout(() => {
      buttonZero.classList.remove("buttonToggle");
    }, 100);

    // Add to screen result
    if (resultScreenArray.length < 13) {
      resultScreenArray.push(0);
    }
    del.style.pointerEvents = "auto";
    total.style.display = "flex";
    total.style.fontSize = "3rem";
    let resultScreenString = resultScreenArray.join("");
    total.textContent = resultScreenString;
    keyResets();

    // Add to logical operations
    if (minus === false && multi === false && div === false && plus == false) {
      if (firstOperator.length < 13) {
        firstOperator.push(0);
        plusButton.style.pointerEvents = "auto";
        minusButton.style.pointerEvents = "auto";
        crossButton.style.pointerEvents = "auto";
        slashButton.style.pointerEvents = "auto";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = true;
        activateMinus = true;
        activateMulti = true;
        activateDiv = true;
        activatePoint = true;
        activateEqual = false;
        activateDel = true;
      }
    }

    if (minus === true || multi === true || div === true || plus == true) {
      if (secondOperator.length < 13) {
        secondOperator.push(0);
        equalButton.style.pointerEvents = "auto";
        plusButton.style.pointerEvents = "none";
        minusButton.style.pointerEvents = "none";
        crossButton.style.pointerEvents = "none";
        slashButton.style.pointerEvents = "none";
        pointButton.style.pointerEvents = "auto";
        // Activate operators mode keypad
        activatePlus = false;
        activateMinus = false;
        activateMulti = false;
        activateDiv = false;
        activatePoint = true;
        activateEqual = true;
        activateDel = true;
      }
    }
  }
  if (e.key === "/" && activateDiv === true) {
    // Add press effect
    showNumbers();
    slashButton.classList.add("buttonToggle");
    setTimeout(() => {
      slashButton.classList.remove("buttonToggle");
    }, 100);

    // resets
    plusKey.style.display = "none";
    minusKey.style.display = "none";
    multiKey.style.display = "none";
    divKey.style.display = "flex";
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    total.textContent = [];
    resultScreenArray = [];

    plus = false;
    minus = false;
    multi = false;
    div = true;
    point = false;

    activatePoint = false;
    activateDel = false;
    activateEqual = false;
    activateOne = false;
    activateTwo = false;
    activateThree = false;
    activateFour = false;
    activateFive = false;
    activateSix = false;
    activateSeven = false;
    activateEight = false;
    activateNine = false;
    activateZero = false;
  }
  if (e.key === "*" && activateMulti === true) {
    // Add press effect
    showNumbers();
    crossButton.classList.add("buttonToggle");
    setTimeout(() => {
      crossButton.classList.remove("buttonToggle");
    }, 100);

    // results
    plusKey.style.display = "none";
    minusKey.style.display = "none";
    multiKey.style.display = "flex";
    divKey.style.display = "none";
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";

    total.textContent = [];
    resultScreenArray = [];

    plus = false;
    minus = false;
    multi = true;
    div = false;
    point = false;

    activatePoint = false;
    activateDel = false;
    activateEqual = false;
    activateOne = false;
    activateTwo = false;
    activateThree = false;
    activateFour = false;
    activateFive = false;
    activateSix = false;
    activateSeven = false;
    activateEight = false;
    activateNine = false;
    activateZero = false;
  }
  if (keyCode === 46) {
    // Add press effect
    resetButton.classList.add("buttonToggle-two");
    setTimeout(() => {
      resetButton.classList.remove("buttonToggle-two");
    }, 100);

    //resets
    equal = false;
    plus = false;
    minus = false;
    multi = false;
    div = false;
    point = false;

    activateDel = false;
    activateEqual = false;
    activatePlus = false;
    activateMinus = false;
    activateDiv = false;
    activateMulti = false;
    activatePoint = false;
    activateOne = false;
    activateTwo = false;
    activateThree = false;
    activateFour = false;
    activateFive = false;
    activateSix = false;
    activateSeven = false;
    activateEight = false;
    activateNine = false;
    activateZero = false;

    showNumbers();

    firstOperator = [];
    secondOperator = [];
    resultScreenArray.splice(0);
    total.textContent = [];
    totalAccumulated = [];
    errorDialog.textContent = [];
    total.style.fontSize = "3rem";

    plusKey.style.display = "none";
    minusKey.style.display = "none";
    multiKey.style.display = "none";
    divKey.style.display = "none";

    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";
    plusButton.style.pointerEvents = "none";
    minusButton.style.pointerEvents = "none";
    crossButton.style.pointerEvents = "none";
    slashButton.style.pointerEvents = "none";
    equalButton.style.pointerEvents = "none";
  }
  if (keyCode === 13 && activateEqual) {
    // Add press effect
    equalButton.classList.add("buttonToggle-three");
    setTimeout(() => {
      equalButton.classList.remove("buttonToggle-three");
    }, 100);

    // resets
    del.style.pointerEvents = "none";
    pointButton.style.pointerEvents = "none";
    plusButton.style.pointerEvents = "auto";
    minusButton.style.pointerEvents = "auto";
    crossButton.style.pointerEvents = "auto";
    slashButton.style.pointerEvents = "auto";
    equalButton.style.pointerEvents = "none";

    // Activate operators mode keypad

    activatePoint = false;
    activateDel = false;
    activateEqual = false;
    activatePlus = true;
    activateMinus = true;
    activateMulti = true;
    activateDiv = true;
    activateOne = true;
    activateTwo = true;
    activateThree = true;
    activateFour = true;
    activateFive = true;
    activateSix = true;
    activateSeven = true;
    activateEight = true;
    activateNine = true;
    activateZero = true;

    hideNumbers();

    if (equal === false) {
      if (plus) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(firstOperatorAcc) + parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (minus) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(firstOperatorAcc) - parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (multi) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(firstOperatorAcc) * parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (div) {
        let firstOperatorAcc = firstOperator.join("");
        let secondOperatorAcc = secondOperator.join("");

        if (parseFloat(secondOperatorAcc) === 0) {
          errorDialog.textContent = "Division by 0 not allowed";
          //resets
          equal = false;
          plus = false;
          minus = false;
          multi = false;
          div = false;
          firstOperator = [];
          secondOperator = [];
          total.textContent = [];
          total.style.display = "none";
          plusButton.style.pointerEvents = "none";
          minusButton.style.pointerEvents = "none";
          crossButton.style.pointerEvents = "none";
          slashButton.style.pointerEvents = "none";
          showNumbers();
        } else {
          totalAccumulated =
            parseFloat(firstOperatorAcc) / parseFloat(secondOperatorAcc);

          if (
            parseFloat(firstOperatorAcc) % parseFloat(secondOperatorAcc) ===
            0
          ) {
            let fixedFloat =
              parseFloat(firstOperatorAcc) / parseFloat(secondOperatorAcc);

            total.textContent = parseFloat(fixedFloat.toLocaleString());

            total.style.fontSize = "3rem";
          } else {
            if (totalAccumulated.toString().length < 13) {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "3rem";
            } else {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "2rem";
            }
          }

          //resets
          plus = false;
          minus = false;
          multi = false;
          div = false;
          equal = true;
          firstOperator = [];
          secondOperator = [];
        }
      }
    } else {
      if (plus) {
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(totalAccumulated) + parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (minus) {
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(totalAccumulated) - parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }
        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (multi) {
        let secondOperatorAcc = secondOperator.join("");

        const maxNumber =
          parseFloat(totalAccumulated) * parseFloat(secondOperatorAcc);

        totalAccumulated = maxNumber;

        if (totalAccumulated.toString().length < 13) {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "3rem";
        } else {
          total.textContent = maxNumber.toLocaleString();
          total.style.fontSize = "2rem";
        }

        //resets
        equal = true;
        plus = false;
        minus = false;
        multi = false;
        div = false;
        firstOperator = [];
        secondOperator = [];
      } else if (div) {
        let secondOperatorAcc = secondOperator.join("");

        if (parseFloat(secondOperatorAcc) === 0) {
          errorDialog.textContent = "Division by 0 not allowed";
          //resets
          equal = false;
          plus = false;
          minus = false;
          multi = false;
          div = false;
          firstOperator = [];
          secondOperator = [];
          total.textContent = [];
          total.style.display = "none";
          plusButton.style.pointerEvents = "none";
          minusButton.style.pointerEvents = "none";
          crossButton.style.pointerEvents = "none";
          slashButton.style.pointerEvents = "none";
          showNumbers();
        } else {
          totalAccumulated =
            parseFloat(totalAccumulated) / parseFloat(secondOperatorAcc);

          if (
            parseFloat(totalAccumulated) % parseFloat(secondOperatorAcc) ===
            0
          ) {
            total.textContent = totalAccumulated.toLocaleString();

            total.style.fontSize = "3rem";
          } else {
            if (totalAccumulated.toString().length < 13) {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "3rem";
            } else {
              total.textContent = totalAccumulated.toLocaleString();
              total.style.fontSize = "2rem";
            }
          }

          //resets
          plus = false;
          minus = false;
          multi = false;
          div = false;
          equal = true;
          firstOperator = [];
          secondOperator = [];
        }
      }
    }
  }
});
