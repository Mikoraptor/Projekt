import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = ({isLoggedIn}) => {
return (
	
		<Nav>
			<Bars />

			<NavMenu>
			<NavLink to='/' activeStyle>
				Strona Główna
			</NavLink>
			<NavLink to='/Advertisements' activeStyle>
				Ogłoszenia
			</NavLink>
			<NavLink to='/contact' activeStyle>
				Kontakt
			</NavLink>
			<NavLink to='/userpanel' activeStyle>
				Panel użytkownika
			</NavLink>
			
			
			</NavMenu>

			{isLoggedIn ? (
				<>
				<NavBtn>
					<NavBtnLink to='/Logout'>Wyloguj</NavBtnLink>
				</NavBtn>
				<NavBtn>
					<NavBtnLink to='/AdvertisementCreate'>Utwórz Ogłoszenie</NavBtnLink>
				</NavBtn>
				</>
			) : (
				<>
				<NavBtn>
					<NavBtnLink to='/LoginPage'>Zaloguj</NavBtnLink>
				</NavBtn>
				<NavBtn>
						<NavBtnLink to='/RegisterPage'>Zarejestruj</NavBtnLink>
				</NavBtn>
				</>
			)}
			
			
			
		</Nav>
)};

export default Navbar;
