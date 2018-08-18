export default class CharacterSpriteCreator {

    constructor(image, arena){
        this.image = image;
        this.srcX = 0;
        this.srcY = 0;
        this.width = 64;
        this.height = 98;
        this.posY = 0;
        this.posX = 0;
        this._direction = "none";
        this.speed = 2;
        this.countAnim = 0;
        this.arena = arena;
    }

    draw(context) {
        context.drawImage(this.image, this.srcX, this.srcY, this.width, this.height, this.posX, this.posY, this.width/2, this.height/2);
        this.animate();
    }

    walk() {
        const restrictWalkToCanvas = () =>{
            this.posX = Math.max(0, Math.min(this.arena.width - this.width / 2, this.posX));
            this.posY = Math.max(0, Math.min(this.arena.height - this.height / 2, this.posY));
        };

        const directions = {
            "none": () => {},
            "right": () => {
                this.posX += this.speed;
                this.srcY = this.height;
            },
            "left": () => {
                this.posX -= this.speed;
                this.srcY = 0;
            },
            "up": () => {
                this.posY -= this.speed;
                this.srcY = this.height * 2;
            },
            "down": () => {
                this.posY += this.speed;
                this.srcY = this.height * 3;
            }
        };
        directions[this.direction]();
        restrictWalkToCanvas();

    }
    animate() {

        if(this.direction !== "none") {
            this.countAnim++;
            this.srcX = Math.floor(this.countAnim / 5) * this.width;
        }

        if(this.countAnim >= 32){
            this.countAnim = 0;
        }
    }
    get direction() {
        return this._direction;
    }

    set direction(direction){
        this._direction = direction;
    }

}