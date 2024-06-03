import FormCard from "./FormCard"

export default function Hero() {
  return (
    <section className="">
      <div className="holder flex flex-col lg:flex-row">
        {/* Left */}
        <div className="lg:w-1/2 py-8 flex flex-col items-center lg:items-start gap-4">
          {/* Heading */}
          <div className="w-max mx-auto">
            <h2 className="mb-2 font-bold text-4xl text-blue-700">GOJI CREAM</h2>
            <p className="pr-4 text-right font-bold text-sm text-black">كريم البشرة المثالي</p>
          </div>

          <HeroOffer />
          <HeroCircle />
        </div>

        {/* Right */}
        <div className="lg:w-1/2 relative lg:flex lg:justify-end">
          {/* Modal Image */}
          <div className="absolute -left-[20%] bottom-0 z-10 w-full h-full hidden lg:flex lg:items-end ">
            <img className="object-contain" src="/health_girl.png" alt="hero-model" />
          </div>
          
          <FormCard timer />
        </div>
      </div>
    </section>
  )
}

function HeroCircle() {
  return (
    <div className="md:px-8 lg:px-16 hidden md:block">
      <div className="mt-16 mb-16 lg:mb-0 w-80 aspect-square relative border-2 border-blue-700 rounded-full">
        <div className="w-44 aspect-square absolute -top-8 -left-20  border-2 border-blue-700 rounded-full cursor-pointer circle-group">
          <img className="w-full h-full object-cover rounded-full" src="/problem-img1aft.jpg" alt="" />
          <img className="w-full h-full object-cover rounded-full" src="/action_img_aft1.jpg" alt="" />
        </div>
        <div className="w-36 aspect-square absolute bottom-2 -left-16 border-2 border-blue-700 rounded-full cursor-pointer circle-group">
          <img className="w-full h-full object-cover rounded-full" src="/problem-img1aft.jpg" alt="" />
          <img className="w-full h-full object-cover rounded-full" src="/action_img_aft1.jpg" alt="" />
        </div>

        {/*  */}
        <div className="w-28 aspect-square absolute -bottom-16 left-1/2 -translate-x-1/2 border-2 border-blue-700 rounded-full cursor-pointer circle-group">
          <img className="w-full h-full object-cover rounded-full" src="/problem-img1aft.jpg" alt="" />
          <img className="w-full h-full object-cover rounded-full" src="/action_img_aft1.jpg" alt="" />
        </div>
        <div className="w-20 aspect-square absolute bottom-4 -right-2 border-2 border-blue-700 rounded-full cursor-pointer circle-group">
          <img className="w-full h-full object-cover rounded-full" src="/problem-img1aft.jpg" alt="" />
          <img className="w-full h-full object-cover rounded-full" src="/action_img_aft1.jpg" alt="" />
        </div>

        {/*  */}
        <div className="w-32 aspect-square absolute -top-14 right-10 border-2 border-blue-700 rounded-full cursor-pointer circle-group">
          <img className="w-full h-full object-cover rounded-full" src="/problem-img1aft.jpg" alt="" />
          <img className="w-full h-full object-cover rounded-full" src="/action_img_aft1.jpg" alt="" />
        </div>

        {/* Product Image */}
        <div className="h-64 w-48 absolute -top-4 -right-32">
          <img className="w-full h-full object-cover rounded-full" src="/goji.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

function HeroOffer() {
  return (
    <div className="mb-8 lg:mb-0 w-full h-[6rem] relative">
      <div className="lg:absolute lg:-left-[20%] flex flex-col-reverse lg:flex-row items-center gap-4 lg:gap-2">
        {/* Hero Offer Wrapping */}
        <div className="flex-none w-[19rem] h-[6rem] pb-6 grid place-items-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('/health_bend.png')" }}>
          <span className="font-bold text-2xl text-white">في 27 يومًا فقط</span>
        </div>

        {/* Hero Offer Text */}
        <p className="flex-grow lg:mb-6 font-bold text-xl text-pink-500">ببشرة جميلة ونضرة <span className="text-blue-700">لتستمتعي</span></p>
      </div>
    </div>
  )
}

