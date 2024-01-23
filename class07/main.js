var city = prompt("enter your city");

switch (city) {
    case "karachi":

        document.write("the wheather of karachi is 16 degree celcius")
        break;

    case "lahore":

        document.write("the wheather of lahore is 12 degree celcius")
        break;
    case "Islamabad":

        document.write("the wheather of Islamabad is 10 degree celcius")
        break;
    case "multan":

        document.write("the wheather of multan is 19 degree celcius")
        break;

    default: document.write("city not found")
        break;
}