import "../scss/app.scss";

const setupSlider = slider => {
	const container = slider.querySelector(".slider__container");
	const prev = slider.querySelector(".slider__prev");
	const next = slider.querySelector(".slider__next");
	prev.disabled = true;

	const cards = Array.from(slider.querySelectorAll("li"));
	const cardsLeftOffset = cards.map(card => card.offsetLeft);
	const cardsRightOffset = cardsLeftOffset.map(offset => offset + cards[0].offsetWidth);
	let prevCard, nextCard;

	// on scroll calculations
	const onScroll = () => {
		const maxScroll = container.scrollWidth - container.offsetWidth;
		const scrollLeft = container.scrollLeft;
		prev.disabled = scrollLeft <= 50;
		next.disabled = scrollLeft >= maxScroll - 50;
		prevCard = cardsRightOffset.findIndex(offset => offset >= scrollLeft);
		nextCard = cardsRightOffset.findIndex(offset => offset > scrollLeft + container.offsetWidth);
	};

	container.addEventListener("scroll", onScroll);
};

const setup = () => {
	const slider = document.querySelector("#slider");
	setupSlider(slider);
};

setup();
