ej.addCulture( "ca-ES", {
	name: "ca-ES",
	englishName: "Catalan (Catalan)",
	nativeName: "Català (Català)",
	language: "ca",
	numberFormat: {
		pattern: ['-n'],
		",": ".",
		".": ",",
		groupSizes: [3],
		negativeInfinity: "-Infinit",
		positiveInfinity: "Infinit",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": ".",
			".": ",",
			symbol: '%'
		},
		currency: {
			pattern: ["-n $","n $"],
			groupSizes: [3],
			",": ".",
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
				names: ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],
				namesAbbr: ["dg.","dl.","dt.","dc.","dj.","dv.","ds."],
				namesShort: ["dg","dl","dt","dc","dj","dv","ds"]
			},
			months: {
				names: ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre",""],
				namesAbbr: ["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des.",""]
			},
			monthsGenitive: {
				names: ["de gener","de febrer","de març","d'abril","de maig","de juny","de juliol","d'agost","de setembre","d'octubre","de novembre","de desembre",""],
				namesAbbr: ["de gen.","de febr.","de març","d'abr.","de maig","de juny","de jul.","d'ag.","de set.","d'oct.","de nov.","de des.",""]
			},
			AM: null,
			PM: null,
			eras: [{"name":"dC","start":null,"offset":0}],
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, d MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, d MMMM' de 'yyyy H:mm",
				F: "dddd, d MMMM' de 'yyyy H:mm:ss",
				M: "d MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});