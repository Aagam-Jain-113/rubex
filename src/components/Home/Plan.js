import React from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

function Plan() {

    const classes = [7, 8, 9, 10, 11, 12];
    const [index, setIndex] = React.useState(2);
    const planPrices = [
        {
            micro: "2599",
            macro: "4999",
            giga: "49999",
        },
        {
            micro: "299",
            macro: "499",
            giga: "4999",
        },
        {
            micro: "259",
            macro: "999",
            giga: "9999",
        },
        {
            micro: "99",
            macro: "499",
            giga: "999",
        },
        {
            micro: "2599",
            macro: "4999",
            giga: "49999",
        },
        {
            micro: "2599",
            macro: "4999",
            giga: "49999",
        },
        
    ]

    return (
        <div className="min-h-screen my-12 lg:mb-40">
            <div className='h-full lg:h-96 mx-auto rounded-xl shadow-cards w-10/12 p-6 lg:p-12 bg-white text-center'>
                <p className='uppercase font-bold text-lg lg:text-4xl text-primary'>Plans</p>
                <p className="w-full lg:w-1/2 text-sm lg:text-xl mx-auto mt-6">Our flexible approach to learning allows students to learn at their pace and clear doubts whenever they arise.</p>
                <div className="flex space-x-5 items-center justify-center mt-6">
                    <p className="text-sm lg:text-xl text-textSecondary font-semibold">Class</p>
                    <AiOutlineLeft color="#549DC7" className='cursor-pointer' onClick={() => { index > 0 ? setIndex(index - 1) : setIndex(index) }} />
                    <p>{classes[index]}</p>
                    <AiOutlineRight color="#549DC7" className='cursor-pointer' onClick={() => { index < (classes.length - 1) ? setIndex(index + 1) : setIndex(index) }} />
                </div>
            </div>
            <div className="w-3/4 relative mx-auto text-center">
                <div className="relative lg:absolute mt-10 lg:mt-0 lg:-top-24 grid gap-20 grid-cols-3 text-white">
                    <div className='col-span-3 lg:col-span-1 relative h-440 px-6 w-80 pt-10 bg-gradient-to-br from-blueCard1 to-blueCard2 rounded-2xl'>
                        <p className="font-bold text-3xl">Micro Plan</p>
                        <p className="text-2xl mt-3">₹{planPrices[index].micro}</p>
                        <p className='text-lg'>1 Month</p>
                        <ul className='font-semibold space-y-6 mt-10 text-left list-none'>
                            <li>10 On-Demand  Live Classes</li>
                            <li>All subjects and topics available</li>
                            <li>Unlimited after class doubt solving</li>
                        </ul>
                        <button className='text-2xl absolute bottom-10 transform left-1/2 -translate-x-1/2 bg-white bg-blend-soft-light bg-opacity-30 font-semibold w-56 h-11 rounded-2xl'>Try for Free</button>
                    </div>
                    <div className='col-span-3 lg:col-span-1 relative h-440 px-6 w-80 pt-10 bg-gradient-to-br from-greenCard1 to-greenCard2 rounded-2xl'>
                        <p className="font-bold text-3xl">Macro Plan</p>
                        <p className="text-2xl mt-3">₹{planPrices[index].macro}</p>
                        <p className='text-lg'>3 Months</p>
                        <ul className='font-semibold space-y-6 mt-10 text-left list-none'>
                            <li>20 On-Demand  Live Classes</li>
                            <li>All subjects and topics available</li>
                            <li>Unlimited after class doubt solving</li>
                        </ul>
                        <button className='text-2xl absolute bottom-10 transform left-1/2 -translate-x-1/2 bg-white bg-blend-soft-light bg-opacity-30 font-semibold w-56 h-11 rounded-2xl'>Try for Free</button>
                    </div>
                    <div className='col-span-3 lg:col-span-1 relative h-440 px-6 w-80 pt-10 bg-gradient-to-br from-redCard1 to-redCard2 rounded-2xl'>
                        <p className="font-bold text-3xl">Giga Plan</p>
                        <p className="text-2xl mt-3">₹{planPrices[index].giga}</p>
                        <p className='text-lg'>1 Year</p>
                        <ul className='font-semibold space-y-6 mt-10 text-left list-none'>
                            <li>100 On-Demand  Live Classes</li>
                            <li>All subjects and topics available</li>
                            <li>Unlimited after class doubt solving</li>
                        </ul>
                        <button className='text-2xl absolute bottom-10 transform left-1/2 -translate-x-1/2 bg-white bg-blend-soft-light bg-opacity-30 font-semibold w-56 h-11 rounded-2xl'>Try for Free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plan
