export default function Step() {
  return (
    <section className="bg-gradient-to-b from-sky-50 to-sky-300">
      {/* Header */}
      <div className="relative px-8 py-12 text-left">
        <h2 className="mb-6 px-4 text-2xl md:text-4xl text-right text-sky-700"><span className="text-blue-700">GOJI CREAM</span> IS THE PERFECT SOLUTION</h2>
        <div className="h-16">
          <p className="md:w-full md:absolute md:-left-[10%] md:text-right px-28 h-16 flex items-center justify-center md:justify-end text-lg md:text-3xl bg-pink-500 text-white rounded-full">To Rejuvenate the skin</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch  gap-8">
        {/* Left */}
        <div className="lg:w-1/2 p-8">
          <h3 className="mb-8 text-right font-bold text-2xl md:text-3xl">Freshness of your skin in 3 steps <span className="text-pink-700">restore</span></h3>         
          <div className="py-4 flex flex-col gap-8">
            <StepCard name="First Step:" des="Cleanse your skin deeply to purify impurities, and you can take a bath." img="/steps_img1.jpg" />
            <StepCard name="Second Step:" des="Spread Goji Cream over the affected areas and massage carefully until completely absorbed into the skin." img="/steps_img1.jpg" />
            <StepCard name="Third Step:" des="Repeat these steps to enjoy amazing results after 3 weeks." img="/steps_img1.jpg" />
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-1/2 flex-grow flex flex-col justify-between">
          <h3 className="mx-8 lg:mx-0 mb-8 lg:mb-0 px-8 py-2 text-center font-semibold md:text-2xl bg-white rounded-3xl lg:rounded-none lg:rounded-tl-3xl lg:rounded-bl-3xl"><span className="text-blue-700">GOJI CREAM</span> IS SAFE AND EASY TO USE</h3>
          {/* img */}
          <div className="w-full h-full flex items-end justify-center lg:justify-end">
            <img className="w-10/12 h-10/12 object-cover" src="/pic.png" alt="step-model" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard(props: { name: string, des: string, img: string }) {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <div className="w-full flex flex-col items-end text-right">
        <h3 className="md:mb-4 font-bold md:text-2xl text-pink-700">{props.name}</h3>
        <p className="max-w-[22rem] text-sm md:text-base text-red-700">{props.des}</p>
      </div>
      <div className="flex-none h-24 md:h-32 aspect-square border-2 border-pink-500 rounded-full overflow-hidden">
        <img className="w-full h-full object-cover" src={props.img} alt={props.name} />
      </div>
    </div>
  )
}

