function createTag(tagType, className) {
    let tag = document.createElement(tagType)
    tag.className = className
    // console.log('createtag func')
    return tag
}

let container = document.getElementById('container')
for (let index = 0; index < 16; index++) {
    let tag = createTag('div', 'square-div-h')
    container.appendChild(tag)
    for (let i = 0; i < 16; i++) {
        let tag2 = createTag('div', 'square-div-v')
        tag.appendChild(tag2)
    }
}

let thisElem = document.getElementById('container')
thisElem.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "green"
    document.getElementById('container').style.backgroundColor=""
})


function reset() {
    document.querySelectorAll('.square-div-v').forEach((elem) => {
        console.log('test')
        elem.style.backgroundColor = "blueviolet"
    })
}