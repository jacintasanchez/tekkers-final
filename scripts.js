const datos = [
    {
        picsum: "https://picsum.photos/id/1020/900/600",
        title: "Primera",
        text: "Este es el primer párrafo",
    },
    {
        picsum: "https://picsum.photos/id/157/900/600",
        title: "Segunda",
        text: "Este es el segundo párrafo",
    },
    {
        picsum: "https://picsum.photos/id/20/900/600",
        title: "Tercera",
        text: "Este es el tercer párrafo",
    },
    {
        picsum: "https://picsum.photos/id/26/900/600",
        title: "Cuarta",
        text: "Este es el cuarto párrafo",
    },
    {
        picsum: "https://picsum.photos/id/178/900/600",
        title: "Quinta",
        text: "Este es el quinto párrafo",
    },
];

datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ');"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ');"></div><div class="col-md-6 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div></div>";
    }
});



async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=4");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);

    resultados.forEach((p) => {
        document.getElementById("personas").innerHTML +=
            '<div class="col-6 col-md-3"><div class="testimonial-item mx-auto mb-5 mb-lg-0"><img class="img-fluid rounded-circle mb-3" src="' +
            p.picture.large +
            '" alt="..." /><h5>' +
            p.name.first +
            " " +
            p.name.last +
            '</h5><p class="font-weight-light mb-0">' +
            p.location.city +
            ", " +
            p.location.country +
            "<br><i class='bi bi-envelope-fill fs-2'></i></p></div></div>";
    });
}
users().catch((error) => console.error(error));