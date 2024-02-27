import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocale from "dayjs/plugin/updateLocale"
import "dayjs/locale/es"


export default function Home() {

	dayjs.extend(relativeTime)
	dayjs.extend(updateLocale)
	dayjs.locale('es')

	dayjs.updateLocale('es', {
		relativeTime: {
		  future: "%s",
		  past: "%s",
		  s: 'unos segundos',
		  m: "%d",
		  mm: "%d",
		  h: "%d",
		  hh: "%d",
		  d: "%",
		  dd: "%d",
		  M: "%d",
		  MM: "%d",
		  y: "%d",
		  yy: "%d"
		}
	  })

	const nextHoliday = holidays.find(holiday => dayjs().isBefore(dayjs(`${holiday.year}-${holiday.month}=${holiday.date}`)))

	const daysUntil = parseInt(dayjs().from(dayjs(`${nextHoliday.year}-${nextHoliday.month}-${nextHoliday.date}`), true))

	return (
		<div className="text-center text-slate-50">
			<div className="my-2">
				<p className="text-2xl">Falta{daysUntil > 1 && 'n'} {daysUntil} d&iacute;a{daysUntil > 1 && 's'}</p>
				<p className="text-9xl font-bold">{nextHoliday.date}</p>
				<p className="text-4xl">de {nextHoliday.monthName}</p>
			</div>
			<p className="text-xl max-w-96">{nextHoliday.name}</p>
		</div>
	);

}

const holidays = [
	{
		date: 1,
		month: 1,
		year: 2024,
		monthName: "Enero",
		name: "Año Nuevo"
	},
	{
		date: 12,
		month: 2,
		year: 2024,
		monthName: "Febrero",
		name: "Carnaval"
	},
	{
		date: 13,
		month: 2,
		year: 2024,
		monthName: "Febrero",
		name: "Carnaval"
	},
	{
		date: 24,
		month: 3,
		year: 2024,
		monthName: "Marzo",
		name: "Día Nacional de la Memoria por la Verdad y la Justicia"
	},
	{
		date: 28,
		month: 3,
		year: 2024,
		monthName: "Marzo",
		name: "Jueves Santo"
	},
	{
		date: 29,
		month: 3,
		year: 2024,
		monthName: "Marzo",
		name: "Viernes Santo"
	},
	{
		date: 1,
		month: 4,
		year: 2024,
		monthName: "Abril",
		name: "Feriado con fines turísticos"
	},
	{
		date: 2,
		month: 4,
		year: 2024,
		monthName: "Abril",
		name: "Día del Veterano y de los Caídos en la Guerra de Malvinas"
	},
]

