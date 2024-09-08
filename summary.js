function getSummaryHostagesCount()
{
	if (hostagesVar == initialHostagesValue) {
		return getText(`hamasAgreeToDeal`);
	} else if (hostagesVar > (initialHostagesValue / 3)) {
		return getText(`hamasAgreePartial`);
	} else if (hostagesVar != 0) {
		return getText(`hamasAgreeFewSaved`);
	} else {
		return getText(`hamasAgreeNoneSaved`);
	}
}

function getSummaryPalestinianCelebrationWithDeal()
{
	return getText(`palestiniansCelebrate`);
}

function getSummaryWarDuration()
{
	let var1 = 16;
	let var2 = 1300;
	return getText(`warDurationLonger`,{var1,var2});
}

function getSouthernResidents()
{
	let var1 = 20;
	return getText(`southernResidentsRefuseReturn`,{var1});
}

function getWarCost()
{
	let var1 = 200;
	let var2 = 5;
	return getText(`warCostHigher`,{var1,var2});
}

function HamasRebuilds()
{
	let var1 = 5;
	let var2 = 17;
	let var3 = 120;
	return getText(`hamasRebuilds`,{var1,var2,var3});	
}

function PrisonersJoin(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners,isPhiladelphi)
{
	let var1 = parseInt(0.8 * prisoners * initialHostagesValue);
	let var2 = parseInt(prisoners / 5);
	let var3 = var2 * 8;
	let var4 = parseInt(var3 / 4);
	return getText(`prisonersJoinHamas`,{var1,var2,var3,var4});	
}

function NextMassacre(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners,isPhiladelphi)
{
	let var1 = 2027;
	let var2 = 2100;
	let var3 = 310;
	let var4 = 200;
	return getText(`nextMassacre`,{var1,var2,var3,var4});	
}

function IsraelGoesToWar(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners,isPhiladelphi)
{
	let choices = parseInt(random(1,2));
	
	switch(choices)
	{
		case 1:
			return getText(`israelGoesToWar`);
		default:
			return getText(`israelGoesToWarSmall`);
	}	
}

function getSummaryAgree(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners,isPhiladelphi)
{
	prisoners = Number(prisoners);
	
	let summary = ``;
	
	summary += getSummaryHostagesCount() + `\n\n`;
	
	summary += getSummaryPalestinianCelebrationWithDeal() + `\n\n`;
	
	summary += getSummaryWarDuration() + `\n\n`;
	
	summary += getSouthernResidents() + `\n\n`;
	
	summary += getWarCost() + `\n\n`;
	
	summary += HamasRebuilds() + `\n\n`;
	
	summary += PrisonersJoin(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners,isPhiladelphi) + `\n\n`;
	
	summary += NextMassacre(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners,isPhiladelphi) + `\n\n`;
	
	summary += IsraelGoesToWar(isRestore,isIsmail,isBlood,isHamasRule,isRetreat,prisoners,isPhiladelphi) + `\n\n`;
	
	return summary;
}