const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
const canvasSize = document.querySelector("#canvas").offsetWidth;

function drawPix(url, pixel) {
    if (pixel === 0) {
        const img = new Image();
        img.onload = function () {
            ctx.drawImage(img,0,0,canvasSize,canvasSize);
        };
        img.src = url;
    } else {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                if (pixel > 0) {
                    ctx.clearRect(0, 0, canvasSize, canvasSize);
                    const width = document.querySelector("#canvas").offsetWidth / pixel;
                    const height = document.querySelector("#canvas").offsetHeight / pixel;
                    data.forEach((line, i) => {
                        line.forEach((cell, j) => {
                            if (pixel === 4) ctx.fillStyle = '#' + cell;
                            if (pixel === 32) ctx.fillStyle = 'rgba(' + cell[0] + ',' + cell[1] + ',' + cell[2] + ',' + cell[3] / 255 + ')';
                            ctx.fillRect(width * i, height * j, width, height);
                        });
                    });
                }
            });
    }
}
function clickBtn(event) {
    const btnClick = event.target.classList[1];
    switch (btnClick) {
        case 'btn4x4':
            drawPix('./assets/data/4x4.json', 4);
            break;
        case 'btn32x32':
            drawPix('./assets/data/32x32.json', 32 );
            break;
        case 'btnLogo':
            drawPix('./assets/data/RSS_logo.png', 0);
            break;
        default:
            break;
    }
}
document.querySelector('.btns').addEventListener('click', clickBtn);













