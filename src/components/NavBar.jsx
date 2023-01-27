
import {
   Menu, MenuButton,
   Button,
   Box,
   Flex,
   Img
} from '@chakra-ui/react'

import CartWidget from './CartWidget'

import logo from '../img/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

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
               <Link to="/category/xbox">
                  <MenuButton as={Button}>
                     Xbox
                  </MenuButton>
               </Link>
               <Link to="/category/nintendo">
                  <MenuButton as={Button}>
                     Nintendo
                  </MenuButton>
               </Link>
               <Link to="/category/playstation">
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



