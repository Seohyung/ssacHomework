function threeNumbersGenerator() {
    const threeNumber = [];
    function oneNumberGenerator() {
        if (threeNumber.length < 3) {
            let n = Math.floor(Math.random() * 9) + 1;
            if (notSame(n)) {
                threeNumber.push(n);
            }
            oneNumberGenerator();
        }
        function notSame(n) {
            return (threeNumber.indexOf(n) < 0);
        }
    }

    oneNumberGenerator();
    return threeNumber;
}

function judgeBrain(question, trial) {
    const judgement = { ball: 0, strike: 0, out: false };
    for (let i = 0; i < question.length; i++) {
        for (let j = 0; j < trial.length; j++) {
            if ((question[i] == trial[j]) && (i == j)) {
                judgement.strike += 1;
            } else if ((question[i] == trial[j]) && (i != j)) {
                judgement.ball += 1;
            }
        }
    }
    if ((judgement.ball == 0) && (judgement.strike == 0)) {
        judgement.out = true;
    }
    return judgement;
}

function judgeMouth(judgement) {
    let judgementShouting = '';
    if (judgement.out == true) {
        judgementShouting = "OUT";
    } else if (judgement.ball == 0) {
        judgementShouting = `${judgement.strike}S`;
    } else if (judgement.strike == 0) {
        judgementShouting = `${judgement.ball}B`;
    } else {
        judgementShouting = `${judgement.ball}B${judgement.strike}S`;
    }
    return judgementShouting;
}

function inputHandler(input) {
    const errMessage = "Please enter three different digits from 1 to 9 only."

    function duplicateCheck(input) {
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[i] == input[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    if ((input.length != 3) || (!!input.match(/[^1-9]/g)) || duplicateCheck(input)) {
        console.log(errMessage);
        return false;
    } else {
        return true;
    }
}

function gameMain() {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let inningCount = 0;
    const generatedNumber = threeNumbersGenerator();

    console.log(generatedNumber);
    console.log("Welcome to the Baseball game. You have 9 innings to win.");

    rl.on('line', (input) => {
        let judgementShouting = '';
        if (inputHandler(input)) {
            inningCount += 1;
            judgementShouting = judgeMouth(judgeBrain(generatedNumber, input));
            console.log(`${inningCount} INN : ${judgementShouting}`)
        }

        if ((judgementShouting == "3S") && (inningCount <= 9)) {
            console.log("You won.");
            rl.close();
        } else if (inningCount == 9) {
            console.log("You lost.");
            rl.close();
        }
    });
}

gameMain();