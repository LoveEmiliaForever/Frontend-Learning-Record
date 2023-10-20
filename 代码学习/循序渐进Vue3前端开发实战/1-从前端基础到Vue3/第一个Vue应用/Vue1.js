//定义一个Vue组件
const App = {
    //组件的数据
    data(){
        return {
            count:0
        }
    },
    //组件的方法
    methods:{
        clickButton(){
            this.count += 1;
        }
    }
}
//把组件绑定到页面元素上
Vue.createApp(App).mount("#Application");