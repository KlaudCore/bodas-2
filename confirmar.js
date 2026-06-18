const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");

btnSi.addEventListener("click",()=>{

    btnSi.classList.add("active");
    btnNo.classList.remove("active");

    localStorage.setItem(
        "asistencia",
        "si"
    );
});

btnNo.addEventListener("click",()=>{

    btnNo.classList.add("active");
    btnSi.classList.remove("active");

    localStorage.setItem(
        "asistencia",
        "no"
    );
});

document
.querySelectorAll(".companion")
.forEach(btn=>{

    btn.addEventListener("click",()=>{

        document
        .querySelectorAll(".companion")
        .forEach(b=>b.classList.remove("selected"));

        btn.classList.add("selected");

        localStorage.setItem(
            "acompanantes",
            btn.textContent.trim()
        );
    });

});