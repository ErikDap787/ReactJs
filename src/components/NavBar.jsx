
import {
   Menu, MenuButton, MenuItem, MenuList, MenuItemOption,
   MenuGroup,
   MenuOptionGroup,
   MenuDivider,
   Button,
   Container,
   Box,
   Flex,
   Img
} from '@chakra-ui/react'

import CartWidget from './CartWidget'

import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import consolas from '../consolas.json'

const NavBar = () => {

   const { xbox, nintendo, playstation } = consolas

   return (

      <Box>
         <Flex>
            <Menu>
               <Link to="/">
                  <MenuButton as={Button}>
                     <Img src={logo}></Img>
                  </MenuButton>
               </Link>
               <Link to="/">
                  <MenuButton as={Button}>
                     Home
                  </MenuButton>
               </Link>
               <Link to="/xbox">
                  <MenuButton as={Button}>
                     Xbox
                  </MenuButton>
               </Link>
               <Link to="/nintendo">
                  <MenuButton as={Button}>
                     Nintendo
                  </MenuButton>
               </Link>
               <Link to="/playstation">
                  <MenuButton as={Button}>
                     Playstation
                  </MenuButton>
               </Link>
               <CartWidget />
            </Menu>
         </Flex>
      </Box >
   )
}


export default NavBar



