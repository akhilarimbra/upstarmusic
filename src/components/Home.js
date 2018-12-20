import React from 'react'
import Header from './Header'

const Home = ({ children }) => {
	return (
		<div className="container-fluid">
			<Header />
			{children}
		</div>
	)
}

export default Home
