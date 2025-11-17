import {Search} from 'lucide-react'
import {repositoryList} from '@/assets/testData';
import {Separator} from "@/components/ui";

function Main() {

    return (
        <>
            {/*상단 메인 배너*/}
            <section className="mt-[56px]  w-full flex flex-col">
                <div className="flex flex-col items-center justify-center h-50 mt-4 bg-linear-135 from-[#667eea] to-[#764ba2]">
                    <h1 className="text-white text-5xl font-semibold mb-3">
                        Welcome To DevGroup!
                    </h1>
                    <p className="text-white mb-5 ">A collection of the best tools for development</p>
                    {/* 추후 shadcn 컴포넌트로 대체하기 */}
                    <label htmlFor="exploreBtn" className="flex bg-white w-18 h-5">
                        <Search/>
                        <button id="exploreBtn">Explore</button>
                    </label>
                </div>
            </section>
            {/*Content*/}
            <section className="flex ">
                {/*왼쪽 최신 리포지토리 리스트 & view more Button */}
                <div>
                    <h3>최신 리포지토리</h3>
                    <span>커뮤니티에서 인기 있는 최신 리포지토리들을 확인해보세요.</span>
                    {repositoryList.map((item, index) => {
                        const IconComponent = item.thumbnailIcon;
                        return (
                            <div key={index}>
                                <div>
                                    <IconComponent/>
                                    <h5>{item.title}</h5>
                                </div>
                                <span>{item.introduction}</span>
                                <Separator className=""/>
                            </div>
                        );
                    })}
                </div>
                {/*오른쪽 시작하기 & 도움말/지원 block 두개*/}
                <div>
                    <p>시작하기</p>
                </div>
            </section>
        </>
    );
}

export {Main};