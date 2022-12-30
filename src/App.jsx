import React from 'react'
import { useState } from 'react'
import { Button, Container, Flex } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {

 return (
    <Container> 
     <Flex>
     <NavBar />
     <ItemListContainer greeting = "Bienvenido a Barcino Lunden consolas!"/>
     </Flex>
    </Container>
  )
}

export default App


