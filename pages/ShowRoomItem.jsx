/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';

export function ShowRoomItem({ car, click }) {
  const { id, name, img, price, hp, engine, trans, mpg } = car;

  return (
    <motion.div
      layoutId={id}
      onClick={() => click(car)}
      className="bg-white rounded-3xl h-[270px] basis-[400px] flex-shrink-0 p-4 hover:-translate-y-2 hover:shadow-xl transition-all cursor-pointer"
    >
      <div className="h-2/3 grid place-content-center mt-6">
        <img
          src={img}
          alt="img"
          className="w-[70%] object-contain block mx-auto"
        />
      </div>

      <div className="text-center mt-6">
        <p className="font-semibold">{name}</p>
      </div>
    </motion.div>
  );
}
