//从服务端获取个别数据来更新部分网页而不用加载整个页面
//许多网站使用 JavaScript API 从服务器请求数据，并在不重新加载页面的情况下更新页面

/*
主要的 API 是 Fetch API，页面中运行的 JavaScript 向服务器发起 HTTP 请求来获取特定的资源（通常是JSON）
JavaScript 可以使用这些数据更新页面（通常是通过使用 DOM 操作 API）
*/

const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
    const verse = verseChoose.value;
    updateDisplay(verse);
});

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `${verse}.txt`;
}

fetch(url)
    // fetch() 返回一个 promise。当我们从服务器收到响应时，
    // 会使用该响应调用 promise 的 `then()` 处理器。
    .then((response) => {
        // 如果请求没有成功，我们的处理器会抛出错误。
        if (!response.ok) {
        throw new Error(`HTTP 错误：${response.status}`);
        }
        // 否则（如果请求成功），我们的处理器通过调用
        // response.text() 以获取文本形式的响应，
        // 并立即返回 `response.text()` 返回的 promise。
        return response.text();
    })
    // 若成功调用 response.text()，会使用返回的文本来调用 `then()` 处理器，
    // 然后我们将其拷贝到 `poemDisplay` 框中。
    .then((text) => (poemDisplay.textContent = text))
    // 捕获可能出现的任何错误，
    // 并在 `poemDisplay` 框中显示一条消息。
    .catch((error) => (poemDisplay.textContent = `获取诗歌失败：${error}`));

//传输图片时使用blob()，并用showProduct()显示图片， Blob——这个词是“二进制大对象”的缩写


//XMLHttpRequest API也是发送HTTP请求的，但它比较落后
//它有open()方法进行初始化
//添加load事件监听器，在响应加载完成时触发
//添加error事件监听器，在请求失败时触发

const request = new XMLHttpRequest();

try {
    request.open("GET", "products.json");

    request.responseType = "json";

    request.addEventListener("load", () => initialize(request.response));
    request.addEventListener("error", () => console.error("XHR error"));

    request.send();
} catch (error) {
    console.error(`XHR error ${request.status}`);
}

