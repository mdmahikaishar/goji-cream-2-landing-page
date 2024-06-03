export default function Testimonial() {
  return (
    <section className="bg-no-repeat bg-cover" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="holder p-8">
        {/* Heading */}
        <div className="mb-8 max-w-md mx-auto text-center">
          <p className="h-16 flex items-center justify-center text-3xl bg-pink-500 text-white rounded-full">آراء العملاء</p>
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
  return (
    <>
      <div className="mb-8 w-[20rem] md:w-[40rem] mx-auto rounded-3xl scroll-y-hidden border-2 border-gray-200">
        {/* Slider Container */}
        <div className="flex">
          <TestimonialCard name="ديانا، 45 عامًا" des="كريم Goji Cream هدية من السماء - في أسبوعين فقط من الاستخدام المنتظم قلت التجاعيد بشكل واضح، وأصبحت معالم وجهي أكثر تحديدًا وبشرتي أكثر مرونة، بعد النتائج التي حصلت عليها أنصح الجميع باستخدامه، لا تخافي من استخدام هذا الكريم الرائع فلن يخيب آمالك." img="/ava1.jpg" />
          <TestimonialCard name="Placeholder 2" des="Describiton Placeholder 3" img="/ava2.jpg" />
          <TestimonialCard name="Placeholder 2" des="Describiton Placeholder 3" img="/ava3.jpg" />
        </div>
      </div>
      
      {/* Controller */}
      <div className="mx-auto w-fit p-2 flex items-center gap-4 bg-white rounded-3xl border-2 border-gray-200">
        <div className={`h-6 aspect-square ${true ? "bg-blue-700" : "bg-white"} border border-sky-500 rounded-full`}></div>
        <div className={`h-6 aspect-square ${true ? "bg-blue-700" : "bg-white"} border border-sky-500 rounded-full`}></div>
        <div className={`h-6 aspect-square ${true ? "bg-blue-700" : "bg-white"} border border-sky-500 rounded-full`}></div>
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