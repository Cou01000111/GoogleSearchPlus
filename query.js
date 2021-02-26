var urlLabel = document.getElementById('url-text');
urlLabel.innerText = location.href.split('?,')[0];
console.log(urlLabel.innerText);
urlLabel.innerText += '?';
var queries = location.href.split(',');
queries.shift();
console.log(queries);
queries.forEach((e)=>{
    urlLabel.innerText += `,${e}`;
});

var copyButton = document.getElementById('copy-button');
copyButton.onclick = () =>{
    console.log('push');
    // コピー内容を選択する.
    let range = document.createRange();
    range.selectNodeContents(urlLabel);
    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    // 選択したものをコピーする.
    document.execCommand('copy');
    // コピー内容の選択を解除する.
    selection.removeAllRanges();
}
