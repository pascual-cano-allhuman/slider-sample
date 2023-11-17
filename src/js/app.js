import "../scss/app.scss";

const setupSlider = slider => {
	const container = slider.querySelector(".slider__container");
	const prev = slider.querySelector(".slider__prev");
	const next = slider.querySelector(".slider__next");

	const cards = Array.from(slider.querySelectorAll("li"));
	const cardsLeftOffset = cards.map(card => card.offsetLeft);
	const cardsRightOffset = cardsLeftOffset.map(offset => offset + cards[0].offsetWidth);
	let prevCard, nextCard;

	// on scroll calculations
	const onScroll = () => {
		const maxScroll = container.scrollWidth - container.offsetWidth;
		const scrollLeft = container.scrollLeft;
		prev.disabled = scrollLeft <= 0;
		next.disabled = scrollLeft >= maxScroll;
		prevCard = cardsLeftOffset.findIndex(offset => offset >= scrollLeft) - 1;
		nextCard = cardsRightOffset.findIndex(offset => offset > scrollLeft + container.offsetWidth);
	};
	container.addEventListener("scroll", onScroll);
	onScroll();

	// on buttons click
	const onNextClick = () => container.scrollTo({ left: cardsLeftOffset[nextCard], behavior: "smooth" });
	next.addEventListener("click", onNextClick);
	const onPrevClick = () => container.scrollTo({ left: cardsRightOffset[prevCard] - container.offsetWidth, behavior: "smooth" });
	prev.addEventListener("click", onPrevClick);
};

const setup = () => {
	const slider = document.querySelector("#slider");
	setupSlider(slider);
};

setup();
