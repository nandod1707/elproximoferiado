import { nextHoliday, daysUntilNextHoliday } from "./holidays";

export default function Home() {

	const daysUntil = daysUntilNextHoliday()

	return (
		<div className="text-center text-slate-50">
			<div className="my-2">
				<p className="text-4xl mb-2">Falta{daysUntil > 1 && 'n'} {daysUntil} d&iacute;a{daysUntil > 1 && 's'}</p>
				<p className="text-2xl">{nextHoliday.weekday}</p>
				<p className="text-9xl font-bold">{nextHoliday.date}</p>
				<p className="text-4xl">de {nextHoliday.monthName}</p>
			</div>
			<p className="text-xl max-w-96">{nextHoliday.name}</p>
		</div>
	);

}