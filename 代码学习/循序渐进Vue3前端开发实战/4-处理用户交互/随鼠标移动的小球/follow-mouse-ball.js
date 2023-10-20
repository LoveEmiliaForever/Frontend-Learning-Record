const App = {
    data(){
        return{
            offsetX:0,
            offsetY:0,
            offsetX2:0,
            offsetY2:0
        }
    },
    methods:{
        move(event){
            if(event.clientX + 30 > 440){
                this.offsetX = 440 - 60;
                this.offsetX2 = 440 - 120;
            }else if(event.clientX - 30 < 0){
                this.offsetX = 0;
                this.offsetX2 = 0;
            }else{
                this.offsetX = event.clientX - 30;
                this.offsetX2 = event.clientX - 60;
            }
            if(event.clientY + 30 > 440){
                this.offsetY = 440 - 60;
                this.offsetY2 = 440 - 120;
            }else if(event.clientY - 30 < 0){
                this.offsetY = 0;
                this.offsetY2 = 0;
            }else{
                this.offsetY = event.clientY - 30;
                this.offsetY2 = event.clientY - 60;
            }
        }
    }
}
Vue.createApp(App).mount("#Application");