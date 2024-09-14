import { CircleCheck } from "lucide-react";
import codeImage from '../assets/code.jpg'
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2'>
      <h2 className="col-span-2 text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate Your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Coding workflow.</span>
      </h2>
      <div className="col-span-2 sm:col-span-1 p-2"> {/* Image will now only take 1 span on larger screens */}
        <img src={codeImage} alt="Code Image" />
      </div>
      <div className="pt-10">
        {checklistItems.map((item, index) => (
          <div key={index} className="flex mb-12">
            <div className="text-green-400 mx-6 bg-nuetral-900 size-10 p-2 justify-center rounded-full">
              <CircleCheck />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
              <p className="text-md text-neutral-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Workflow
/*
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate Your <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">Coding workflow.</span>
      </h2>
      <div className="flex flex-wrap justify-center ">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImage} alt="" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index)=> (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-nuetral-900 size-10 p-2 justify-center rounded-full">
                <CircleCheck />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ) )}
        </div>
      </div>
      */