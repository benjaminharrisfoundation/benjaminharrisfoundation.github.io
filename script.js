function logConsole(message) {
    let siteName = "BHF";
    let styleA = "background-color: rgb(199, 99, 249); color: #000;font-family:'Times New Roman', 'Times', 'serif';padding-left:5px;padding-right:5px;";
    let styleB = "font-family:'Times New Roman', 'Times', 'serif';";
    let styleC = "font-size: 8px"
    console.log(`%c%s\n%c${siteName}\n%c${message}`, styleC, Date.now(), styleA, styleB)
}

setInterval(() => {
    document.getElementById("btmBnrPdg").style = `min-height: calc(${document.getElementById("bottom-banner").getBoundingClientRect().height}px + 0.7em)`
}, 1000);
