function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeTextColor() {
    const elements = document.querySelectorAll('.h1');
    elements.forEach(element => {
        element.style.color = getRandomColor();
    });
}

document.getElementById('changeColorButton').addEventListener('click', changeTextColor);