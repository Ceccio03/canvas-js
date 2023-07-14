class Rect {
    constructor(originX, originY, width, height) {
        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.strokeRect(this.originX, this.originY, this.width, this.height);
    }

    static random(canvasWidth, canvasHeight) {
        const randomWidth = 500 * Math.random();
        const randomHeight = 500 * Math.random();
        const randomX = canvasWidth * Math.random();
        const randomY = canvasHeight * Math.random();
        const newRect = new Rect(randomX, randomY, randomWidth, randomHeight);

        return newRect;
    }
}