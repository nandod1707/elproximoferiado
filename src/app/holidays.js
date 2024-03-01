import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import updateLocale from "dayjs/plugin/updateLocale"
import isLeapYear from "dayjs/plugin/isLeapYear"
import "dayjs/locale/es"

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.extend(isLeapYear); 
dayjs.locale('es')

dayjs.updateLocale('es', {
	relativeTime: {
		future: "%s",
		past: "%s",
		s: "unos segundos",
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
	}
]

const nextHoliday = holidays.find(holiday => dayjs().isBefore(dayjs(`${holiday.year}-${holiday.month}-${holiday.date}`)))

const lastHoliday = holidays[holidays.indexOf(nextHoliday) - 1]

const daysUntilNextHoliday = () => {
	let daysUntil = parseInt(dayjs().from(dayjs(`${nextHoliday.year}-${nextHoliday.month}-${nextHoliday.date}`), true))
	if(dayjs().isLeapYear()) {
		daysUntil += 1
	}
	return daysUntil
}

const daysSinceLastHoliday = () => {
	let daysSince = parseInt(dayjs().from(dayjs(`${lastHoliday.year}-${lastHoliday.month}-${lastHoliday.date}`), true))
	if(dayjs().isLeapYear()) {
		daysSince -= 1
	}
	return daysSince
}

const progressUntilNextHoliday = () => {
	const totalDaysBetween = daysSinceLastHoliday() + daysUntilNextHoliday()
	const progressUntil = daysSinceLastHoliday() / totalDaysBetween
	return progressUntil
}

export {
	holidays,
	nextHoliday,
	lastHoliday,
	daysUntilNextHoliday,
	daysSinceLastHoliday,
	progressUntilNextHoliday
}