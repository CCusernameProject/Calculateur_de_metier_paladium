
const Submit = document.getElementById('Submit');
const ActualLVL = document.getElementById('ActualLVL');
const ActualXP = document.getElementById('ActualXP');
const BoostXP = document.getElementById('BoostXP');
const LVLReach = document.getElementById('LVLReach');
const message = document.getElementById('message');
const numberOfBottle = document.getElementById('number');
const calculatorDiv = document.getElementById('calculator1');
const JobsXP = [
    TableauXP = [480,1044,1713,2497,3408,4451,5635,6966,8447,10086,11885,13850,15983,18290,20773,23435,26281,29312,32532,35943,39549,43351,47353,51556,55964,60577,65399,70432,75677,81137,86813,92709,98824,105162,111724,118512,125527,132772,140248,147956,155898,164076,172492,181146,190040,199176,208555,218179,228049,238166,248532,259148,270015,281135,292509,304138,316023,328166,340568,353230,366153,379339,392788,406502,420482,434728,449243,464027,479081,494407,510004,525875,542021,558442,575140,592115,609368,626901,644714,662809,681186,699846,718791,738021,757537,777339,797430,817810,838479,859439,880690,902234,924071,946202,968628,991349,1014368,1037683,1061297,1085210],
];

function errorMessage(Message) {
    message.classList.remove('work_message_activate');
    message.placeholder=Message;
    message.classList.add('error_message_activate');
    calculatorDiv.classList.add('error');
}

Submit.addEventListener("click", () => {
    const valueActualLVL = parseInt(ActualLVL.value);
    const valueLVLReach = parseInt(LVLReach.value);
    const valueBoostXP = parseFloat(BoostXP.value);
    const valueActual = parseInt(ActualXP.value);
    const XPperBottle = 1000 * (valueBoostXP / 100 + 1);
    
    if (valueActualLVL !== null && valueActualLVL >= 1 && valueActualLVL <= 99) {
        if (valueActual !== null && valueActual >= 0 && valueActual < TableauXP[valueActualLVL]) {
            if (valueBoostXP !== null && valueBoostXP >= 0 && valueBoostXP <= 18) {
                if (valueLVLReach !== null && valueLVLReach >= 0 && valueLVLReach <= 100) {
                    calculatorDiv.classList.remove('error');
                    message.classList.remove('error_message_activate');
                    message.placeholder = "Calcul effectué !";
                    message.classList.add('work_message_activate');
                    let totalXP = 0;
                    for (let i = valueActualLVL; i <= valueLVLReach; i++) {
                        totalXP += TableauXP[i - 1];
                    }
                    console.log("Total XP:", totalXP);
                    const FinalValue = Math.ceil((totalXP - valueActual) / XPperBottle);
                    numberOfBottle.innerHTML = FinalValue;
                } else {
                    errorMessage("Niveau souhaité non valable")
                    console.log("ERROR 04");
                }
            } else {
                errorMessage("Boost d'xp non valable")
                console.log("ERROR 03");
            }
        } else {
            errorMessage("XP actuel non valable")
            console.log("ERROR 02")
        }
    } else {
        errorMessage("Niveau actuel non valable")
        console.log("ERROR 01")
    }
});



