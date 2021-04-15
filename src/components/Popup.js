import React from 'react'

function Popup({ selected, closePopup }) {
	const imgLink=`https://image.tmdb.org/t/p/w500/${selected.poster_path}`

	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.title } <span>({ selected.release_date })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={imgLink} />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup
