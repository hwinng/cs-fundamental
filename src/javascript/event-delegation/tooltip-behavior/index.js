const body$ = document.querySelector('body')

let tooltipEle = null;

body$.onmouseover = function (event) {
    const target = event.target;

    if (target.tagName !== 'BUTTON') return;

    const tooltipContent = target.dataset.tooltip;
    if (tooltipContent) {

        tooltipEle = document.createElement('div');
        tooltipEle.className = 'tooltip';
        tooltipEle.innerHTML = tooltipContent;
        body$.append(tooltipEle);

        // get position of annotated ele - btn
        let bounding = target.getBoundingClientRect()

        let left = bounding.left + (target.offsetWidth - tooltipEle.offsetWidth) / 2;
        if (left < 0) left = 0; // don't cross the left window edge

        let top = bounding.top - tooltipEle.offsetHeight - 5;
        if (top < 0) { // if crossing the top window edge, show below instead
            top = bounding.top + target.offsetHeight + 5;
        }

        console.log('bounding.left', bounding.left)
        console.log('bounding.top', bounding.top)
        console.log('tooltipEle.offsetWidth', tooltipEle.offsetWidth)
        console.log('tooltipEle.offsetHeight', tooltipEle.offsetHeight)

        tooltipEle.style.left = left + 'px';
        tooltipEle.style.top = top + 'px';
    }


    body$.onmouseout = () => {
        if (tooltipEle) {
            tooltipEle.remove();
            tooltipEle = null;
        }
    }

}