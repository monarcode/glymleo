import Image from "next/image";

export function Testimonial({name, img, message}) {
  return (
    <div className="bg-white p-4 rounded-3xl relative min-h-[250px] flex flex-col">
      <div
        className="relative overflow-hidden rounded-full h-24 w-24 border-8 border-[#f2f2f2] lg:-translate-x-2/4 lg:-top-16 lg:left-[50%]">
        <Image src={img.src} alt="dp" layout="fill"/>
      </div>
      <p className="w-[90%] mx-auto text-center text-sm -mt-8 mb-8">
        {message}
      </p>
      <h2 className="text-center text-xl">{name}</h2>
    </div>
  );
}
