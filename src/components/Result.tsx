import FormCard from "./FormCard"

export default function Result() {
  return (
    <section className="pb-8 lg:pb-0">
      <div className="holder flex flex-col lg:flex-row">
        <div className="lg:w-4/6">
          {/* Heading */}
          <div className="py-8 w-full lg:w-max">
            <h2 className="mb-2 text-center font-bold text-4xl text-blue-700">GOJI CREAM</h2>
            <p className="pr-4 text-center lg:text-right font-bold text-sm text-black">The perfect skin cream</p>
          </div>
          <div className="py-8 flex flex-col md:flex-row items-center md:flex-start justify-center md:justify-between gap-8 md:gap-4">
            <LeftSubColOne />
            <LeftSubColTwo />
          </div>
        </div>
        <div className="lg:w-2/6 flex-none flex justify-center lg:justify-end">
          <FormCard timer={false} />
        </div>
      </div>
    </section>
  )
}

function LeftSubColOne() {
  return (
    <div className="flex-none flex flex-col items-center gap-12">
      
      {/* Results */}
      <div className="">
        <div className="mb-4 grid grid-cols-2">
          <ResultCard img="/action_img_aft1.jpg" after={true} />
          <ResultCard  img="/action_img_bef1.jpg" after={false} />
        </div>
        <div className="mb-4 grid grid-cols-2">
          <ResultCard img="/action_img_aft2.jpg" after={true} />
          <ResultCard img="/action_img_bef2.jpg" after={false} />
        </div>
        <div className="grid grid-cols-2">
          <ResultCard img="/action_img_aft3.jpg" after={true} />
          <ResultCard img="/action_img_bef3.jpg" after={false} />
        </div>
      </div>
    </div>
  )
}

function LeftSubColTwo() {
  return (
    <div className="lg:px-8 flex flex-col">
      {/* Top */}
      <div className="mb-8 flex flex-col gap-2">
        {[
          "Eliminates wrinkles by 95%",
          "Improves skin hydration by 84%",
          "Increases skin elasticity by 73%"
        ].map((item, index) => (
          <div className="flex items-center gap-4" key={index}>
            <p className="flex-grow text-right text-lg">{item}</p>
            <img className="flex-none h-10 apsect-square object-container" src="ok.png" alt="check" />
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="max-w-[25rem] w-full h-full">
        <img className="w-full h-full object-contain" src="/goji.gif" alt="goji" />
      </div>
    </div>
  )
}

function ResultCard(props: { img: string, after?: boolean, }) {
  return (
    <div className={`min-w-36 min-h-36 aspect-square relative bg-cover bg-no-repeat ${!props.after ? "rounded-tl-3xl rounded-bl-3xl": "rounded-tr-3xl rounded-br-3xl"}`} style={{ backgroundImage: `url('${props.img}')` }}>
      <span className={`w-0/3 text-center absolute bottom-2 left-2 px-4 py-1 block bg-white border-2 rounded-3xl ${!props.after ? "text-red-700 border-red-700" : "text-blue-700 border-blue-700"}`}>
        {!props.after ? "Before": "After"}
      </span>
    </div>
  )
}