
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const btn = document.querySelector(".calsBtn");

const resultBox = document.querySelector(".result-box");
const bmiValue = document.querySelector(".bmi-value");
const statusText = document.querySelector(".status");

const previewBox = document.querySelector(".preview");
const liveText = document.querySelector(".live-text");

// BMI Status Function

function getStatus(bmi) {

    if (bmi < 18.5) {
        return "Underweight";
    }

    if (bmi < 25) {
        return "Normal Weight";
    }

    if (bmi < 30) {
        return "Overweight";
    }

    return "Obesity";
}

// Calculate BMI Function

function calculateBMI() {

    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    if (
        height.value === "" ||
        weight.value === "" ||
        !Number.isFinite(h) ||
        !Number.isFinite(w) ||
        h <= 0 ||
        w <= 0
    ) {
        previewBox.style.display = "none";
        return;
    }

    const bmi = w / ((h / 100) ** 2);
    const status = getStatus(bmi);

    liveText.textContent = `BMI: ${bmi.toFixed(1)} - ${status}`;

    previewBox.style.display = "block";
}

// Live Preview

height.addEventListener("input", calculateBMI);
weight.addEventListener("input", calculateBMI);

// Calculate Button

btn.addEventListener("click", () => {

    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    if (
        height.value === "" ||
        weight.value === "" ||
        !Number.isFinite(h) ||
        !Number.isFinite(w) ||
        h <= 0 ||
        w <= 0
    ) {
        alert("Please enter valid height and weight!");
        return;
    }

    const bmi = w / ((h / 100) ** 2);
    const status = getStatus(bmi);

    bmiValue.textContent = bmi.toFixed(1);

    statusText.textContent = "Health Status: " + status;

    resultBox.style.display = "block";

});
