// There’s a list of messages with removal buttons [x]. Make the buttons work.

// write code here...
const container$ = document.querySelector('div#container');

container$.addEventListener('click', function (event) {
    if (event.target.className !== 'remove-button') return;

    const pane$ = event.target.closest('div.pane');
    pane$.remove();
})