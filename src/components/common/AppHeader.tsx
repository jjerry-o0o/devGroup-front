// import {Separator} from "@/components/ui";
import {Search} from '@/assets/icons'

function AppHeader() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-white shadow-md">
      <div className="w-full max-w-[1800px] flex items-center justify-between px-4 py-3">
        {/* 좌측 */}
        <div className="flex gap-5 items-center">
          <div className="font-semibold text-black text-2xl">DevGroup</div>
          <div className="font-medium text-[#24292e]">Explore</div>
          {/*<Separator orientation="vertical" className="!h-4"/>*/}
          <div className="font-medium text-[#24292e]">Support</div>
        </div>
        {/* 우측 */}
        <div className="flex items-center gap-3">
          {/*검색창*/}
          <label htmlFor="search" className="flex border w-84 h-6 border-[#24292e] rounded-sm justify-end items-center pr-2 pl-2">
            <input id="serach" type="text" placeholder="Search repositories, images..."
                   className="placeholder-[#24292e] flex-1"/>
            <Search color="#24292e" size="16"/>
          </label>
          {/*로그인 + 토글*/}
          <div className="text-[#24292e] hover:bg-[#667eea] hover:text-white px-2 py-1 rounded-sm transition-all duration-500">
            Login / Join
            <div className=""></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export {AppHeader};