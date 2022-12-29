
     import { Menu, MenuButton, MenuItem, MenuList, MenuItemOption,
      MenuGroup,
      MenuOptionGroup,
      MenuDivider, 
      Button} from '@chakra-ui/react'
      import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

   const NavBar = () => { return (
   

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
)}


   export default NavBar
   


