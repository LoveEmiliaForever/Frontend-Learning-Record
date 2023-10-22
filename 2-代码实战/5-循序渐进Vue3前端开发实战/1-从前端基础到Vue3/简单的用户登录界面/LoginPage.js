const App = {
    data(){
        return {
            title:"welcome! please login.",
            noLogin:true,
            userName:"",
            password:"",
            buttonTitle:"Login"
        }
    },
    methods:{
        click(){
            if(this.noLogin){
                this.login();
            }else{
                this.logout();
            }
        },
        login(){
            if(this.userName.length > 0 && this.password.length >0){
                console.info(`userName:${this.userName}
password:${this.password}`);
                this.noLogin = false;
                this.title = `welcome!${this.userName}`;
                this.buttonTitle = "Logout";
                this.userName = "";
                this.password = "";
            }else{
                console.warn("type your account and password");
            }
        },
        logout(){
            this.noLogin=true;
            this.title="welcome! please login.";
            this.buttonTitle = "Login";
        }
    }
}
Vue.createApp(App).mount("#Application");