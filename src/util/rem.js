(function(doc, win) {
    //100px => 1rem
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            clientWidth = clientWidth > 414 ? 414 : clientWidth;
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
  })(document, window);