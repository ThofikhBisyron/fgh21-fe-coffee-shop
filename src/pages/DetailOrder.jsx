import React from "react";
import { FaRegUser, FaLocationDot, FaPhone, FaRegCreditCard, FaTruck, FaRepeat } from "react-icons/fa6";
import Kopie from "../img/Kopie.svg"

function DetailOrder(){
    return(
        <div className="flex flex-col gap-6 px-32 py-16">
            <div className="flex flex-col text-[#4F5665] gap-1">
                <div className="flex gap-1 text-[#0B0909]">
                    <div className="font-medium text-5xl">
                        Order
                    </div>
                    <div className="font-bold text-5xl ">
                        #12354-09893
                    </div>
                </div>
                <div className="">21 March 2023 at 10:30 AM</div>
            </div>
            <div className="flex">
                <div className="flex flex-col w-1/2 pr-2">
                    <div className="text-[#0B132A] font-medium text-xl mb-4">Order Information</div>
                    <div className="flex items-center p-4 gap-2 border-b-2">
                        <FaRegUser className="text-[#4F5665]"/>
                        <div className="flex w-full justify-between">
                            <div className="font-medium text-[#4F5665]">Full Name</div>
                            <div className="text-[#0B132A] font-bold">Ghaluh Wizard Anggoro</div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 gap-2 border-b-2">
                        <FaLocationDot className="text-[#4F5665]"/>
                        <div className="flex w-full justify-between">
                            <div className="font-medium text-[#4F5665]">Address</div>
                            <div className="text-[#0B132A] font-bold">Griya bandung indah</div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 gap-2 border-b-2">
                        <FaPhone className="text-[#4F5665]"/>
                        <div className="flex w-full justify-between">
                            <div className="font-medium text-[#4F5665]">Phone</div>
                            <div className="text-[#0B132A] font-bold">082116304338</div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 gap-2 border-b-2">
                        <FaRegCreditCard className="text-[#4F5665]"/>
                        <div className="flex w-full justify-between">
                            <div className="font-medium text-[#4F5665]">Payment Method</div>
                            <div className="text-[#0B132A] font-bold">Cash</div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 gap-2 border-b-2">
                        <FaTruck className="text-[#4F5665]"/>
                        <div className="flex w-full justify-between">
                            <div className="font-medium text-[#4F5665]">Shipping</div>
                            <div className="text-[#0B132A] font-bold">Dine In</div>
                        </div>
                    </div>
                    <div className="flex items-center p-3 gap-2 border-b-2">
                        <FaRepeat className="text-[#4F5665]"/>
                        <div className="flex w-full justify-between items-center">
                            <div className="font-medium text-[#4F5665]">Shipping</div>
                            <div className="bg-[#00A700]/20 p-2 text-xs rounded-full text-[#00A700] font-bold">Done</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 gap-2">
                    <div className="font-medium text-[#4F5665]">Shipping</div>
                    <div className="text-[#FF8906] font-bold">IDR 40.000</div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-4 pl-2">
                    <div className="text-[#0B132A] font-medium text-xl">Your Order</div>
                    <div className="flex gap-7 p-2 bg-[#E8E8E8]/30 rounded-md w-full">
                        <div className="">
                            <img src={Kopie} alt="" className="w-44 h-44"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center bg-[#D00000] p-2 text-white rounded-full">
                                FLASH SALE!
                            </div>
                            <div className="text-[#0B0909] font-bold text-lg">
                                Hazelnut Latte
                            </div>
                            <div className="flex gap-2 ">
                                <div className="">2pcs</div>
                                <div className="">|</div>
                                <div className="">Regular</div>
                                <div className="">|</div>
                                <div className="">Ice</div>
                                <div className="">|</div>
                                <div className="">Dine In</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-[#D00000] line-through font-medium text-xs">IDR 40.000</div>
                                <div className="font-medium text-[#FF8906]">IDR 20.000</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-7 p-2 bg-[#E8E8E8]/30 rounded-md w-full">
                        <div className="">
                            <img src={Kopie} alt="" className="w-44 h-44"/>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-center bg-[#D00000] p-2 text-white rounded-full">
                                FLASH SALE!
                            </div>
                            <div className="text-[#0B0909] font-bold text-lg">
                                Hazelnut Latte
                            </div>
                            <div className="flex gap-2 ">
                                <div className="">2pcs</div>
                                <div className="">|</div>
                                <div className="">Regular</div>
                                <div className="">|</div>
                                <div className="">Ice</div>
                                <div className="">|</div>
                                <div className="">Dine In</div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-[#D00000] font-medium text-xs line-through">IDR 40.000</div>
                                <div className="font-medium text-[#FF8906]">IDR 20.000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailOrder