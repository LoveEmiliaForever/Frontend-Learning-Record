const App = {
    data(){
        return{
        xSpeed:0,
        ySpeed:0,
        pinBallX:48.9,
        pinBallY:86,
        boardX:40,
        gameState:true,
        catchTimes:0
        }
    },
    mounted(){
        this.xSpeed = Math.random()*0.1 + 1;
        this.ySpeed = -(Math.random()*0.1 + 1);
        requestAnimationFrame(this.ballMove);
    },
    methods:{
        moveBoard(event){
            if(!this.gameState){
                return;
            }
            this.boardX = (event.clientX - innerWidth*0.1)*100/(innerWidth*0.8) - 10;
            if(this.boardX < 0){
                this.boardX = 0;
            }else if(this.boardX > 80){
                this.boardX = 80;
            }
        },
        ballMove(){
            this.pinBallX += this.xSpeed;
            this.pinBallY += this.ySpeed;
            if(this.pinBallX + 1.1 >= 100){
                this.xSpeed = -this.xSpeed;
            }else if(this.pinBallX - 1.1 <= 0){
                this.xSpeed = -this.xSpeed;
            }else if(this.pinBallY - 2 <= 0){
                this.ySpeed = -this.ySpeed;
            }else if(this.pinBallY + 2 >= 88 && this.pinBallY + 2 < 90){
                if(this.pinBallX >= this.boardX && this.pinBallX <= this.boardX+20){
                    this.ySpeed = -this.ySpeed;
                    this.catchTimes++;
                }
            }else if(this.pinBallY + 2 >= 90){
                this.gameState = false;
                console.log(`boardX:(${this.boardX.toFixed(0)},${Number(this.boardX.toFixed(0))+20}) pinBallX:${this.pinBallX.toFixed(0)}`);
                return;
            }
            requestAnimationFrame(this.ballMove);
        },
        resetGame(){
            this.pinBallX=48.9;
            this.pinBallY=86;
            this.boardX=40;
            this.gameState=true;
            this.xSpeed = Math.random()*0.1 + 1;
            this.ySpeed = -(Math.random()*0.1 + 1);
            this.catchTimes = 0;
            requestAnimationFrame(this.ballMove);
        }
    }
}
Vue.createApp(App).mount("#Application");