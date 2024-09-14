import { pricingOptions } from '../constants'
import { CheckCircle } from 'lucide-react'
const MOST_POPULAR = 'Pro'
const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wider my-8 '>Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingOptions.map((option, index) => (
          <div key={index} className=" ">
            <div className="p-10 border border-nuetral-700 rounded-xl ">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === MOST_POPULAR && <span className='text-sm bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text mb-4 ml-2'>(Most Popular)</span> }
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/month</span>
              </p>
              <ul>
                {option.features.map((item, _index) => (
                  <li key={_index} className="mt-8 flex items-center">
                      <CheckCircle />
                      <span className="ml-2 text-neutral-400">{item}</span>
                  </li>

                ))}
              </ul>
              <a href="#" className="inline-flex justify-center items-center text-center w-full h12 p-5 mt-20 border border-orange-900 rounded-lg transistion duration-200 tracking-tight text-xl hover:bg-orange-900">
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Pricing