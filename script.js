const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');
const colorBox = document.getElementById('colorBox');
const hexCode = document.getElementById('hexCode');

function updateColor() {
    const r = parseInt(redRange.value);
    const g = parseInt(greenRange.value);
    const b = parseInt(blueRange.value);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;

    colorBox.style.backgroundColor = rgbColor;
    hexCode.textContent = hexColor;
}

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);

updateColor(); // Inicializar el color
