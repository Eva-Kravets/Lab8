let str = "";
for (let i = 1; i <= 8; i++) {
    switch (i % 2) {
        case 0:
            str += "# # # # \n";
            break;
        default:
            str += " # # # #\n";
    }
}
console.log(str);