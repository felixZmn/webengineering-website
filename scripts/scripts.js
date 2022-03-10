document.getElementById("nav-trigger").addEventListener("click", () => {
    document.getElementById("extended-nav").classList.remove("d-none");
});

document.getElementById("nav-close").addEventListener("click", () => {
    document.getElementById("extended-nav").classList.add("d-none");
});

function validateApplicationForm() {
    const regexZip = new RegExp("^[0-9]{5}$");
    const regexPhoneNumber = new RegExp("^(\\+\\d* )?\\d+\\s?\\d*$");
    const regexMail = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');

    const zipCode = document.getElementById("zip").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (!regexZip.test(zipCode)) {
        printValidationFailureMessage("PLZ");
        return false;
    }
    if (!(regexPhoneNumber.test(phoneNumber) || regexMail.test(email))) {
        printValidationFailureMessage("Telefonnummer oder Email");
        return false;
    }
    return true;
}

function printValidationFailureMessage(element) {
    alert("Formulareingaben im Feld " + element + " sind Fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
}

function imagefun(b) {
    let Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("https://www.autozeitung.de/assets/styles/article_image/public/gallery_images/2016/03/peel-p50-16.jpg?itok=AezY5hVn")) {
        Image_Id.src = "https://imgr1.auto-motor-und-sport.de/Mercedes-AMG-C-63-Kurbelgehaeuse-AMG-4-0-Liter-V8-Biturbomotor-Motorbaureihe-M177-169FullWidth-91a24ec9-1629285.jpg";
    } else {
        if(b === 1){
            Image_Id.src = "https://p6.focus.de/img/fotos/id_24354358/ampnet-photo-20211022-203564.jpg?im=Resize%3D%28800%2C863%29&impolicy=perceptual&quality=medium&hash=67615a834fe3808206102c755ca3c797d3ef07ea8ea3e439aee571e0021c8892";
            document.getElementById("p1").innerHTML = "Ein Motor [ˈmoːtoːr] (auch [moˈtoːr]; lateinisch mōtor ‚Beweger‘) ist eine Kraftmaschine, die mechanische Arbeit verrichtet, indem sie eine Energieform, z. B. thermische, chemische, hydraulische, pneumatische oder elektrische Energie, in Bewegungsenergie umwandelt.";
        } else{
            if (b === 2) {
                Image_Id.src = "https://blog.reifen-vor-ort.de/hs-fs/hubfs/RVO%20Blog/Artikel-Bilder/Felgen/rvo-blog_welche%20felge%20fu%CC%88r%20mein%20auto_viele%20felgen.jpg?width=500&name=rvo-blog_welche%20felge%20fu%CC%88r%20mein%20auto_viele%20felgen.jpg";
                document.getElementById("p1").innerHTML = "Als Autofelge bezeichnet man umgangssprachlich das Rad eines Autos ohne den Autoreifen. Im eigentlichen Sinne bezeichnet die Felge nur den äußeren Ring, der durch die Radscheibe oder den Radkranz mit dem Radflansch verbunden ist. Räder für Pkw sind nicht zerstörungsfrei zerlegbar, Felge und Radscheibe sind miteinander verschweißt, vernietet oder in einem Stück gegossen, wodurch sich eine fachsprachlich nicht vollständig zutreffende Synonymität von Rad und Felge ergibt (was ähnlich auch für Reifen und Rad gilt). Lediglich für Nutzfahrzeuge wie Spezial-Lkw, Trecker (Schlepper) und einige Sonderanwendungen (Motorsport) sind aus mehreren Teilen zusammenmontierte Räder üblich.";
            } else {
                Image_Id.src = "https://i.ebayimg.com/00/s/NTYwWDEwMjQ=/z/a6wAAOSw~7JcoGhg/$_59.JPG";
                document.getElementById("p1").innerHTML = "Mit der Entwicklung der Modelle stiegen Abmessungen und Leergewicht stetig. Von VW Golf I bis VW Golf VIII ergeben sich folgende Zunahmen: Länge 94 cm, Breite 18 cm, Höhe 11 cm, Radstand 28 cm und Leergewicht 880 kg (entspricht einer Verdoppelung).";
            }
        }
    }
}