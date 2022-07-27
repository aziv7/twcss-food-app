import { Cart, CreateItem, Header, MainContainer } from './components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
function App() {
  const [showCart, setShowCart] = useState(true);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header setShowCart={setShowCart} />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
        <main className='w-full  py-4 px-4 md:px-16  mt-14 md:mt-20'>
          <Routes>
            <Route path='/new-item' element={<CreateItem />} />
            <Route path='/' element={<MainContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
