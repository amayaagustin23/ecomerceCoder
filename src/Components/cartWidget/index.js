import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

const CartWidget = () => {
	return (
		<Tooltip title='Abrir Carrito'>
			<IconButton href={'/cart'} sx={{ p: 0 }}>
				<ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
			</IconButton>
		</Tooltip>
	)
}

export default CartWidget
