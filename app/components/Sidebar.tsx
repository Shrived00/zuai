import Link from "next/link"
import {
    Home,
} from "lucide-react"






import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Sidebar = () => {

    return (

        <aside className="  hidden sm:w-[6rem] lg:w-[14rem] flex-col border-r bg-gray-400/10 sm:flex  min-h-screen ">

            <Link href={'/'} className="flex  items-center justify-center  w-full pt-5 pb-7 text-2xl font-semibold">

                ZUAI
            </Link>




            <nav className="flex flex-col mx-[2rem] gap-5  ">


                <div className="text-[0.7rem]">MAIN MENU</div>



                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex  items-center  text-muted-foreground transition-colors hover:text-foreground text-[#FF5151] "
                        >
                            <div className=" flex  gap-5 justify-center items-center">
                                <Home />
                                <div className="hidden lg:flex">Dashboard</div>
                            </div>
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex  items-center  text-muted-foreground transition-colors hover:text-foreground "
                        >
                            <div className=" flex  gap-5 justify-center items-center">
                                <Home />
                                <div className="hidden lg:flex">Recruitment</div>
                            </div>
                            <span className="sr-only">Recruitment</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Recruitment</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex  items-center  text-muted-foreground transition-colors hover:text-foreground "
                        >
                            <div className=" flex  gap-5 justify-center items-center">
                                <Home />
                                <div className="hidden lg:flex">Dashboard</div>
                            </div>
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex  items-center  text-muted-foreground transition-colors hover:text-foreground "
                        >
                            <div className=" flex  gap-5 justify-center items-center">
                                <Home />
                                <div className="hidden lg:flex">Schedule</div>
                            </div>
                            <span className="sr-only">Schedule</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Schedule</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex  items-center  text-muted-foreground transition-colors hover:text-foreground "
                        >
                            <div className=" flex  gap-5 justify-center items-center">
                                <Home />
                                <div className="hidden lg:flex">Employee</div>
                            </div>
                            <span className="sr-only">Employee</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Employee</TooltipContent>
                </Tooltip>

            </nav>
            <nav className="flex flex-col mx-[2rem] gap-5 mt-10 ">


                <div className="text-[0.7rem] ">MAIN MENU</div>



                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex  items-center  text-muted-foreground transition-colors hover:text-foreground "
                        >
                            <div className=" flex  gap-5 justify-center items-center">
                                <Home />
                                <div className="hidden lg:flex">Support</div>
                            </div>
                            <span className="sr-only">Support</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Support</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex  items-center  text-muted-foreground transition-colors hover:text-foreground "
                        >
                            <div className=" flex  gap-5 justify-center items-center">
                                <Home />
                                <div className="hidden lg:flex">Setting</div>
                            </div>
                            <span className="sr-only">Setting</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Setting</TooltipContent>
                </Tooltip>


            </nav>

        </aside>

    )
}

export default Sidebar
