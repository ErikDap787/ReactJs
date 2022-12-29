import { Icon } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/fa'
import {
    Alert,
    AlertIcon,
  } from '@chakra-ui/react'


  
  const CartWidget = () => {
    
    return (
        
        <Icon as= {AiOutlineShoppingCart}>
        <Alert status='info'>
    <AlertIcon />
    (1)
  </Alert>
  </Icon>
)
}

  export default CartWidget