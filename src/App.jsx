import React from 'react'
import { useState } from 'react'
import { Button, Container, Flex } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'


function App() {

  return (
    <Container>
      <Flex>
        <NavBar />
        <ItemListContainer greeting="Bienvenido a Barcino Lunden consolas!" />
        <ItemDetailContainer />
      </Flex>
    </Container>
  )
}

export default App


