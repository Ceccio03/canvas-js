const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

setInterval(createArt, 2000);

function createArt() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 100; i++) {
        const r1 = Rect.random(canvas.width, canvas.height);
    
        r1.draw(ctx);
    }
}