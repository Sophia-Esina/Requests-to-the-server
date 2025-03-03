export default function debounce(func, ms) {
	let timeout;

	function debounced(...args) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, args), ms);
	}

	debounced.cancel = () => {
		clearTimeout(timeout);
	};

	return debounced;
}
