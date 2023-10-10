
const maxTries = 6;
let tries = 1;

let testButton = document.querySelector("#test")
testButton.addEventListener("click", addBodyParts);

function addBodyParts() {
    if (tries <= maxTries) {

        let addPart;
        switch (tries) {
            case 1:
                     addPart = document.querySelector("svg > #ground");
                     addPart.style.visibility ="visible";
                
                break;
            case 2:
                addPart = document.querySelector("svg > #scaffold");
                     addPart.style.visibility ="visible";
                break;
            case 3:
                addPart = document.querySelector("svg > #head");
                addPart.style.visibility ="visible";
                break;
            case 4:
                addPart = document.querySelector("svg > #body");
                addPart.style.visibility ="visible";
                break;
            case 5:
                addPart = document.querySelector("svg > #arms");
                     addPart.style.visibility ="visible";
                break;
            case 6:
                addPart = document.querySelector("svg > #legs");
                addPart.style.visibility ="visible";
                break;
            default:
                console.log("fail");

        }

    }
    tries += 1;

}

