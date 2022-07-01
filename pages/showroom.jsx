/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { cars } from '../components/cars';

function Showroom() {
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <div className="h-[50vh] bg-dark grid place-content-center mb-28">
        <div className="container">
          <div className="text-white text-center">
            <p>Welcome to our</p>
            <h2 className="text-5xl font-bold">Show Room</h2>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/70 w-screen h-screen fixed z-[999] inset-0 grid place-content-center"
          >
            <motion.div
              className="bg-white rounded-3xl p-6 w-[full] lg:w-[800px] h-[500px] relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              <p
                onClick={() => setExpanded(null)}
                className="cursor-pointer absolute top-5 right-5 w-8 h-8 bg-highlight rounded-full text-white text-center flex items-center justify-center"
              >
                x
              </p>

              <h2 className="text-xl font-bold">{expanded?.name}</h2>
              <div className="h-2/3 flex items-center">
                <img
                  src={expanded?.img}
                  alt="image"
                  className="w-[300px] block mx-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-dark text-2xl">₦{expanded?.price}</p>
                <div className="mb-4 text-slate-700/80">
                  <p>Horsepower: {expanded?.hp}</p>
                  <p>Engine: {expanded?.engine}</p>
                  <p>Transmission: {expanded?.trans}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 my-28 justify-center">
        {cars.map((car, i) => (
          <motion.div
            key={i}
            onClick={() => setExpanded(car)}
            className="bg-white rounded-3xl min-h-[270px] p-4 hover:-translate-y-2 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="h-2/3 w-1/2 mx-auto grid place-content-center mt-6 relative">
              <Image
                src={car.img}
                alt="img"
                // className="w-52 object-contain block mx-auto"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="text-center mt-6">
              <p className="font-semibold">{car.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Showroom;
