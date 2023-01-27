import React from 'react'
import { Button, Container, Flex } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Navigate, Route, Routes } from 'react-router-dom'
import ItemList from './components/ItemList'


function App() {

  return (

    <Container width="100%" maxWidth="100vh" padding={0}>
      <Flex>
        <NavBar />
        <ItemList />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ItemDetailContainer />
      </Flex>
    </Container>
  )
}

export default App


