const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
function drawPix(url, pixel,canvasSize) {
    if (pixel === 0) {
        const img = new Image();
        img.onload = function () {
            ctx.drawImage(img, canvasSize.x1, canvasSize.y1, canvasSize.x2, canvasSize.y2);
        };
        img.src = url;
    } else {
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                if (pixel > 0) {
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
    const canvasSize = {x1:0, x2:0, y1:512, y2:512 };
    switch (btnClick) {
        case 'btn4x4':
            drawPix('./assets/data/4x4.json', 4, canvasSize);
            break;
        case 'btn32x32':
            drawPix('./assets/data/32x32.json', 32, canvasSize );
            break;
        case 'btnLogo':
            drawPix('./assets/data/RSS_logo.png', 0, canvasSize);
            break;
        default:
            break;
    }
}
document.querySelector('.btns').addEventListener('click', clickBtn);













