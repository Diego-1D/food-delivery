import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header, MainContainer, CreateContainer } from "./components";
import { AnimatePresence } from 'framer-motion';
import { actionType } from './context/reducer';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunction'


function App() {
  const [{ foodItems }, dispatch] = useStateValue()

  const fecthData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }

  useEffect(() => {
    fecthData()
  }, [])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AnimatePresence exitBeforeEnter>
        <div className='w-screen h-auto flex flex-col bg-primary'>
          <Header />
          <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
            <Routes>
              <Route exact path='/' element={<MainContainer />} />
              <Route path='/createItem' element={<CreateContainer />} />
            </Routes>
          </main>
        </div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
