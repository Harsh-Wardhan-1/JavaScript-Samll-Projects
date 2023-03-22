
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '.']
let l = array.length

function generateBtn() {
    let pass = ""
    let passwords = []
    let passwordLength = document.getElementById("number").value
    if (passwordLength.length === 0) {
        passwordLength = Math.floor(Math.random() * 10) + 8
    }
    for (let j = 0; j < 4; j++) {
        let pw = ""
        for (let i = 0; i <= passwordLength; i++) {
            let x = Math.floor(Math.random() * l)
            pw += array[x]
        }
        passwords.push(pw)
    }

    document.getElementById("pass1").value = passwords[0]
    document.getElementById("pass2").value = passwords[1]
    document.getElementById("pass3").value = passwords[2]
    document.getElementById("pass4").value = passwords[3]

}

function copy1() {
    let copyText = document.getElementById("pass1");

    copyText.select();
    copyText.setSelectionRange(0, 99999); //for mobile
    navigator.clipboard.writeText(copyText.value);

    //alert("Copied the text: " + copyText.value); // alerting the user

}
function copy2() {
    let copyText = document.getElementById("pass2");

    copyText.select();
    copyText.setSelectionRange(0, 99999); //for mobile
    navigator.clipboard.writeText(copyText.value);

    //alert("Copied the text: " + copyText.value); // alerting the user

}
function copy3() {
    let copyText = document.getElementById("pass3");

    copyText.select();
    copyText.setSelectionRange(0, 99999); //for mobile
    navigator.clipboard.writeText(copyText.value);

    //alert("Copied the text: " + copyText.value); // alerting the user

}
function copy4() {
    let copyText = document.getElementById("pass4");

    copyText.select();
    copyText.setSelectionRange(0, 99999); //for mobile
    navigator.clipboard.writeText(copyText.value);

    //alert("Copied the text: " + copyText.value); // alerting the user

}



//console.log(passwordLength)