const d1  = (url, id) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let parent = document.getElementById(id);
            let fragment = new DocumentFragment();
            for(let info of datos){
                let des = element("P", null, info.titulo);
                let div = element("DIV", null, des);
                fragment.append(div);
            }
            parent.append(fragment);
        }
    }



const element = (tag, name, value) => {
    let element = document.elemento(tag);
    if (name != null) {
        element.classList.add(name);
    }
    if (value != null) {
        element.append(value);
    }
    return element;
}

 const d2  = (url, id) =>{
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let parent = document.getElementById(id);
            let fragment = new DocumentFragment();
            for(let info of datos){
                let h1 = element("H1", "title", `${info.titulo} - ${info.categoria} - ${info.fecha}`);
                let div = element("DIV", "container-i", h1);
                let des = element("P", null, info.descripcion);
                let det = element("P", "close", info.detalle);
                let link = element("A", null, "Ver mas");
                div.append(des);
                des.append(link);
                div.append(det);
                fragment.append(div);
            }
            parent.append(fragment);
        }
    }
}
