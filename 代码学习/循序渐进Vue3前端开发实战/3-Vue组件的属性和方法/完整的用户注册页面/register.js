const App = {
    data(){
        return{
            inputList:[
                {
                    inputElementId:"userNameInput",
                    inputElementType:"text",
                    labelText:"用户名",
                    required:true,
                    placeholderText:"输入用户名",
                    inputText:""
                },
                {
                    inputElementId:"passwordInput",
                    inputElementType:"password",
                    labelText:"密码",
                    required:true,
                    placeholderText:"输入密码",
                    inputText:""
                },
                {
                    inputElementId:"mailboxInput",
                    inputElementType:"text",
                    labelText:"邮箱",
                    required:false,
                    placeholderText:"输入邮箱",
                    inputText:""
                },
            ],
            preferSettingList:[
                {
                    preferCheckboxId:"subscriptEmil",
                    LabelText:"订阅邮件通知"
                },
                {
                    preferCheckboxId:"hidePrivate",
                    LabelText:"隐藏个人信息"
                }
            ],
            preferSetting:[]
        }
    },
    computed:{
        userName:{
            get(){return this.inputList[0].inputText;},
            set(value){this.inputList[0].inputText = value;}
        },
        userPassword:{
            get(){return this.inputList[1].inputText;},
            set(value){this.inputList[1].inputText = value;}
        },
        userMailbox:{
            get(){return this.inputList[2].inputText;},
            set(value){this.inputList[2].inputText = value;}
        }
    },
    methods:{
        registeredAccount(){
            if(this.userName.length <= 0){
                console.error("用户名不能为空");
                return;
            }else if(this.userPassword.length <= 0){
                console.error("密码不能为空");
                return;
            };
            console.info(`用户名:${this.userName}\n密码:${this.userPassword}\n用户邮箱:${this.userMailbox}\n偏好设置:${this.preferSetting.join(" + ")}`);
        }
    }
}
Vue.createApp(App).mount("#Application");