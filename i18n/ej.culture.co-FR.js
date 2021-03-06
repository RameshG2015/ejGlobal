ej.addCulture( "co-FR", {
	name: "co-FR",
	englishName: "Corsican (France)",
	nativeName: "Corsu (Francia)",
	language: "co",
	numberFormat: {
		pattern: ['-n'],
		",": " ",
		".": ",",
		"NaN": "Micca numericu",
		groupSizes: [3],
		negativeInfinity: "-Infinitu",
		positiveInfinity: "+Infinitu",
		percent: {
			pattern: ['-n%','n%'],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			'/': '/',
			':': ':',
			firstDay: 1,
			days: {
				names: ["dumenica","luni","marti","mercuri","ghjovi","venneri","sabbatu"],
				namesAbbr: ["dum.","lun.","mar.","mer.","ghj.","ven.","sab."],
				namesShort: ["du","lu","ma","me","gh","ve","sa"]
			},
			months: {
				names: ["ghjennaghju","ferraghju","marzu","aprile","maghju","ghjunghju","lugliu","aostu","settembre","ottobre","nuvembre","dicembre",""],
				namesAbbr: ["ghje","ferr","marz","apri","magh","ghju","lugl","aost","sett","otto","nuve","dice",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"dopu à Cristu","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "H:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy H:mm:ss",
				M: "d' di 'MMMM",
				Y: "MMMM' di u 'yyyy"
			}
		}
	}
});