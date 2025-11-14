// import {Separator} from "@/components/ui";
import {Search} from 'lucide-react'

function AppHeader() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1600px] flex items-center justify-between px-4 py-3">
        {/* 좌측 */}
        <div className="flex gap-5 items-center">
          <div className="font-semibold text-white text-2xl">DevGroup</div>
          <div className="font-light text-white">Explore</div>
          {/*<Separator orientation="vertical" className="!h-4"/>*/}
          <div className="font-light text-white">Support</div>
        </div>
        {/* 우측 */}
        <div className="flex items-center gap-5">
          {/*검색창*/}

          <label htmlFor="search" className="flex border w-84 h-6 border-[#626262] rounded-sm justify-end items-center pr-2 pl-2">
            <input id="serach" type="text" placeholder="Search repositories, images..."
                   className="placeholder-[#626262] flex-1"/>
            <Search color="#626262" size="16"/>
          </label>
          {/*로그인 + 토글*/}
          <div className="font-light text-muted-foreground hover:text-white transition-all duration-500">
            Login / Join
            <div className=""></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export {AppHeader};