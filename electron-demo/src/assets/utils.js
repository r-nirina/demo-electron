export function display(numbers) {
	return `${numbers}`.padStart(2, "0").slice(0, 2)
}

export function toMilliseconds({ hour, minute, second }) {
	return ((hour * 60 + minute) * 60 + second) * 1000
}

export function toTime(milliseconds) {
	const totalSeconds = milliseconds / 1000
	const second = totalSeconds % 60
	const totalMinutes = (totalSeconds - second) / 60
	const minute = totalMinutes % 60
	const hour = (totalMinutes - minute) / 60

	return {
		hour,
		minute,
		second
	}
}
