const translations = {
    he: {
		hamasWaitsProposal: "חמאס ממתין להצעה",
		hamasDoesNotAccept: "חמאס לא מסכים להצעה. החטופים סובלים ולחץ מופעל עליך",
		hamasWantsRestoration: "חמאס לא מסכים להצעה. הוא מעוניין בתוכנית סדורה לשיקום הרצועה",
		hamasWantsFullRetreat: "חמאס לא מסכים להצעה. הוא מעוניין בנסיגה מלאה",
		hamasWantsPhiladelphi: "חמאס לא מסכים להצעה. הוא מעוניין בציר פילדלפי",
		hamasWantsAtLeastPrisoners: "חמאס לא מסכים להצעה. הוא מעוניין בלפחות {{var1}} אסירים לכל חטוף",
		hamasWants20PercentsOfPrisonersWithBlood: "חמאס לא מסכים להצעה. הוא מעוניין בלפחות 20 אחוז מהאסירים עם דם על הידיים",
		hamasWantsToContinueToRule: "חמאס לא מסכים להצעה. הוא רוצה להמשיך לשלוט ברצועה",
		
        minimumRequirement: "החמאס דורש כבסיס לכניסה למשא ומתן את שיקום הרצועה ונסיגה מלאה מעזה",
		numberHostagesTitle: "מספר החטופים בעזה: {{var1}}\nהציעו הצעה לשחרורם והצילו אותם.",
		numberPrisonersForKidnaped: "כמות אסירים לכל חטוף (סך הכל {{var1}})",
		offerNumber: "שלח הצעה {{var1}}",
        // Hamas agrees to deal variations
        hamasAgreeToDeal: "חמאס מסכים לעסקה, כל החטופים ניצלו. המשפחות מודות, ומיליוני ישראלים חוגגים.",
        hamasAgreePartial: "חמאס מסכים לעסקה, אך רק {{var1}}% מהחטופים ניצלו. המשפחות מודות, אך רבות נותרו באבל.",
        hamasAgreeFewSaved: "חמאס מסכים לעסקה, אך רק {{var1}} חטופים ניצלו מתוך {{var2}}. המשפחות מאוכזבות.",
        hamasAgreeNoneSaved: "חמאס מסכים לעסקה, אך אף אחד מהחטופים לא ניצל. המשפחות בזעם ובאבל כבד.",
        
        // Palestinians celebrate variations
        palestiniansCelebrate: "הפלסטינים חוגגים, אלפים מצטרפים לחמאס שמקבל תמיכה ותקציבים גדולים אף יותר.",
        palestiniansCelebrateSmall: "הפלסטינים חוגגים בהיקף קטן, רק {{var1}}% מצטרפים לחמאס.",
        palestiniansCelebrateNone: "הפלסטינים מאוכזבים, אין הצטרפות משמעותית לחמאס.",
        
        // War duration variations
        warDuration: "המלחמה נמשכה {{var1}} חודשים, {{var2}} חיילים נהרגו ועשרות אלפים פונו.",
        warDurationLonger: "המלחמה נמשכה {{var1}} חודשים קשים, וגרמה למותם של {{var2}} חיילים ולפינוי של עשרות אלפי תושבים.",
        warDurationShorter: "המלחמה הסתיימה לאחר {{var1}} חודשים, עם {{var2}} חיילים הרוגים.",
        
        // Southern residents refuse to return variations
        southernResidentsRefuseReturn: "{{var1}}% מתושבי הדרום מסרבים לחזור, והשבים חיים תחת איום טילים וטרור.",
        southernResidentsReturnSmall: "רק {{var1}}% מתושבי הדרום חוזרים לבתיהם, והשאר חיים בפחד.",
        southernResidentsReturnAll: "כל תושבי הדרום חזרו לבתיהם, אך הם חיים תחת איום מתמיד.",
        
        // War cost variations
        warCost: "עלות המלחמה: {{var1}} מיליארד דולר, מיסים עולים, ויוקר המחיה ממשיך לעלות.",
        warCostHigher: "עלות המלחמה הגיעה ל-{{var1}} מיליארד דולר, המיסים עלו ב-{{var2}}% ויוקר המחיה מתגבר.",
        warCostLower: "עלות המלחמה הסתכמה ב-{{var1}} מיליארד דולר בלבד, אך המיסים עדיין עולים.",
        
        // Hamas rebuilds variations
        hamasRebuilds: "תוך {{var1}} שנים חמאס משקם את כוחו ומבצע {{var2}} פעולות טרור שגובות {{var3}} קורבנות.",
        hamasRebuildsPartial: "חמאס משקם רק חלק קטן מכוחו תוך {{var1}} שנים, ומבצע {{var2}} פעולות טרור קטנות.",
        hamasRebuildsNone: "חמאס לא מצליח לשקם את כוחו תוך {{var1}} שנים ולא מבצע פעולות טרור משמעותיות.",
        
        // Prisoners join Hamas variations
        prisonersJoinHamas: "{{var1}} אסירים מצטרפים לחמאס ולוקחים חלק ב-{{var2}} פיגועים בהם נהרגים {{var3}} אזרחים, כולל {{var4}} ילדים.",
        prisonersJoinHamasPartial: "רק {{var1}} אסירים מצטרפים לחמאס ולוקחים חלק בפיגועים קטנים.",
        prisonersJoinHamasNone: "אף אחד מהאסירים לא מצטרף לחמאס ולא משתתף בפיגועים.",
        
        // Next massacre variations
        nextMassacre: "ב-{{var1}} חמאס מבצע טבח נוסף: {{var2}} נהרגים ו-{{var3}} נחטפים, ביניהם {{var4}} ילדים, נשים ומבוגרים.",
        nextMassacreSmall: "ב-{{var1}} חמאס מבצע מתקפה קטנה יותר: {{var2}} נהרגים ו-{{var3}} נחטפים.",
        nextMassacreNone: "ב-{{var1}} חמאס לא מצליח לבצע טבח נוסף, והנפגעים מועטים.",
        
        // Israel goes to war variations
        israelGoesToWar: "ישראל יוצאת למלחמה נוספת בעקבות הטבח.",
        israelGoesToWarSmall: "ישראל מגיבה באופן מוגבל בעקבות המתקפה.",
        israelGoesToWarNone: "ישראל בוחרת לא לצאת למלחמה בעקבות האירועים ומסתפקת בתגובה דיפלומטית.",
    }
};
