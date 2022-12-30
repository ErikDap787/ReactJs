import {Alert, AlertIcon, Box, Flex, Icon} from '@chakra-ui/react'
import { AiOutlineShoppingCart } from 'react-icons/ai'



  
  const CartWidget = () => {
    
    return (

<Box>
    <Flex>
 <Icon as= {AiOutlineShoppingCart}/>
 <Alert>
    (1)
  </Alert>
  </Flex>
</Box>
)
}

  export default CartWidget