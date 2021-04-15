import React from 'react'

function Result({ result, openPopup }) {
	const imgLink=`https://image.tmdb.org/t/p/w500/${result.poster_path}`
	// console.log("Id " + result.id)
	return (
		<div className="result" onClick={() => openPopup(result.id)}>
			<img src={imgLink} />
			<h3>{result.title}</h3>
		</div>
	)
}

export default Result
