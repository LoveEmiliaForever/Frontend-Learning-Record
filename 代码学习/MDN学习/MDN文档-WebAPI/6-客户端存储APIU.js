//现代 web 浏览器提供了很多在用户电脑 web 客户端存放数据的方法
//可以在需要它的时候被重新获得
//它是由 JavaScript APIs 组成的，因此允许你在客户端存储数据 (比如在用户的机器上)，而且可以在需要的时候重新取得需要的数据

//使用客户端存储 API 可以存储的数据量是有限的，具体的数量限制取决于浏览器




//web storage
//它的使用很简单：存储简单的键值对数据 (限制为字符串、数字等类型) 并在需要的时候检索其值

//sessionStorage  关闭浏览器时数据会丢失
//localStorage  会一直保存数据
//在其中存储的数据可以跨页面存在，但每个域（网站）都有一个单独的数据存储区
localStorage.setItem("name", "Chris");//在存储中保存一个数据项
var myName = localStorage.getItem("name");//获取存储的数据
localStorage.removeItem("name");//删除一项数据




//IndexedDB简称IDB
//它是可以在浏览器中访问的一个完整的数据库系统，可以存储复杂的关系数据

let db;
window.onload = function(){
    //打开 notes数据库的 1 版本,数据库操作是异步的
    let request = window.indexedDB.open("notes", 1);

    //处理数据库开启时的失败或成功情况
    request.onerror = function () {
        console.log("Database failed to open");
    };
    request.onsuccess = function () {
        console.log("Database opened successfully");
        // 存储打开的数据库
        db = request.result;
        displayData();
    };

    //如果尚未设置数据库，或者使用比现有存储数据库更大的版本号打开数据库（执行升级时），则运行此处理程序
    request.onupgradeneeded = function (e) {
        //获取对现有数据库的引用
        let db = e.target.result;

        // 在打开的数据库中创建一个新的对象库，相当于传统数据库系统中的单个表
        // 创建了一个名为id的关键字段，并让它autoIncrement
        let objectStore = db.createObjectStore("notes", {
            keyPath: "id",
            autoIncrement: true,
        });
    
        // 创建其它的项
        objectStore.createIndex("title", "title", { unique: false });
        objectStore.createIndex("body", "body", { unique: false });
    
        console.log("Database setup complete");
    };
};


//存储数据
//当表单被提交时，运行一个叫做 addData() 的函数
form.onsubmit = addData;
function addData(e) {
    // 停止以传统方式实际提交的表单，这将导致页面刷新，破坏体验
    e.preventDefault();

    // 创建一个表示要输入数据库的记录的对象，并使用表单输入中的值填充它
    let newItem = { title: titleInput.value, body: bodyInput.value };

    // 打开 notes 对象存储的 readwrite 事务，此事务对象允许我们访问对象存储
    let transaction = db.transaction(["notes"], "readwrite");

    // 访问对象库，并引用它
    let objectStore = transaction.objectStore("notes");

    // 添加新记录到数据库，这创建了一个请求对象
    var request = objectStore.add(newItem);
    request.onsuccess = function () {
      // 清除HTML的输入数据
        titleInput.value = "";
        bodyInput.value = "";
    };

    transaction.oncomplete = function () {
        console.log("Transaction completed: database modification finished.");
        displayData();
    };

    transaction.onerror = function () {
        console.log("Transaction not opened due to error");
    };
}


//显示数据
function displayData() {
    // 更新之前先把原始显示内容删除
    // 不然会有很多重复内容
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // 得到对象存储的引用
    let objectStore = db.transaction("notes").objectStore("notes");
    // 打开对游标的请求，它是一个可用于迭代对象存储中的记录的构造
    objectStore.openCursor().onsuccess = function (e) {
        //  获取对游标本身（对象）的引用
        let cursor = e.target.result;

        // 一直遍历到没有数据
        if (cursor) {

            let listItem = document.createElement("li");
            let h3 = document.createElement("h3");
            let para = document.createElement("p");
            listItem.appendChild(h3);
            listItem.appendChild(para);
            list.appendChild(listItem);

            // 读取数据
            h3.textContent = cursor.value.title;
            para.textContent = cursor.value.body;

            // 给它一个ID类存储id，这在以后操作记录时有用
            listItem.setAttribute("data-note-id", cursor.value.id);

            let deleteBtn = document.createElement("button");
            listItem.appendChild(deleteBtn);
            deleteBtn.textContent = "Delete";
            // 删除记录的函数
            deleteBtn.onclick = deleteItem;

            // 将光标前进到数据存储区中的下一条记录
            cursor.continue();
        } else {
            // 检查是否有数据读取
            if (!list.firstChild) {
                let listItem = document.createElement("li");
                listItem.textContent = "No notes stored.";
                list.appendChild(listItem);
            }
            // 没有读取过数据则显示没有数据
            console.log("Notes all displayed");
        }
    };
}


//删除数据
function deleteItem(e) {
    // 获取要删除数据的id并转换为number类型
    let noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

    // 和存储数据相似的，对数据进行删除
    let transaction = db.transaction(["notes"], "readwrite");
    let objectStore = transaction.objectStore("notes");
    let request = objectStore.delete(noteId);

    // 删除完成后的操作
    transaction.oncomplete = function () {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        console.log("Note " + noteId + " deleted.");

        // 如果删除后没有数据了，进行的操作
        if (!list.firstChild) {
            let listItem = document.createElement("li");
            listItem.textContent = "No notes stored.";
            list.appendChild(listItem);
        }
    };
}




//IDB存储复杂数据
//IndexedDB 可用于存储任何你想要的东西，包括复杂的对象，如视频或图像 blob
