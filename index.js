function draw4x4() {
    var dataJson = [];
    fetch('./assets/data/4x4.json')
        .then(res => res.json())
        .then((data) => {
            console.log('data', data);
            const canvas = document.querySelector("#canvas");
            const ctx = canvas.getContext('2d');
            const width = document.querySelector("#canvas").offsetWidth / 4;
            const height = document.querySelector("#canvas").offsetHeight / 4;
            data.forEach((line, i) => {
                console.log(line, i);
                line.forEach((cell, j) => {
                    ctx.fillStyle = '#' + cell;
                    ctx.font = "12px serif";
                    ctx.fillRect(width * i, height * j, width, height);
                });
            });
        });
}

document.querySelector('.btn4x4').addEventListener('click', draw4x4);

function draw32x32() {
    var dataJson = [];
    fetch('./assets/data/32x32.json')
        .then(res => res.json())
        .then((data) => {
            console.log('data', data);
            const canvas = document.querySelector("#canvas");
            const ctx = canvas.getContext('2d');
            const width = document.querySelector("#canvas").offsetWidth / 32;
            const height = document.querySelector("#canvas").offsetHeight / 32;
            data.forEach((line, i) => {
                console.log(line, i);
                line.forEach((cell, j) => {
                    console.log(cell, i, j, width, height);
                    ctx.fillStyle = 'rgba(' + cell[0] + ',' + cell[1] + ',' + cell[2] + ',' + cell[3] / 255 + ')';
                    ctx.font = "12px serif";
                    ctx.fillRect(width * i, height * j, width, height);;
                });
            });
        });
}


document.querySelector('.btn32x32').addEventListener('click', draw32x32);

function drawLogo() {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d')
    console.log(ctx)
    var img = new Image();
    console.log(img);
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 512, 512);
    };
    img.src = './assets/data/RSS_logo.png';
}

document.querySelector('.btnLogo').addEventListener('click', drawLogo);














