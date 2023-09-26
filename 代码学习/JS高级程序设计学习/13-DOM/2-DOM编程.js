//动态脚本
//通过DOM添加脚本，可以用<script src>也可以直接用<script>
//通过innerHTML创建的<script>永远不会执行，也不能强制执行



//动态样式
//通过DOM添加CSS样式，可以用<link rel type href>或<style>
//<link>的外部文件加载是异步过程，不影响JS运行



//操作表格
//直接通过DOM添加表格会很麻烦，有大量代码
/*
DOM给<table>、<tbody>、<tr>添加了一些属性和方法
<table>元素的属性方法
    caption 指向<caption>
    tBodies 包含<tbody>元素的HTMLCollection
    tFoot   指向<tfoot>
    tHead   指向<thead>
    rows    包含所有行的HTMLCollection
    createTHead()   创建<thead>放到表格中，返回引用
    createTFoot()   创建<tfoot>放到表格中，返回引用
    createCaption() 创建<caption>放到表格中，返回引用
    deleteTHead()   删除<thead>
    deleteTFoot()   删除<tfoot>
    deleteCaption() 删除<caption>
    deleteRow(pos)  删除给定位置的行
    insertRow(pos)  在给定位置插入行
<tbody>元素的属性方法
    rows    包含<tbody>中所有行的HTMLCollection
    deleteRow(pos)  删除给定位置的行
    insertRow(pos)  在给定位置插入行，返回该行的引用
<tr>元素的属性方法
    cells   包含<tr>中所有表元的HTMLCollection
    deleteCell(pos) 删除给定位置的表元
    insertCell(pos) 在给定位置插入表元，返回该表元的引用
*/
let table = document.createElement("table");
table.border = 1;
table.width = "100%";
let tbody = document.createElement("tbody");
table.appendChild(tbody);
tbody.insertRow(0);
tbody.rows[0].insertCell(0).appendChild(document.createTextNode("Cell 1,1"));
tbody.rows[0].insertCell(1).appendChild(document.createTextNode("Cell 1,2"));
//代码又少又清楚



//使用NodeList
//NodeList、NamedNodeMap、HTMLCollection都是实时的
//是基于DOM文档的实时查询，是会变化的
//例如迭代操作HTMLCollection时，以length为跳出循环依据，但操作会影响length使得循环运行异常
//最好是使用变量保存length的一个快照再使用它
