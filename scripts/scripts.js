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
        if (b === 1) {
            Image_Id.src = "https://www.autozeitung.de/assets/styles/article_image/public/field/image/audi-fuenfzylinder.jpg?itok=eXZ48xtb";
            document.getElementById("p1").innerHTML = "Der Fünfzylinder ist ein starker Charakter mit unverwechselbarer Stimmlage. <br> Sein 2,1-Liter-Reihen-Fünfzylinder mit Turboaufladung leistet 265 kW (360 PS) bei 6.500 Umdrehungen pro Minute und entwickelt 450 Newtonmeter Drehmoment bei 4.000 Touren <br>Kraftstoffverbrauch kombiniert in l/100 km: 8,4 - 8,2 <br> CO2-Emission kombiniert in g/km: 192 - 187";
        } else {
            if (b === 2) {
                Image_Id.src = "https://thumbs.gfycat.com/AchingDeterminedHoiho.webp";
                document.getElementById("p1").innerHTML = "Beim permanenten Allradantrieb quattro hat Audi seinen Vorsprung über mehr als drei Jahrzehnte hinweg ausgebaut. Jetzt folgt der nächste große Schritt – quattro in Verbindung mit ultra-Technologie.";
            } else {
                Image_Id.src = "https://cdn.audi.at/media/Theme_Banners_Banner_Image_Component/55162-banner-317046-image/dh-1920-918e09/e68cbf40/1627886518/1920x1920-a4-2020-1974-1-oe.jpg";
                document.getElementById("p1").innerHTML = "Leergewicht in kg*: 1560 <br> Zul. Gesamtgewicht in kg: 2085 <br> Zul. Dachlast/Stützlast in kg: 90/80 <br> Zul. Anhängelast ungebremst in kg: 750 <br> Gepäckraumvolumen in l: 495 <br> Tankinhalt in l (ca.): 54";
                
            }
        }
    }
}

function imagefun2(b) {
    let Image_Id = document.getElementById('getImage2');
    if (Image_Id.src.match("https://www.autozeitung.de/assets/styles/article_image/public/gallery_images/2016/03/peel-p50-16.jpg?itok=AezY5hVn")) {
        Image_Id.src = "https://imgr1.auto-motor-und-sport.de/Mercedes-AMG-C-63-Kurbelgehaeuse-AMG-4-0-Liter-V8-Biturbomotor-Motorbaureihe-M177-169FullWidth-91a24ec9-1629285.jpg";
    } else {
        if (b === 1) {
            Image_Id.src = "https://cdn.audi.at/media/FullWidthImage_Component/55164-513420/dh-900-33d43f/4e7d29e1/1627886514/audi-a4-avant-abmessungen-seite.jpg";
        } else {
            if (b === 2) {
                Image_Id.src = "https://cdn.audi.at/media/FullWidthImage_Component/55165-513425/dh-900-33d43f/3cb70519/1627888970/audi-a4-avant-abmessungen-oben.jpg";
            } else {
                Image_Id.src = "https://cdn.audi.at/media/FullWidthImage_Component/55166-513429/dh-900-33d43f/abe5478e/1627888973/audi-a4-avant-abmessungen-vorne-hinten.jpg";                
            }
        }
    }
}


function tonktonk(to) {
    let Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjundroo.blob.core.windows.net%2Fsimplerockets%2Ffiles%2F2021%2F8%2F23%2Fu7sf0O%2FUserView-2.jpg&f=1&nofb=1")) {
        Image_Id.src = "https://jundroo.blob.core.windows.net/simplerockets/files/2021/8/23/u7sf0O/OrthoView-0.jpg";
    } else {
        if (to === 1) {
            Image_Id.src = "https://jundroo.blob.core.windows.net/simplerockets/files/2021/8/23/u7sf0O/OrthoView-0.jpg";
            document.getElementById("p1").innerHTML = "Eine 57 mm Maxim-Nordenfelt Panzerkanone, um im Notfall nervige Autofahrer endlich einfach verschwinden zu lassen und die Fahrt in Ruhe und ohne ständige belästigung fortzuführen";
        } else {
            if (to === 2) {
                Image_Id.src = "https://jundroo.blob.core.windows.net/simplerockets/files/2021/8/23/u7sf0O/OrthoView-1.jpg";
                document.getElementById("p1").innerHTML = "Stabile Fahrketten, um auch in den unebensten Off-Road situationen immer die Kontrolle zu behalten. Trotz der Ketten kann der Tonk bis zu 50 km/h fahren und ist somit perfekt für jeden geschwindichkeits-liebenden offroader geeignet.";
            } else {
                Image_Id.src = "https://jundroo.blob.core.windows.net/simplerockets/files/2021/8/23/u7sf0O/OrthoView-2.jpg";
                document.getElementById("p1").innerHTML = "Mit einem Starken 1,500 PS MTU MB 873 Ka-501 Motor kann sich der Tonk in allerhand verschiedener Situationen nützlich machen, wie zum Beispiel zum abschleppen von Autos oder sogar bei landwirtschaftlichen Arbeiten.";
            }
        }
    }
}