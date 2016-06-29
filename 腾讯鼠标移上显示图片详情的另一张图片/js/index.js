(function () {
    var memu = document.getElementById('memu');
    var Li = memu.getElementsByTagName('li');
    console.log(memu);
    for (var i=0; i<Li.length; i++) {
        Li[i].index = i;
        Li[i].onmouseover = function () {
            this.getElementsByTagName('img')[1].style.display = 'inline';
            var n;
            if (this.index == Li.length-1) {
                n = -250 * (this.index - 1);
            }else {
                n = -250 * this.index;
            }
            memu.style.left = n + 'px';
            // console.log(-250 * this.index);
        };
        Li[i].onmouseout = function () {
            this.getElementsByTagName('img')[1].style.display = '';
            memu.style.left = 0;
        };
    }
})();