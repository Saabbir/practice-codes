/*
** ES2015 template literals and function default parameters.
*/

function fee(name = "John", message, fees) {
    let institute = "DIIT";
    const serviceCharge = 10.45;
    return `
Hi ${name},
You have a message from Principal
${message}
Your exam fees is $${fees}
Grand Total : $${fees + serviceCharge}
Thanks by 
${institute}
`;
}

const message = fee("Tuhin Bepari", "Your report is great", 78);
console.log(message);