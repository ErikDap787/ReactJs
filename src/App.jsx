import React from 'react'
import { useState } from 'react'
import { Button, Container, Flex } from '@chakra-ui/react'
import NavBar from './components/NavBar'


function App() {

 /* const [productos, setProductos] = useState ([]) */
 return (
    <Container> 
     <Flex>
     <NavBar />
     </Flex>
    </Container>
  )
}

export default App
