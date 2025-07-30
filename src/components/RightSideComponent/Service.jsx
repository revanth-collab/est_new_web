import { Download } from 'lucide-react'
import React from 'react'

const Service = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between bg-white rounded-2xl p-6">
            <div>
                <h1 className="text font-semibold text-2xl mb-2">Upload your service catalog</h1>
                <p className='label font-medium text-sm leading-[25px]'>Upload a list of all the services you provide, including names, categories, durations, and pricing. This helps us display your offerings accurately in the EsteticaNow app and website.</p>

                <button type="button" className='mt-10 px-10 py-10 border rounded-xl border-[#7c3aed] text-[#7c3aed] mx-auto border-dashed flex justify-center items-center w-[70%]'>
                    <Download />
                    <span>Upload Catalog</span>
                </button>
            </div>

            <div className="flex justify-end mt-8">
                <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-6 py-2 rounded-xl min-w-[200px] shadow hover:opacity-90 transition-all duration-300">
                    Submit &gt;&gt;
                </button>
            </div>
        </div>
    )
}

export default Service