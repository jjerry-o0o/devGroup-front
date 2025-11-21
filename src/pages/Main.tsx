import {Search, FaThumbsUp, IoEyeSharp, Clock, ChevronsRight, FaRocket, Check, FaLightbulb, IoDocumentText, MdOutlineSupport} from '@/assets/icons'
import {repositoryList} from '@/assets/testData';
import {Separator} from "@/components/ui";

const categoryBadgeColor: Record<string, string> = {
    Official: '#2496EDFF',
    Web: '#6EB185',
    Programs: '#CD3931',
    AI: '#7B8E0B',
    Plugins: '#FFC107',
    CodingTest: '#BF35B7',
    Etc: '#4E4E4E',
};

function Main() {
    return (
        <>
            {/*<div className="flex flex-col">*/}
            {/*상단 메인 배너*/}
            <section className="w-full flex flex-col ">
                <div className="flex flex-col items-center justify-center h-94 mt-4 bg-linear-135 from-[#667eea] to-[#764ba2]">
                    <h1 className="text-white text-center text-[50px] font-semibold mb-4">
                        Welcome To DevGroup!
                    </h1>
                    <p className="text-[24px] text-center text-white mb-12">A collection of the best tools for development</p>
                    {/* 추후 shadcn 컴포넌트로 대체하기 */}
                    <label htmlFor="exploreBtn" className="flex justify-center items-center bg-white w-42 h-14 text-[22px] font-semibold rounded-sm">
                        <Search size="22" className="mr-2"/>
                        <button id="exploreBtn">Explore</button>
                    </label>
                </div>
            </section>
            {/*Content*/}
            <section className="flex justify-center items-center bg-[#f6f8fa] w-full pt-14 flex-col lg:flex-row">
                {/*왼쪽 최신 리포지토리 리스트 & view more Button */}
                <div className="flex flex-col">
                    <div className="mb-4 flex flex-col">
                        <h3 className="text-[26px] text-[#24292e] mb-3 font-semibold">최신 리포지토리</h3>
                        <span className="text-[#24292e] text-[18px]">커뮤니티에서 인기 있는 최신 리포지토리들을 확인해보세요.</span>
                    </div>
                    {repositoryList.map((item, index) => {
                        const IconComponent = item.thumbnailIcon;
                        const formatUpdateAt = item.updatedAt.replace('T', ' ').slice(0, 16);
                        return (
                            <div key={index} className="bg-white border p-4 w-[800px] mb-6 rounded-sm shadow-md">
                                <div className="flex items-center mb-2 px-1">
                                    <IconComponent size="50" className="border mr-3 p-1"/>
                                    <h5 className="text-[24px]">{item.title}</h5>
                                </div>
                                <span className="text-[#636363FF] text-[16px] px-1">{item.introduction}</span>
                                <Separator className="mt-4 mb-4"/>
                                <div className="flex justify-between items-center px-1">
                                    <div className="flex items-center text-[16px]">
                                        <FaThumbsUp color="#2496ed" size="18" className="mr-2"/>
                                        <span className="mr-4">{item.likeCount}</span>
                                        <IoEyeSharp color="#4D9F00FF" size="20" className="mr-2"/>
                                        <span className="mr-4">{item.clickCount}</span>
                                        <Clock size="18" className="mr-2"/>
                                        <span>{formatUpdateAt}</span>
                                    </div>
                                    <div style={{backgroundColor: categoryBadgeColor[item.categoryEnName]}}
                                         className="flex flex-col justify-center w-fit h-6 px-3 text-white text-[16px] rounded-sm"
                                    >{item.categoryEnName}</div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex flex-col items-center mb-6 lg:mb-14 mt-2">
                        <label htmlFor="viewMoreBtn"
                               className="flex border-[2px] w-[350px] justify-center lg:w-fit px-4 py-1 rounded-sm border-[#2496ed] text-[#2496ed] text-[20px] lg:text-[16px]">
                            <ChevronsRight/>
                            <button id="viewMoreBtn">더 많은 리포지토리 보기</button>
                        </label>
                    </div>
                </div>

                {/*오른쪽 시작하기 & 도움말/지원 block 두개*/}
                <div className="flex flex-col lg:ml-6 mb-12">
                    <div className="flex flex-row lg:flex-col gap-[20px]">
                        <div className="border shadow-md w-[390px] lg:w-[400px] mb-[16px]">
                            <div className="flex px-4 py-3 items-center bg-[#f6f8fa] text-[18px] lg:text-[16px]">
                                <FaRocket size="20" color="#2496ed"/>
                                <p className="ml-2 ">시작하기</p>
                            </div>
                            <div className="flex flex-col border-t h-46 bg-white px-4 py-3 justify-around text-[16px]">
                                <div className="flex items-center">
                                    <Check color="#4D9F00FF" strokeWidth={3} size={15}/>
                                    <span className="ml-2">도구 탐색하기</span>
                                </div>
                                <div className="flex items-center">
                                    <Check color="#4D9F00FF" strokeWidth={3} size={15}/>
                                    <span className="ml-2 ">즐겨찾기 추가하기</span>
                                </div>
                                <div className="flex items-center">
                                    <Check color="#4D9F00FF" strokeWidth={3} size={15}/>
                                    <span className="ml-2 ">도구를 통해 개발 생산성 증가하기</span>
                                </div>
                                <label htmlFor="startBtn"
                                       className="flex justify-center items-center bg-[#2496ed] text-white rounded-sm h-10 lg:h-8 border-[#2496ed] mt-2">
                                    <ChevronsRight size="14"/>
                                    <button id="startBtn" className="ml-1">시작하기</button>
                                </label>
                            </div>
                        </div>

                        <div className="border shadow-md w-[390px] lg:w-[400px] h-fit">
                            <div className="flex px-4 py-3 items-center bg-[#f6f8fa] text-[18px] lg:text-[16px]">
                                <FaLightbulb size="20" color="#ffc107"/>
                                <p className="ml-2">도움말 & 지원</p>
                            </div>
                            <div className="flex flex-col border-t bg-white  px-4 pt-3 pb-4 text-[16px]">
                                <p className="whitespace-pre-wrap mb-4 leading-relaxed">
                                    {`DevGroup 사용에 도움이 필요하신가요?\n다양한 지원 옵션을 확인해보세요.`}
                                </p>
                                <label htmlFor="supportBtn"
                                       className="mb-2 flex justify-center items-center border border-[#2496ed] text-[#2496ed] w-full h-10 lg:h-8 rounded-sm">
                                    <IoDocumentText size="14"/>
                                    <button id="viewDocumentBtn" className="ml-1">문서 보기</button>
                                </label>
                                <label htmlFor="supportBtn"
                                       className="flex justify-center items-center border border-[#717171FF] text-[#717171FF] w-full h-10 lg:h-8 rounded-sm">
                                    <MdOutlineSupport size="14"/>
                                    <button id="supportBtn" className="ml-1">지원 요청</button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*</div>*/}
        </>
    );
}

export {Main};