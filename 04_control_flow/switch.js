// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//Switch can be use to compare number and string
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
//incase if we dont write break then 
//it will execute the rest of the code execpt default one 