import { WeeklyObjectNominal } from "../stores/weekly/weeklyStore";

export function determineRollFactor(nominal:WeeklyObjectNominal): number {
	switch (nominal) {
		case "2_euro": return 25;
		case "1_euro": return 25;
		case "50_cent": return 40;
		case "20_cent": return 40;
		case "10_cent": return 40;
		case "5_cent": return 50;
		case "2_cent": return 50;
		case "1_cent": return 50;
		default: throw new Error;
	}
}
