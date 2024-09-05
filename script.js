const initialHostagesValue = 97;
let hostagesVar = initialHostagesValue;
const defaultLanguage = "he";
let lang = defaultLanguage;
let offerNumber = 1;


function getText(variable, replacements = {}) {
    let text = translations[lang][variable] || translations[defaultLanguage][variable] || `Missing translation for ${variable}`;
    
    // Replace placeholders in the format {{placeholder}}
    for (const key in replacements) {
        text = text.replace(`{{${key}}}`, replacements[key]);
    }
    
    return text;
}

function GetPrisonersPerKidnaped(val)
{
	val = Number(val);

	switch(val)
	{
		case 0:
		out = 0;
		break;
		case 1:
		out = 1;
		break;
		case 2:
		out = 2;
		break;
		case 3:
		out = 3;
		break;
		case 4:
		out = 5;
		break;
		case 5:
		out = 8;
		break;
		case 6:
		out = 10;
		break;
		case 7:
		out = 20;
		break;
		case 8:
		out = 30;
		break;
		case 9:
		out = 40;
		break;
		case 10:
		out = 50;
		break;
	}
	
	return Number(out);
}

function updatePrisonersSliderTitle(val)
{
	let var1 = Number(val);
	document.getElementById("sliderPrisonersLabel").innerText = getText(`numberPrisonersForKidnaped`,{var1});	
}

document.getElementById("sliderPrisoners").oninput = function() {
	let val = GetPrisonersPerKidnaped(Number(this.value));
	document.getElementById("sliderPrisonersValue").innerText = val;
	updatePrisonersSliderTitle(val * hostagesVar);
};

function updateOfferNumber()
{
	let var1 = offerNumber;
	document.getElementById("SendButton").innerText = getText(`offerNumber`,{var1});
}

function isAgree(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners)
{
	return (isRestore && isBlood && isHamasRule && isRetreat && (prisoners >= 20) || ((prisoners >= 10) && isIsmail));
}

function getSummary(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners)
{
	let summary = ``;
	
	summary += getText(`hamasAgreeToDeal`);
	
	
	return summary;
}

function send() 
{	
    const prisoners = GetPrisonersPerKidnaped(document.getElementById("sliderPrisoners").value);
    const isRestore = document.getElementById("checkboxRestore").checked;
	const isIsmail = document.getElementById("checkboxIsmail").checked;
	const isBlood = document.getElementById("checkboxBlood").checked;
	const isHamasRule = document.getElementById("checkboxHamasRule").checked;
	const isRetreat = document.getElementById("checkboxRetreat").checked;

    let demands = ``;
	
	if (isAgree(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners)) {
		demands += getSummary();
	} else {
		demands += getText(`minimumRequirement`);
	}

    document.getElementById("suggestionText").innerText = demands;
	
	offerNumber++;
	updateOfferNumber();
}

window.onload = function() {
    initializePage();
};

function initializePage() {
	let var1 = hostagesVar;
	document.getElementById("descriptionText").innerText = getText(`numberHostagesTitle`,{var1});
	document.getElementById("sliderPrisoners").value = 0;
	document.getElementById("sliderPrisonersValue").innerText = 0;
	updatePrisonersSliderTitle(0);
	updateOfferNumber();
	
	document.getElementById("suggestionText").innerText = getText(`minimumRequirement`);
}
