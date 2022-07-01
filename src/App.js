import { CreateItem, Header, MainContainer } from './components';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='w-screen h-auto flex flex-col bg-primary'>
      <Header />
      <main className='w-full p-8 mt-24'>
        <Routes>
          <Route path='/new-item' element={<CreateItem />} />
          <Route path='/' element={<MainContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
