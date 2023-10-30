function calculateBMI() {

const weight = parseFloat(document.getElementById("weight").value);

const height = parseFloat(document.getElementById("height").value) / 100; // перевод см в метры
const doubleHeight = Math.pow(height, height);
const bmi = weight / doubleHeight;

const result = document.getElementById("result");


result.textContent = "Ваш ИМТ " + bmi.toFixed(2);

}

