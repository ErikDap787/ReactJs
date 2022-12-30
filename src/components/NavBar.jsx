
     import { Menu, MenuButton, MenuItem, MenuList, MenuItemOption,
      MenuGroup,
      MenuOptionGroup,
      MenuDivider, 
      Button,
      Container,
      Box,
      Flex} from '@chakra-ui/react'
  
     import CartWidget from './CartWidget'

   const NavBar = () => { return (

<Box>
<Flex>
<Menu>
   <MenuButton as={Button}>
    Home
   </MenuButton>
   <MenuButton as={Button}>
    Consolas
   </MenuButton>
   <MenuButton as={Button}>
    Juegos
   </MenuButton>
   <MenuButton as={Button}>
    Accesorios
   </MenuButton>
   <MenuButton as={Button}>
    Sobre nosotros
   </MenuButton>
   <CartWidget />
</Menu>
</Flex>
</Box>
)}


   export default NavBar
   


