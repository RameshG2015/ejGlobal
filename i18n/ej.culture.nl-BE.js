ej.addCulture( "nl-BE", {
	name: "nl-BE",
	englishName: "Dutch (Belgium)",
	nativeName: "Nederlands (België)",
	language: "nl",
	numberFormat: {
		pattern: ["-n"],
		",": " ",
		".": ",",
		groupSizes: [3],
		"NaN": "NaN (geen getal)",
		negativeInfinity: "-∞",
		positiveInfinity: "∞",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["$ -n","$ n"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],
				namesAbbr: ["zo","ma","di","wo","do","vr","za"],
				namesShort: ["zo","ma","di","wo","do","vr","za"]
			},
			months: {
				names: ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december",""],
				namesAbbr: ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd d MMMM yyyy H:mm",
				F: "dddd d MMMM yyyy H:mm:ss",
				M: "d MMMM"
			}
		}
	}
});