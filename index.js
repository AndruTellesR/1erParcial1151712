const crearElemento = (tag, name, value) => {
    let element = document.createElement(tag);
    if (name != null) {
        element.classList.add(name);
    }
    if (value != null) {
        element.append(value);
    }
    return element;
}
 
 const index  = (url, id) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let parent = document.getElementById(id);
            let fragment = new DocumentFragment();
            for(let info of datos){
                let h1 = crearElemento("H1", " title", `${info.titulo} - ${info.categoria} - ${info.fecha}`);
                let div = crearElemento("DIV", " container-index", h1);
                let des = crearElemento("P", null, info.descripcion);
                let link = crearElemento("A", null, "Ver mas");
                div.append(des);
                div.append(link);
                fragment.append(div);
            }
            parent.append(fragment);
        }
    }
}

const indexDeport  = (url, id) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let parent = document.getElementById(id);
            let fragment = new DocumentFragment();
            
            parent.append(fragment);
        }
    }
}
