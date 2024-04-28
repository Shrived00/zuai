import React from 'react'
import { BellDot, Search } from 'lucide-react';
import { MessageSquareMore } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    ShoppingCart,
    Users2,
} from "lucide-react"

import { Button } from "@/components/ui/button"



import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"



import Link from 'next/link';



const Navbar = () => {
    return (
        <nav className=' w-full flex justify-between gap-4  py-3'>
            <div className="">

                <div className="hidden border border-black/5 sm:flex justify-center items-center px-3 ">
                    <input placeholder='Search' className='w-full h-10  outline-none ' type='text' /><Search />
                </div>
                <div className="flex justify-center items-center h-full  sm:hidden ">


                    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                        <header className="sticky top-0 z-30 flex h-14 items-center gap-4  bg-background  sm:static sm:h-auto sm:border-0 sm:bg-transparent ">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button size="icon" variant="outline" className="sm:hidden border-none">
                                        <AlignJustify className=" w-7" />
                                        <span className="sr-only">Toggle Menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="sm:max-w-xs">
                                    <nav className="grid gap-6 text-lg font-medium">3
                                        <Link
                                            href="#"
                                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                        >
                                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                                            <span className="sr-only">Acme Inc</span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Home className="h-5 w-5" />
                                            Dashboard
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-foreground"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                            Orders
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Package className="h-5 w-5" />
                                            Products
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <Users2 className="h-5 w-5" />
                                            Customers
                                        </Link>
                                        <Link
                                            href="#"
                                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                        >
                                            <LineChart className="h-5 w-5" />
                                            Settings
                                        </Link>
                                    </nav>
                                </SheetContent>
                            </Sheet>



                        </header>

                    </div >

                    {/*  */}

                    <Search />
                </div>
            </div>


            <div className="flex justify-center items-center gap-4">
                <div className="">
                    <BellDot />
                </div>
                <div className="">
                    <MessageSquareMore />
                </div>
                <div className="flex justify-center items-center gap-3">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="">Admirra John</div>
                    <ChevronDown />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
