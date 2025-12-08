import {Search, IoIosMenu, IoPersonOutline, IoPerson} from '@/assets/icons'
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/index'

function AppHeader() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    return (
        <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-white shadow-md">
            <div className="w-full max-w-[1800px] flex items-center justify-between px-4 py-3">
                {/* 좌측 */}
                <div className="flex gap-5 items-center">
                    <div className="font-semibold text-black text-[24px]" onClick={() => navigate('/')}>DevGroup</div>
                    <div className="hidden lg:flex gap-5">
                        <div className="text-[#24292e] text-[18px]">Explore</div>
                        <div className="text-[#24292e] text-[18px]">Support & Suggest</div>
                    </div>
                </div>
                {/* 우측 */}
                <div className="flex items-center gap-3">
                    {/*검색창*/}
                    <label htmlFor="search"
                           className="border w-[360px] h-8 border-[#b0b0b0] rounded-sm justify-end items-center px-3 hidden lg:flex">
                        <input id="search" type="text" placeholder="Search repositories, images..."
                               className="placeholder-[#24292e] text-[16px] flex-1"/>
                        <Search color="#24292e" size="16"/>
                    </label>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="group flex items-center text-[18px] ml-[6px] text-[#24292e] rounded-sm transition-all duration-300 px-2 py-1
                         hover:bg-[#667eea] hover:text-white">
                            <IoPersonOutline size="20px" className="mr-[4px] group-hover:hidden"/>
                            <IoPerson size="20px" className="mr-[4px] hidden group-hover:block" color="white"/>
                            Guest
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Create Account</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Sign in</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <IoIosMenu size="30" className="border-1 border-[#b0b0b0] rounded-sm p-[1px] lg:hidden" onClick={() => setShowModal(!showModal)} />
                </div>
            </div>

            {showModal && (
                <div>
                    {/* TODO: width lg 이하일때 모달창 만들기 */}
                </div>
            )}

        </header>
    );
}

export {AppHeader};