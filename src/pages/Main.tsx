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
            {/*상단 메인 배너*/}
                <section className="mt-[60px] w-full flex flex-col ">
                    <div className="flex flex-col items-center justify-center h-74 mt-4 bg-linear-135 from-[#667eea] to-[#764ba2]">
                        <h1 className="text-white text-5xl font-semibold mb-5">
                            Welcome To DevGroup!
                        </h1>
                        <p className="text-xl text-white mb-7 ">A collection of the best tools for development</p>
                        {/* 추후 shadcn 컴포넌트로 대체하기 */}
                        <label htmlFor="exploreBtn" className="flex justify-center items-center bg-white w-34 h-12 text-lg font-semibold rounded-sm">
                            <Search size="22" className="mr-1"/>
                            <button id="exploreBtn">Explore</button>
                        </label>
                    </div>
                </section>
            {/*Content*/}
                <section className="flex justify-center bg-[#f6f8fa] w-full pt-14">
                    {/*왼쪽 최신 리포지토리 리스트 & view more Button */}
                    <div className="flex flex-col">
                        <div className="mb-4 flex flex-col ???">
                            <h3 className="text-[20pt] text-[#24292e] mb-3">최신 리포지토리</h3>
                            <span className="text-[#24292e] text-[12pt]">커뮤니티에서 인기 있는 최신 리포지토리들을 확인해보세요.</span>
                        </div>
                        {repositoryList.map((item, index) => {
                            const IconComponent = item.thumbnailIcon;
                            const formatUpdateAt = item.updatedAt.replace('T', ' ').slice(0, 16);
                            return (
                                <div key={index} className="bg-white border p-4 w-150 mb-4 rounded-sm shadow-md">
                                    <div className="flex items-center mb-2">
                                        <IconComponent size="26" className="border mr-3"/>
                                        <h5 className="text-[16pt]">{item.title}</h5>
                                    </div>
                                    <span className="font-light text-[12pt]">{item.introduction}</span>
                                    <Separator className="mt-4 mb-4"/>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <FaThumbsUp color="#2496ed" className="mr-1"/>
                                            <span className="mr-3">{item.likeCount}</span>
                                            <IoEyeSharp color="#4D9F00FF" size="18" className="mr-1"/>
                                            <span className="mr-3">{item.clickCount}</span>
                                            <Clock size="16" className="mr-1"/>
                                            <span>{formatUpdateAt}</span>
                                        </div>
                                        <div style={{backgroundColor: categoryBadgeColor[item.categoryEnName]}}
                                             className="flex flex-col justify-center w-fit h-5 px-2 text-white text-xs rounded-sm"
                                        >{item.categoryEnName}</div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="flex flex-col items-center mb-14 mt-2">
                            <label htmlFor="viewMoreBtn" className="flex border-[2px] w-fit px-4 py-1 rounded-sm border-[#2496ed] text-[#2496ed] text-xs">
                                <ChevronsRight/>
                                <button id="viewMoreBtn">더 많은 리포지토리 보기</button>
                            </label>
                        </div>
                    </div>

                    {/*오른쪽 시작하기 & 도움말/지원 block 두개*/}
                    <div className="flex flex-col ml-6">
                        <div className="flex flex-col border w-80 h-fit shadow-md mb-5">
                            <div className="flex px-3 py-2 items-center bg-[#f6f8fa] text-[12pt]">
                                <FaRocket color="#2496ed"/>
                                <p className="ml-2">시작하기</p>
                            </div>
                            <div className="flex flex-col border-t h-38 bg-white p-3 justify-around text-[10pt]">
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
                                <label htmlFor="startBtn" className="flex justify-center items-center bg-[#2496ed] text-white rounded-sm h-6 border-[#2496ed] mt-2">
                                    <ChevronsRight size="14"/>
                                    <button id="startBtn" className="ml-1">시작하기</button>
                                </label>
                            </div>
                        </div>
                        <div className="border shadow-md w-80">
                            <div className="flex px-3 py-2 items-center bg-[#f6f8fa] text-[12pt]">
                                <FaLightbulb color="#ffc107"/>
                                <p className="ml-2">도움말 & 지원</p>
                            </div>
                            <div className="flex flex-col border-t h-37 bg-white p-3 text-[10pt]">
                                <p className="whitespace-pre-wrap mb-4 leading-relaxed">
                                    {`DevGroup 사용에 도움이 필요하신가요?\n다양한 지원 옵션을 확인해보세요.`}
                                </p>
                                <label htmlFor="supportBtn"
                                       className="mb-2 flex justify-center items-center border border-[#2496ed] text-[#2496ed] w-full h-6 rounded-sm">
                                    <IoDocumentText size="14"/>
                                    <button id="viewDocumentBtn" className="ml-1 text-[12px]">문서 보기</button>
                                </label>
                                <label htmlFor="supportBtn"
                                       className="flex justify-center items-center border border-[#717171FF] text-[#717171FF] w-full h-6 rounded-sm">
                                    <MdOutlineSupport size="14"/>
                                    <button id="supportBtn" className="ml-1 text-[12px]">지원 요청</button>
                                </label>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export {Main};