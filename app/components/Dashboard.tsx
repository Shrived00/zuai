import Image from 'next/image'
import React from 'react'
import graph from '@/public/graph.svg'
import { ChevronDown } from 'lucide-react'
import { Pin } from 'lucide-react';
import { Ellipsis } from 'lucide-react';


const Dashboard = () => {
    return (
        <div className='pt-5  w-full h-full '>

            <div className="text-xl py-2 mb-2 font-medium ">Dashboard</div>


            <div className="grid grid-cols-1 lg:grid-cols-5  gap-4 ">
                <div className=" col-span-3  ">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="flex flex-col bg-[#FFEFE7] p-3 rounded-md font-medium gap-1">
                            <div className="">Availabel Position</div>
                            <div className="text-2xl">24</div>
                            <div className="text-[#FF5151]">4 Urgently needed</div>
                        </div>
                        <div className="flex flex-col bg-[#E8F0FB] p-3 rounded-md font-medium gap-1">
                            <div className="">Job Open</div>
                            <div className="text-2xl">10</div>
                            <div className="text-[#3786F1]">4 Urgently needed</div>
                        </div>
                        <div className="flex flex-col bg-[#FDEBF9] p-3 rounded-md font-medium gap-1">
                            <div className="">New Employee</div>
                            <div className="text-2xl">24</div>
                            <div className="text-[#EE61CF]">4 Urgently needed</div>
                        </div>
                    </div>

                    <div className="grid  grid-cols-1 sm:grid-cols-2 mt-6 gap-4">
                        <div className="flex justify-between  items-center  border rounded-md py-3 px-4 ps-auto">
                            <div className="">
                                <div className="font-medium mb-2">Total Employees</div>
                                <div className="text-2xl font-medium mb-3">216</div>
                                <div className="text-[0.8rem]">120 Men</div>
                                <div className="text-[0.8rem]">96 Women</div>
                            </div>
                            <div className="">
                                <Image src={graph} alt='...' />
                            </div>
                        </div>
                        <div className="flex justify-between  items-center  border rounded-md py-3 px-4 ps-auto">
                            <div className="">
                                <div className="font-medium mb-2">Total Request</div>
                                <div className="text-2xl font-medium mb-3">16</div>
                                <div className="text-[0.8rem]">10 Men</div>
                                <div className="text-[0.8rem]">6 Women</div>
                            </div>
                            <div className="">
                                <Image src={graph} alt='...' />
                            </div>
                        </div>


                    </div>
                    <div className="border rounded-md mt-6 p-3">
                        <div className="flex justify-between items-center pb-3 gap-3">
                            <div className="font-medium ">Announcemnet</div>
                            <div className="border rounded-md flex justify-between items-center p-1 ">
                                Today, 13 Sep 2021<ChevronDown />
                            </div>
                        </div>
                        <div className="border bg-slate-400/10 rounded-md flex justify-between items-center p-2 px-4 my-2">
                            <div className="">
                                <div className="pb-2">Outing schedule for every department</div>
                                <div className="text-[0.6rem]">5 Minute ago</div>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <Pin />
                                <Ellipsis />
                            </div>
                        </div>
                        <div className="border bg-slate-400/10 rounded-md flex justify-between items-center p-2 px-4 my-2">
                            <div className="">
                                <div className="pb-2">Outing schedule for every department</div>
                                <div className="text-[0.6rem]">5 Minute ago</div>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <Pin />
                                <Ellipsis />
                            </div>
                        </div>
                        <div className="border bg-slate-400/10 rounded-md flex justify-between items-center p-2 px-4 my-2">
                            <div className="">
                                <div className="pb-2">Outing schedule for every department</div>
                                <div className="text-[0.6rem]">5 Minute ago</div>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <Pin />
                                <Ellipsis />
                            </div>
                        </div>

                        <div className="flex  justify-center items-center border-t-2  pt-2">See All Annocument</div>

                    </div>
                </div>
                <div className=" col-span-2 grid-col-1 ">
                    <div className="text-white ">
                        <div className="bg-[#1B204A] p-3 rounded-sm">
                            <div className="bg-[#161E54]">Recently Activity</div>
                            <div className="">10:40 AM,Fri 10 Sept 2021</div>
                            <div className="">You Posted a New Job</div>
                            <div className="">Kindly check the requirement and term of work and make sure evrything is rigth</div>
                            <div className="flex justify-between items-center">
                                <div className="">Today you makes 12  Activity </div>
                                <div className="bg-[#FF5151] text-white p-3 ">Sell All Activity</div>
                            </div>
                        </div>
                    </div>
                    <div className="border rounded-md mt-6 p-3">
                        <div className="flex justify-between items-center pb-3 gap-3">
                            <div className="font-medium ">Announcemnet</div>
                            <div className="border rounded-md flex justify-between items-center p-1 ">
                                Today, 13 Sep 2021<ChevronDown />
                            </div>
                        </div>
                        <div className="border bg-slate-400/10 rounded-md flex justify-between items-center p-2 px-4 my-2">
                            <div className="">
                                <div className="pb-2">Outing schedule for every department</div>
                                <div className="text-[0.6rem]">5 Minute ago</div>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <Pin />
                                <Ellipsis />
                            </div>
                        </div>
                        <div className="border bg-slate-400/10 rounded-md flex justify-between items-center p-2 px-4 my-2">
                            <div className="">
                                <div className="pb-2">Outing schedule for every department</div>
                                <div className="text-[0.6rem]">5 Minute ago</div>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <Pin />
                                <Ellipsis />
                            </div>
                        </div>
                        <div className="border bg-slate-400/10 rounded-md flex justify-between items-center p-2 px-4 my-2">
                            <div className="">
                                <div className="pb-2">Outing schedule for every department</div>
                                <div className="text-[0.6rem]">5 Minute ago</div>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <Pin />
                                <Ellipsis />
                            </div>
                        </div>

                        <div className="flex  justify-center items-center border-t-2  pt-2">See All Annocument</div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dashboard
