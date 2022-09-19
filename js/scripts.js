const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");


const getLettersLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLettersUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumbers = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbols = () => {
    const symbols = "(){}[]=<>/.,!?$%@#&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];

};

const generatePassword = (getLettersLowerCase, getLettersUpperCase, getNumbers, getSymbols) => {
    let password = "";

    const passwordLength = 12;

    const generators = [
        getLettersLowerCase,
        getLettersUpperCase,
        getNumbers,
        getSymbols
    ];

    const pattern = new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*");

    while (!pattern.test(password)) {
        password = "";
        for (i = 0; i < passwordLength; i = i + generators.length) {
            generators.forEach(() => {
                const randomValue = generators[Math.floor(Math.random() * generators.length)]();

                password += randomValue;
            })
        }
    }

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
}

//Events
generatePasswordButton.addEventListener("click", () => {
    generatePassword(
        getLettersLowerCase,
        getLettersUpperCase,
        getNumbers,
        getSymbols);
});