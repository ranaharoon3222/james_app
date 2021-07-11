const menuBtn = document.getElementById("toggle-drawer")
const drawer = document.getElementById('drawer-content')
const drawerClose = document.getElementById('close-drawer')

menuBtn.addEventListener("click", ()=> {
drawer.classList.toggle('translate-x-0')
})
drawerClose.addEventListener("click", ()=> {
    drawer.classList.remove('translate-x-0')
 })