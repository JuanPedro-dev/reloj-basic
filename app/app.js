const RELOJ = () =>{const date = new Date
    const dateDay = {
        1: "Lun",
        2: "Mar",
        3: "Mier",
        4: "Jue",
        5: "Vier",
        6: "Sab",
        0: "Dom"
    };
    const dateHour = `${dateDay[date.getDay()]} || ${date.getHours()} : ${date.getMinutes()} :  ${date.getSeconds()}`
    document.getElementById("show__hour").innerHTML = dateHour;
    setTimeout(RELOJ, 200);
}

window.addEventListener("load", RELOJ);