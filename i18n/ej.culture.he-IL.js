ej.addCulture( "he-IL", {
	name: "he-IL",
	englishName: "Hebrew (Israel)",
	nativeName: "עברית (ישראל)",
	language: "he",
	isRTL: true,
	numberFormat: {
		"NaN": "לא מספר",
		negativeInfinity: "אינסוף שלילי",
		positiveInfinity: "אינסוף חיובי",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["$-n","$ n"],
			symbol: "₪"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],
				namesAbbr: ["יום א","יום ב","יום ג","יום ד","יום ה","יום ו","שבת"],
				namesShort: ["א","ב","ג","ד","ה","ו","ש"]
			},
			months: {
				names: ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר",""],
				namesAbbr: ["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ",""]
			},
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd dd MMMM yyyy HH:mm",
				F: "dddd dd MMMM yyyy HH:mm:ss",
				M: "dd MMMM"
			}
		},
		Hebrew: {
			name: "Hebrew",
			"/": " ",
			days: {
				names: ["יום ראשון","יום שני","יום שלישי","יום רביעי","יום חמישי","יום שישי","שבת"],
				namesAbbr: ["א","ב","ג","ד","ה","ו","ש"],
				namesShort: ["א","ב","ג","ד","ה","ו","ש"]
			},
			months: {
				names: ["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"],
				namesAbbr: ["תשרי","חשון","כסלו","טבת","שבט","אדר","אדר ב","ניסן","אייר","סיון","תמוז","אב","אלול"]
			},
			twoDigitYearMax: 5790,
			patterns: {
				d: "dd MMMM yyyy",
				D: "dddd dd MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd dd MMMM yyyy HH:mm",
				F: "dddd dd MMMM yyyy HH:mm:ss",
				M: "dd MMMM"
			}
		}
	}
});
