import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Logo from '../../assets/logo/logo.png'
import CartWidget from '../cartWidget'


const pages = [
	{
		page: 'Home',
		route: '/',
	},
	{
		page: 'Shop',
		route: '/shop',
	},
	{
		page: 'Contact',
		route: '/contact',
	},
	{
		page: 'Help',
		route: '/help',
	},
]

const Navbar = () => {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}>
							{pages.map((item) => (
								<MenuItem key={item.page}>
									<Typography href={item.route} textAlign='center'>
										{item.page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<img src={Logo} width='30' />
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((item) => (
							<Button href={item.route} key={item.page} sx={{ my: 2, color: 'white', display: 'block' }}>
								{item.page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<CartWidget/>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Navbar
