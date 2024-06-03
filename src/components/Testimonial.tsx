"use client";
import { useRef, useState } from "react";

export default function Testimonial() {
  return (
    <section className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="holder p-8">
        {/* Heading */}
        <div className="mb-8 max-w-md mx-auto text-center">
          <p className="h-16 flex items-center justify-center text-3xl bg-pink-500 text-white rounded-full">Customer Reviews</p>
        </div>

        {/* Content */}
        <div className="">
          <Slider />
        </div>
      </div>
    </section>
  )
}

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slider = useRef({} as HTMLDivElement);
  const container = useRef({} as HTMLDivElement);

  const handleClick = (index: number) => () => {
    setActiveSlide(index);
  }

  
  return (
    <>
      <div className="mb-8 w-[20rem] md:w-[40rem] mx-auto bg-white rounded-3xl scroll-y-hidden border-2 border-gray-200" ref={slider}>
        {/* Slider Container */}
        <div className="flex transition-all duration-200" ref={container} style={{ transform: `translateX(calc(${activeSlide} * -100%))` }}>
          <TestimonialCard name="Diana, 45 years old" des="Goji Cream is a gift from heaven - in just two weeks of regular use wrinkles have decreased visibly, my facial features have become more defined and my skin is more elastic, after the results I have obtained I advise everyone to use it, do not be afraid to use this wonderful cream will not disappoint you." img="/ava1.jpg" />
          <TestimonialCard name="Placeholder 2" des="Describiton Placeholder 2" img="/ava2.jpg" />
          <TestimonialCard name="Placeholder 3" des="Describiton Placeholder 3" img="/ava3.jpg" />
        </div>
      </div>
      
      {/* Controller */}
      <div className="mx-auto w-fit p-2 flex items-center gap-4 bg-white rounded-3xl border-2 border-gray-200">
        <button className={`h-6 aspect-square ${activeSlide === 0 ? "bg-blue-700" : "bg-white hover:bg-blue-500"} border border-sky-500 rounded-full`} onClick={handleClick(0)}></button>
        <button className={`h-6 aspect-square ${activeSlide === 1 ? "bg-blue-700" : "bg-white hover:bg-blue-500"} border border-sky-500 rounded-full`} onClick={handleClick(1)}></button>
        <button className={`h-6 aspect-square ${activeSlide === 2 ? "bg-blue-700" : "bg-white hover:bg-blue-500"} border border-sky-500 rounded-full`} onClick={handleClick(2)}></button>
      </div>
    </>
  )
}

function TestimonialCard(props: {name:string, des: string, img: string}) {
  return (
    <div className="min-w-[20rem] md:min-w-[40rem] p-8 flex flex-col-reverse md:flex-row items-center gap-8 bg-white text-black rounded-3xl">
      <div className="flex-grow flex flex-col items-center md:items-end gap-4 text-center md:text-right">
        <h3 className="font-bold text-xl ">{props.name}</h3>
        <p className="text-red-700">{props.des}</p>
      </div>
      <div className="flex-none h-32 aspect-square rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={props.img} alt={props.name} />
      </div>
    </div>
  )

}