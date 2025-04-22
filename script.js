
const name = prompt("Ismingiz nima?");
const surname = prompt("Familyangiz nima?");
const age = prompt("Yoshingiz nechida?");
const score = prompt("Toplagan ballingiz?");


document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.textAlign = "center";
document.body.style.marginTop = "50px";
document.body.style.backgroundColor = "#f0f0f0";



const resultDiv = document.createElement("div");
resultDiv.style.border = "2px solid #000";
resultDiv.style.padding = "20px";
resultDiv.style.display = "inline-block";
resultDiv.style.backgroundColor = "#f4f4f4";
resultDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

resultDiv.innerHTML = `
    <h1>Ma'lumotlaringiz</h1>
    <p><strong>Ism:</strong> ${name}</p>
    <p><strong>Familya:</strong> ${surname}</p>
    <p><strong>Yosh:</strong> ${age}</p>
    <p><strong>Toplagan ball:</strong> ${score}</p>
`;

document.body.appendChild(resultDiv);

const message = document.createElement("p");
message.style.marginTop = "20px";
message.style.fontWeight = "bold";

if (score > 65) {
    message.textContent = "Marhamat, o'tdiz!";
    message.style.color = "green";
} else {
    message.textContent = "Tur, yo'qol, o'yinchog'ingni o'yna!";
    message.style.color = "red";
}

resultDiv.appendChild(message);