import React, { useEffect, useState } from 'react'
import { useStateValue } from '../context/StateProvider'
import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import HomeContainer from './HomeContainer'
import RowContainer from './RowContainer'
import { motion } from 'framer-motion'
import Menu from './Menu'
import Cart from './Cart'

const MainContainer = () => {

  const [{ foodItems, cartShow }, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {

  }, [cartShow])

  const handleRigth = () => {
    if (scrollValue < 1800)
      setScrollValue(scrollValue + 600)
  }

  const handleLeft = () => {
    if (scrollValue >= 600)
      setScrollValue(scrollValue - 600)
  }

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Nossas Frutas Frescas & Saudáveis
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={handleLeft}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={handleRigth}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((e) => e.category === "frutas")}
        />
      </section>
      <Menu />
      {cartShow && <Cart />}
    </div>
  )
}
export default MainContainer