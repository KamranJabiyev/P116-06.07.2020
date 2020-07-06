//LESSON
// let dragElm = document.querySelector(".item");
// let dropElm = document.querySelector(".drop-area");

// let id;
// dragElm.ondragstart = function (ev) {
//     ev.dataTransfer.setData("id",this.id);
//     // id=this.id;
// }

// dragElm.ondragend = () => console.log("drag end");

// dragElm.ondrag = () => console.log("drag davam edir");

// dropElm.ondragenter = () => console.log("elm daxil oldu");

// dropElm.ondragleave = () => console.log("elm terk etdim");



// dropElm.ondragover = (ev) => ev.preventDefault();

// dropElm.ondrop= function(ev){
//     let id=ev.dataTransfer.getData("id");
//     let drag_elm=document.getElementById(id);
//     ev.target.append(drag_elm)
//     // console.log(ev.target)
//     // this.append(drag_elm)
//     // drag_elm.style.margin="50px";
//     // drag_elm.style.background="red"
// }

//Task

// let items=document.querySelectorAll(".item");
// let dropElm = document.querySelector(".drop-area");

// items.forEach(item=>{
//     item.ondragstart=function(ev){
//         ev.dataTransfer.setData("id",this.id);
//     }
// })

// dropElm.ondragover = (ev) => ev.preventDefault();

// dropElm.ondrop= function(ev){
//     let id=ev.dataTransfer.getData("id");
//     let drag_elm=document.getElementById(id);
//     // drag_elm.style.margin="50px";

//     // console.log(drag_elm.getAttribute("style"))
//     ev.target.append(drag_elm)
// }

let img = document.getElementById("drag");

img.ondragstart = function (ev) {
    ev.dataTransfer.setData("id", this.id);
}

let boxs = document.querySelectorAll(".box");


boxs.forEach(box => {
    box.ondragover = (ev) => ev.preventDefault();
})

boxs.forEach(box => {
    box.ondrop = function (ev) {
        let id = ev.dataTransfer.getData("id");
        let elm = document.getElementById(id);
        ev.target.append(elm);
    }
})
