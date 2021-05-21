function drawRating(vote) {
	const point = (vote != 0) ? Math.ceil(vote/20) : 1

	return Array(point+1).join("★") + Array(6-point).join("☆")
}

console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★
