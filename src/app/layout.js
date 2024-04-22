import { Poppins } from "next/font/google";
import { daysUntilNextHoliday } from "./holidays";
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata = {
	title: "El Proximo Feriado - Calendario de feriados nacionales en Argentina.",
	description: "Calendario de feriados nacionales en Argentina.",
};

const backgroundRed = [239, 68, 68]
const backgroundYellow = [250, 204, 21]
const backgroundGreen = [22, 163, 74]

const backgroundColor = () => {

	let rgbValues = backgroundRed

	if (daysUntilNextHoliday() < 7) {
		rgbValues = backgroundGreen
	} else if (daysUntilNextHoliday() < 15) {
		rgbValues = backgroundYellow
	}

	return `rgb(${rgbValues.join(' ')})`

}

const analytics = Analytics({
	app: 'el-proximo-feriado',
	plugins: [
		googleAnalytics({
			measurementIds: ['G-919V3NNBFH']
		})
	]
})

export default function RootLayout({ children }) {

	const pageView = (() => {
		analytics.page()
	})()

	return (
		<html lang="en">
			<body
				className={poppins.className}
				style={{ backgroundColor: backgroundColor() }}
			>
				{children}
			</body>
		</html>
	);
}
