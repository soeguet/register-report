import { WeeklyObjectNominal } from "../stores/weekly/weeklyStore";

export function determineBoxFactor(nominal:WeeklyObjectNominal): number {
	switch (nominal) {
		case "2_euro": return 3;
		case "1_euro": return 3;
		case "50_cent": return 3;
		case "20_cent": return 3;
		case "10_cent": return 3;
		case "5_cent": return 3;
		case "2_cent": return 5;
		case "1_cent": return 5;
		default: throw new Error;
	}
}

