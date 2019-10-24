let menu,
    choice,
    counter;

menu = prompt("*** TEMPERATURE CONVERTER ***" +
                       "\n 1- Simple conversion" +
                       "\n 2- Multiple conversions");

choice = prompt("Enter which temperature scale you want to convert:" +
    "\nc - Celsius / f - Fahrenheit");

switch (menu) {
    case "1":
        let temp = prompt("Enter the value to convert:");
        alert("The value converted is " + temperatureConversion(+temp));
        break;
    case "2":
        let temps = prompt("Enter with the value to convert separated by commas: ");
        listT = temps.split(",");
        listT = listT.map((el) => {
            let converted = temperatureConversion(el);
            if (choice === "c" && converted === 0) {
                counter++;
            } else if (choice === "f" && converted === 32) {
                counter++;
            }
        });
        alert("Converted temperatures are: " + listT +
              "\n There are " + counter + " under 0ºC or 32ºF.");
        break;
    default:
        alert("Invalid Option.");
        break;
}

function temperatureConversion(t) {
    if (choice === "c"){
        return (t * 1.8) + 32;
    } else if (choice === "f"){
        return (t - 32) / 1.8;
    }
}