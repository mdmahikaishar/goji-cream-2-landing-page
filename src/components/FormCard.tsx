import { NEW_PRICE, OLD_PRICE } from "../constances";

export default function FormCard({timer}: {timer?:boolean}) {
  return (
    <div className="lg:w-[22.5rem] w-full h-full p-4 sm:p-8 bg-gradient-to-b from-sky-500 to-violet-600 z-10 rounded-3xl lg:rounded-none">
      {/* Form Soponser */}
      <div className="mb-8 flex items-center justify-center gap-4">
        <img className="h-10 md:h-16 aspect-square object-cover" src="/icon_eco.png" alt="" />
        <img className="h-10 md:h-16 aspect-square object-cover" src="/icon_organic.png" alt="" />
        <img className="h-10 md:h-16 aspect-square object-cover" src="/icon_cert.png" alt="" />
        <img className="h-10 md:h-16 aspect-square object-cover" src="/icon_qualty.png" alt="" />
      </div>

      <FormMain />

      {/* Form Timer */}
      {timer && (
        <div className="text-white">
          <h3 className="mb-4 text-xs sm:text-base text-center">ডিসকাউন্ট অব্যাহত থাকে যতক্ষণ না:</h3>

          <div className="flex item-center justify-center gap-4">
            <div className=""></div>
            <Clock />
          </div>
        </div>
      )}
    </div>
  )
}


function Clock() {
  return (
    <div className="flex items-center gap-1 text-black">
      <div className="w-6 h-8 sm:w-8 sm:h-12 md:w-10 md:h-16 font-bold text-sm sm:text-lg md:text-2xl grid place-items-center bg-white rounded-xl">0</div>
      <div className="w-6 h-8 sm:w-8 sm:h-12 md:w-10 md:h-16 font-bold text-sm sm:text-lg md:text-2xl grid place-items-center bg-white rounded-xl">0</div>

      <div className="font-bold text-2xl text-white">:</div>

      <div className="w-6 h-8 sm:w-8 sm:h-12 md:w-10 md:h-16 font-bold text-sm sm:text-lg md:text-2xl grid place-items-center bg-white rounded-xl">0</div>
      <div className="w-6 h-8 sm:w-8 sm:h-12 md:w-10 md:h-16 font-bold text-sm sm:text-lg md:text-2xl grid place-items-center bg-white rounded-xl">0</div>
      
      <div className="font-bold text-2xl text-white">:</div>

      <div className="w-6 h-8 sm:w-8 sm:h-12 md:w-10 md:h-16 font-bold text-sm sm:text-lg md:text-2xl grid place-items-center bg-white rounded-xl">0</div>
      <div className="w-6 h-8 sm:w-8 sm:h-12 md:w-10 md:h-16 font-bold text-sm sm:text-lg md:text-2xl grid place-items-center bg-white rounded-xl">0</div>
    </div>
  )
}

interface IInputProps  {
  type?: "text" | "email" | "select",
  option?: string[],
  placeholder?: string;
};

function Input(props: IInputProps) {
  return props.type === "select" ? (
    <select className="h-10 px-2 sm:px-4 text-sm sm:text-sm bg-transparent outline-none border border-sky-500 rounded-3xl">
      {props.option?.map((item, index) => (
        <option className="" key={index}>{item}</option>
      ))}
    </select>
  ) : (
    <input className="h-10 px-2 sm:px-4 text-sm sm:text-sm bg-transparent outline-none border border-sky-500 rounded-3xl"
      type={props?.type}
     placeholder={props?.placeholder}
     />
  );
}

function FormMain() {
  return (
    <div className="mb-8 max-w-sm w-full mx-auto bg-white rounded-3xl">
      {/* Form Heading */}
      <div className="sm:p-4 md:p-0 text-center">
        <div className="p-4 bg-yellow-500 rounded-tl-2xl rounded-tr-2xl">
          <del className="md:text-2xl opacity-70">{OLD_PRICE}</del>
          <h3 className="font-bold text-2xl md:text-4xl text-red-700">{NEW_PRICE}</h3>
        </div>
        <div className="p-4 bg-blue-700 text-white rounded-bl-2xl rounded-br-2xl">
          <span className="md:text-xl">শুধু আজ পান</span>
          <h3 className="font-bold text-2xl md:text-3xl">50% ছাড়</h3>
        </div>
      </div>

      {/* Form Body */}
      <form className="max-w-[15rem] md:mx-w-[auto] mx-auto px-2 sm:px-0 lg:px-4 pt-2 lg:pt-6 pb-4 lg:pb-8 flex flex-col gap-4">
        <Input type="select" option={["বাংলাদেশ"]} />
        <Input placeholder="ব্যবহারকারীর নাম" />
        <Input placeholder="ইমেইল" />
        <button className="w-full h-10 sm:px-4 font-bold text-xs bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 transition-all rounded-3xl shadow-lg">পাওয়া</button>
      </form>
    </div>
  )
}