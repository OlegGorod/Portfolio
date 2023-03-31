window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    function recursy(node) {
        node.childNodes.forEach(elem => {
            if (elem.nodeName.match(/^H\d/)) {
                console.log(elem);
                return;
            } else {
                recursy(elem);
            }
   
        });
    }
    recursy(body);
});