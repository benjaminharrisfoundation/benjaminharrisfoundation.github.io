function logConsole(message) {
  let siteName = "BHF";
  let styleA =
    "background-color: rgb(199, 99, 249); color: #000;font-family:'Times New Roman', 'Times', 'serif';padding-left:5px;padding-right:5px;";
  let styleB = "font-family:'Times New Roman', 'Times', 'serif';";
  let styleC = "font-size: 8px";
  console.log(
    `%c%s\n%c${siteName}\n%c${message}`,
    styleC,
    Date.now(),
    styleA,
    styleB,
  );
}

setInterval(() => {
  document.getElementById("btmBnrPdg").style =
    `min-height: calc(${document.getElementById("bottom-banner").getBoundingClientRect().height}px + 0.7em)`;
}, 1000);

if (true) {
  let url = document.location.href;
  if (url.match(/.*\/#.*/)) {
    let transparency = 255;
    document.getElementById(url.match(/.*\/#(.*)/)[1]).style =
      `border-radius: 15px;background-color: rgba(230, 230, 20, ${transparency});`;
    let _r = 230;
    let _g = 230;
    let _b = 23;
    let _c = 10;
    let _d = 0;
    setTimeout(() => {
      bHighlightedRunning = true;
      let decreaseHighlightingInterval = setInterval(
        () => {
          if (bHighlightedRunning) {
            logConsole(_d);
            _d++;
            if (_r + _g + _b > 30) {
              if (transparency < 3) transparency = 3;
              transparency = transparency - 1;
              _r = _r - 5 * (1 / _c);
              _g = _g - 5 * (1 / _c);
              _b = _b - 1;
              document.getElementById(url.match(/.*\/#(.*)/)[1]).style =
                `border-radius: 15px;background-color: rgba(${_r}, ${_g}, ${_b}, ${transparency});`;
              if (_r < 1) _r = 0;
              if (_g < 1) _g = 0;
              if (_b <= 2) _b = 0;
              if (_c != 0 && Math.random >= 0.5) _c = _c - 1;
            } else {
              if (transparency < 10) transparency = (transparency + 1) * _c;
              if (_c > 1.5) _c = _c / 2;
              _c = _c - 0.1;
              if (_c < 1) _c = _c + 1;
              transparency = transparency / 1.2;
              _r = _r / _c;
              _g = _g / _c;
              _b = 0;
            }
          }
          if (_r + _g + _b == 0 || transparency < 1 || _d > 500) {
            bHighlightedRunning = false;
            clearInterval(decreaseHighlightingInterval);
          }
        },
        (_r + _g) / (2 * ((_c + 1) * (_b + 2))) - transparency,
      );
    }, 800);
  }
}
