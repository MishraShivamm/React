function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTMl = reactElement.children
    domElement.setAttirbute('href',reactElement.props.href)
    domElement.setAttirbute('target',reactElement.props.target)


    container.appendChild(domElement)
}

const reactElement= {
    type :"a",
    props :{
        href:"https://google.com",
        target: "_blank"
    },
    children:"CLick me to visti Goggle"
}

const container = document.getElementById('root')

customRender(reactElement,container)