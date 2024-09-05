document.addEventListener('DOMContentLoaded', () => {
    const area = document.getElementById("el_div");
    const boton = document.getElementById("boton")

    function saludar() {
        alert("Hola! Soy el div");
    }

    area.addEventListener('click', saludar);
    boton.addEventListener('click',function(event){
        event.stopPropagation()
    })

})