ej.addCulture( "cs-CZ", {
	name: "cs-CZ",
	englishName: "Czech (Czech Republic)",
	nativeName: "čeština (Česká republika)",
	language: "cs",
	numberFormat: {
		pattern: ['-n'],
		",": " ",
		".": ",",
		"NaN": "Není číslo",
		groupSizes: [3],
		negativeInfinity: "-nekonečno",
		positiveInfinity: "+nekonečno",
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
			symbol: "Kč"
		}
	},
	calendars: {
		standard: {
			"/": ". ",
			firstDay: 1,
			days: {
				names: ["neděle","pondělí","úterý","středa","čtvrtek","pátek","sobota"],
				namesAbbr: ["ne","po","út","st","čt","pá","so"],
				namesShort: ["ne","po","út","st","čt","pá","so"]
			},
			months: {
				names: ["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec",""],
				namesAbbr: ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]
			},
			monthsGenitive: {
				names: ["ledna","února","března","dubna","května","června","července","srpna","září","října","listopadu","prosince",""],
				namesAbbr: ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII",""]
			},
			AM: ["dop.","dop.","DOP."],
			PM: ["odp.","odp.","ODP."],
			eras: [{"name":"n. l.","start":null,"offset":0}],
			patterns: {
				d: "d. M. yyyy",
				D: "d. MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "d. MMMM yyyy H:mm",
				F: "d. MMMM yyyy H:mm:ss",
				M: "d. MMMM"
			}
		}
	}
});