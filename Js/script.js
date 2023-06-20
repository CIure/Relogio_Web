function Time() {
    let timeElementTime = new Date().toLocaleTimeString();
    var element=
    `
    <h2>
        ${timeElementTime}
    </h2>

    `
var horarioElement = document.getElementById("horario")
horarioElement.innerHTML = element;   
}




setInterval(Time,1000)




