export function display(numbers) {
	return `${numbers}`.padStart(2, "0").slice(0, 2)
}

export function toMilliseconds({ hour, minute, second }) {
	return ((hour * 60 + minute) * 60 + second) * 1000
}