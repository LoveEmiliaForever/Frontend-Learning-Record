const switchButton = {
    props:["buttonStyle"],
    data(){
        return{switchStatus:false};
    },
    computed:{
        buttonClass:{
            get(){
                if(this.buttonStyle == "mini"){
                    return "mini-button";
                }else{
                    return "normal-button";
                }
            }
        },
        buttonStatusClass:{
            get(){
                if(this.switchStatus){
                    return "switch-on";
                }else{
                    return "switch-off";
                }
            }
        }
    },
    methods:{
        click(){
            this.switchStatus = !this.switchStatus;
            this.$emit("switchChange", this.switchStatus);
        }
    },
    template:`
        <div :class="buttonClass" @click="click">
            <div :class="buttonStatusClass"></div>
        </div>
    `
};

const App = Vue.createApp({
});

App.component("my-switch", switchButton);
App.mount("#Application");




