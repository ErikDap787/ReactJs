import React from 'react'
import { Container, HStack, VStack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ConsolesProvider } from './components/ConsolesProvider'
import Cart from './components/Cart'
import CheckoutForm from './components/Checkout'
import CartContextProvider from './components/CartContext'


function App() {

  return (
    <CartContextProvider>
      <ConsolesProvider>
        <Container width="100%" maxWidth="100vh" padding={0}>
          <VStack>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutForm />} />
            </Routes>
          </VStack>
        </Container>
      </ConsolesProvider>
    </CartContextProvider>
  )
}

export default App


