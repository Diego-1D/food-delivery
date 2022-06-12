import React from 'react'
import delivery from '../img/delivery.png'
import heroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'

const HomeContainer = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'
            id="home">
            <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                    <p className='text-base text-orange-500 font-semibold'>
                        Bike Delivery
                    </p>
                    <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                        <img
                            src={delivery}
                            className='w-full h-full object-contain'
                            alt='delivery'
                        />
                    </div>
                </div>

                <p className='text-[2.5rem] lg:text-[3.8rem] font-bold tracking-wide text-headingColor'>
                    A entrega mais rápida em 
                    <span className='text-orange-600 text-[3rem] lg:text-[3.8rem] p-3'>
                        Sua Cidade
                    </span>
                </p>
                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit amet. Qui sint voluptas et perferendis autem aut itaque
                    officiis et dolores maxime in nobis voluptate. Id numquam quisquam ea quis
                    iure ut fugit dolores vel deleniti consectetur. 33 quas accusantium in
                    necessitatibus mollitia id iusto quia eos aspernatur commodi.
                </p>
                <button
                    type='button'
                    className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 cursor-pointer'
                >
                  Comprar Agora
                </button>
            </div>
            <div className='py-2 flex-1 flex items-center relative'>
                <img
                    src={heroBg}
                    className='ml-auto h-420 w-full lg:w-auto lg:h-600'
                    alt='hero-bg'
                />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:py-4 gap-6 flex-wrap w-100 h-100'>
                    {
                        heroData &&
                        heroData.map((index) => (
                            <div
                                key={index.id}
                                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                            >
                                <img
                                    src={index.imageSrc}
                                    className='w-20 lg:w-40 -mt-10 lg:-mt-20'
                                    alt='I1'
                                />
                                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                                    {index.name}
                                </p>
                                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>
                                    {index.decp}
                                </p>
                                <p className='text-sm font-semibold text-headingColor'>
                                    <span className='text-xs text-red-600'>$</span>{index.price}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeContainer