function functionName(parameter){
    console.log("kkk");
    if (true){return "Back";}
    else{return;}//此时返回undefined
}
//最佳实践：要么全部都有返回值，要么完全没有返回值，不确定是否返回值会带来麻烦