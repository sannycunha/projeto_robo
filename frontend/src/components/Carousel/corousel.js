document.querySelector("#items")
    ?.addEventListener("whee", event => {
        if (event.deltaY > 0) {
            console.target.scrollBy(300, 0)
        }
        else {
            console.target.scrollBy(-300, 0)
        }
    })