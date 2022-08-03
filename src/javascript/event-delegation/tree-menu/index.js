// Requirements:

// Only one event handler(use delegation)
// A click outside the node title(on an empty space) should not do anything.

// Solutions

// 1. Create span to wrapp text title
for (let li of document.querySelector('#tree').querySelectorAll('li')) {
    const span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

// 2. create one event handler
tree.onclick = function (event) {
    if (event.target.tagName !== 'SPAN') return;

    // traverse to closest child ul container
    const childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return;
    childrenContainer.hidden = !childrenContainer.hidden;
}