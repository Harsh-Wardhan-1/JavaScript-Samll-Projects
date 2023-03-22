

function submit() {
    let inputEl = document.getElementById("num-to-con").value

    if (inputEl.length == 0) {
        inputEl = 0;
    }

    let mtf = inputEl * 3.28084;
    let ftm = inputEl * 0.3048;
    let ltg = inputEl * 0.264172;
    let gtl = inputEl * 3.78541;
    let ktp = inputEl * 2.20462;
    let ptk = inputEl * 0.453592;



    let l = inputEl + " meters = " + mtf.toFixed(3) + " feets | " + inputEl + " feets = " + ftm.toFixed(3) + " meters"
    let v = inputEl + " liters = " + ltg.toFixed(3) + " gallons | " + inputEl + " gallons = " + gtl.toFixed(3) + " liters"
    let m = inputEl + " kilograms = " + ktp.toFixed(3) + " pounds | " + inputEl + " pounds = " + ptk.toFixed(3) + " kilograms"

    document.getElementById("bot1").textContent = l;
    document.getElementById("bot2").textContent = v;
    document.getElementById("bot3").textContent = m;
}