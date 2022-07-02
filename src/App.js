import { CreateItem, Header, MainContainer } from './components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col bg-primary'>
        <Header />
        <main className='w-full p-8 mt-24'>
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
