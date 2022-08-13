/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import {useState} from 'react';
import Slider from 'react-slick';
import {cars} from '../components/cars';
import {Testimonial} from "@components/testimonial";
import {testimonials} from "../data";
import {NextArrow} from "@components/nextArrow";
import {PrevArrow} from "@components/prevArrow";

export default function Home() {
  const [imgIndex, setImgIndex] = useState(0);
  const [currentSlide, setcurrentSlide] = useState(0);

  const featuresSlideSettings = {
    autoplay: true,
    className: 'sliderclass',
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (c, n) => {
      setImgIndex(n);
      setcurrentSlide(n);
    },
    afterChange: (c, n) => {
      // console.log(c);
    },
  };

  const testimonialsSlideSettings = {
    infinite: true,
    speed: 400,
    slidesToShow: 2,
    centerMode: true,
    autoplay: true,
    dots: true,
    centerPadding: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main>
      {/* header section */}
      <header className="relative min-h-[calc(100vh-50px)] w-full grid">
        <div className="relative h-full">
          <Image
            src="/header_bg.jpg"
            alt="headerbg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 text-white flex items-center container">
          <div className="flex flex-col">
            <h1 className="text-[40px] md:text-[70px]">
              Find Your
              <br /> Dream Car
            </h1>
            <p className="text-white/80 w-full md:w-1/2 mb-6">
              Glym Autos is your one-stop shop for buying and selling of car.
              With over many years of experience, we’re the trusted guide in car
              shopping.
            </p>
            <a
              href="#featured"
              className="bg-highlight rounded-full px-8 py-4 pr-16 flex items-center self-start relative group transition-all"
            >
              <span>Take a look</span>
              <div className="w-12 h-12 bg-black rounded-full grid place-items-center absolute right-[5px]">
                <img
                  src="/arrow-down-right.svg"
                  alt=""
                  className="transform -rotate-45 group-hover:rotate-0 transition-all"
                />
              </div>
            </a>
          </div>
        </div>
      </header>

      <a
        href="tel:+2348156558107"
        className="fixed z-[999] bottom-10 right-10 w-12 h-12 rounded-full bg-dark grid place-content-center shadow-2xl cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </a>

      {/* about us section */}
      <section id="about" className="my-52 relative">
        <p className="hidden lg:visible absolute top-0 text-[199px] text-slate-400/10 -z-10 left-[50%] translate-x-[-50%]">
          GLYMLEO
        </p>
        <div className="container">
          <div>
            <p className="text-[12px] text-[#8E8E93] text-center">
              WELCOME TO GLYMLEO
            </p>
            <h2 className="text-4xl text-center text-dark">
              Premium Car dealer
            </h2>
          </div>

          <p className="text-center w-full lg:w-2/3 mx-auto mt-4">
            At Glym Autos, our commitment to quality and iconic customer
            experiences have made us the one of the sought after retailers of
            used and new cars here in Nigeria. Our prices have transformed car
            buying and selling from a stressful, harrowing event into the
            honest, plain sailing experience all people deserve. We’ve been
            raising the bar on customer  experiences ever since.
          </p>
        </div>

        <div className="mt-24 flex flex-col lg:flex-row gap-8 container">
          <div className="bg-white rounded-2xl p-8 h-[220px] w-full flex flex-col justify-between relative flex-1">
            <p className="text-2xl font-bold">Best Prices</p>

            <p className="text-sm">
              We provide guaranteed vehicles at affordable prices in an
              atmosphere that exceeds customer’s expectation.
            </p>

            <div className="bg-highlight w-[80px] h-[100px] absolute -top-[20px] right-12 rounded-b-2xl hidden lg:grid place-items-center">
              <img src="/quality-ic.svg" alt="icon" className="w-12 h-12" />
              <div className="triangle-1"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 h-[220px] w-full flex flex-col justify-between relative flex-1">
            <p className="text-2xl font-bold">Wide range of brands</p>

            <p className="text-sm">
              Get access to our wide variety of car options ranging from sedans
              to SUVs. Our car database has over hundreds of cars available, the
              list is endless.
            </p>

            <div className="bg-highlight w-[80px] h-[100px] absolute -top-[20px] right-12 rounded-b-2xl hidden lg:grid place-items-center">
              <img src="/brands-ic.svg" alt="icon" className="w-12 h-12" />
              <div className="triangle-1"></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 h-[220px] w-full flex flex-col justify-between relative flex-1">
            <p className="text-2xl font-bold">Trusted by everyone</p>

            <p className="text-sm">
              Our commitment to quality customer experiences has brought us the
              much needed vote of confidence by our existing customer base.
            </p>

            <div className="bg-highlight w-[80px] h-[100px] absolute -top-[20px] right-12 rounded-b-2xl hidden lg:grid place-items-center">
              <img src="/support-ic.svg" alt="icon" className="w-12 h-12" />
              <div className="triangle-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* featured section */}
      <section id="featured" className="mb-12">
        <div className="container">
          <div>
            <p className="text-[12px] text-[#8E8E93] text-center">FEATURED</p>
            <h2 className="text-4xl text-center text-dark">
              Top Featured products
            </h2>
          </div>

          <div className="my-24 w-[90%] mx-auto">
            <Slider {...featuresSlideSettings}>
              {cars.map((car, i) => (
                <div
                  key={i}
                  className={i == imgIndex ? 'slide activeSlide' : 'slide'}
                >
                  <img src={car.img} alt="hh" />
                </div>
              ))}
            </Slider>
            <div className="w-[min(90%,300px)] min-h-[130px] rounded-2xl mx-auto mt-5 p-4 flex flex-col items-center gap-1">
              <h2 className="text-center text-xl font-bold">
                {cars[currentSlide].name}
              </h2>
              <p className="text-sm text-center bg-highlight/10 py-2 px-4 rounded-full text-highlight">
                ₦{cars[currentSlide].price}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stats section */}
      <section id="" className="min-h-[500px] grid">
        <div className="bg-highlight lg:bg-waves bg-no-repeat bg-right-bottom bg-cover h-[85%] mt-auto grid">
          <div className="container flex">
            <div className="flex-1 bg-slate-300/0 flex flex-col justify-center">
              <div className="flex gap-4 lg:gap-10">
                <div className="text-white relative w-[150px] h-[150px] border rounded-full flex flex-col justify-center items-center gap-2">
                  <img
                    className="block w-12 mx-auto"
                    src="/car.svg"
                    alt="car"
                  />
                  <p className="text-2xl">1000 +</p>
                  <p className="text-sm absolute -bottom-12">Sold Cars</p>
                </div>

                <div className="text-white relative w-[150px] h-[150px] border rounded-full flex flex-col justify-center items-center gap-2">
                  <img
                    className="block w-12 mx-auto"
                    src="/high-five.svg"
                    alt="car"
                  />
                  <p className="text-2xl">500+</p>
                  <p className="text-sm absolute -bottom-12">Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative h-full self-stretch hidden lg:block">
              <img
                src="/lady.png"
                alt="lady"
                className="absolute bottom-0 max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section id="testimonials" className="my-24">
        <div className="container">
          <div>
            <p className="text-[12px] text-[#8E8E93] text-center">
              TESTIMONIALS
            </p>
            <h2 className="text-4xl text-center text-dark">
              What our customers say
            </h2>
          </div>

          <div className="py-8">
            <Slider className="testis" {...testimonialsSlideSettings}>
              {testimonials.map((testimonial, i) => (
                <Testimonial key={i} {...testimonial} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
}
