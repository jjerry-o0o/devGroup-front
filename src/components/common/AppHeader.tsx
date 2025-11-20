import {Search, IoIosMenu} from '@/assets/icons'

function AppHeader() {
    return (
        <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-white shadow-md">
            <div className="w-full max-w-[1800px] flex items-center justify-between px-4 py-3">
                {/* 좌측 */}
                <div className="flex gap-5 items-center">
                    <div className="font-semibold text-black text-[24px]">DevGroup</div>
                    <div className="hidden lg:flex gap-5">
                        <div className="text-[#24292e] text-[18px]">Explore</div>
                        <div className="text-[#24292e] text-[18px]">Support</div>
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
                    {/*로그인 + 토글*/}
                    <div className="text-[#24292e] hover:bg-[#667eea] hover:text-white px-2 py-1 rounded-sm transition-all duration-300 text-[16px] hidden lg:flex">
                        Login / Join
                        <div className=""></div>
                    </div>
                    <IoIosMenu size="30" className="border-1 border-[#b0b0b0] rounded-sm p-[1px] lg:hidden"/>
                </div>
            </div>
        </header>
    );
}

export {AppHeader};