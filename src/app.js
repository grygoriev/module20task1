// файл /src/app.js
import getRandomColor from './utils'

export default function initApp() {
    const body = document.querySelector('body');
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "Изменить цвет страницы";
    body.append(button);
    button.addEventListener("click", () => {
        body.style.background = getRandomColor();
    })
}