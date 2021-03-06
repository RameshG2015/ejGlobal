ej.addCulture( "en-ZA", {
	name: "en-ZA",
	englishName: "English (South Africa)",
	nativeName: "English (South Africa)",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			pattern: ["-n%","n%"],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["$-n","$ n"],
			",": " ",
			".": ",",
			symbol: "R"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			patterns: {
				d: "yyyy-MM-dd",
				D: "dd MMMM yyyy",
				t: "hh:mm tt",
				T: "hh:mm:ss tt",
				f: "dd MMMM yyyy hh:mm tt",
				F: "dd MMMM yyyy hh:mm:ss tt"
			}
		}
	}
});