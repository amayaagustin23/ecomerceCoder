import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer'
import Navbar from '../../Components/Navbar'

const Home = () => {
	return (
		<div>
			<Navbar />
			<div>
				<ItemListContainer greeting={"Home"} />
			</div>
		</div>
	)
}

export default Home
