import {Search, FaArrowRotateRight, FaFilter, Check} from "@/assets/icons";
import {useEffect, useState} from "react";
import {getUseCategories} from "@/api/infoApi.ts";
import type {CategoryInfo} from "@/types/info.ts";
import {SubBox} from "@/components"
import {Separator} from "@/components/ui";

const Explorer = () => {
    const [categories, setCategories] = useState<CategoryInfo[]>();

    useEffect(() => {
        try {
            getUseCategories().then(res => {
                const result = res.data;
                setCategories(result);
            });
        } catch (error) {
            console.log(error)
        }
    }, [])

    return <>
        <section className="w-full flex flex-col">
            <div className="flex flex-col mt-6 bg-[var(--bg-gray)] h-[180px] pl-[80px] justify-center border-b">
                <h3 className="text-[45px] font-light mb-[10px]">DevTools Explorer</h3>
                <span className="text-[18px] font-light mb-[6px]">Discover a variety of developer tools</span>
            </div>
            <div className="flex flex-col items-center shadow-md">
                <div
                    className=" flex items-center justify-center border w-3/4 h-[100px] my-[24px] rounded-sm gap-[18px] px-[20px]">
                    <input type="text" className="border rounded-sm w-4/5 h-[42px] px-[16px] text-[16px]"
                           placeholder="docs, plugins, web... serch"/>
                    <button
                        className="flex bg-[var(--btn-blue)] text-[#fff] text-[16px] w-fit h-[42px] px-[16px] items-center justify-center rounded-sm gap-[4px] shrink-0">
                        <Search color="#fff" size="18" className=""/> 검색
                    </button>
                    <button
                        className="flex items-center text-[16px] w-fit h-[42px] px-[16px] border rounded-sm gap-[4px] shrink-0">
                        <FaArrowRotateRight size="18"/> 초기화
                    </button>
                </div>
                <div className="flex">
                    <div className="border">
                        <SubBox titleIcon={<FaFilter size="16px"/>} title={'Filter by'} boxWidth="w-[280px]"
                                content={<>
                                    <div className="flex flex-col gap-[4px]">
                                        <span className="text-[16px]">Categories</span>
                                        {categories?.map((category, idx) => (
                                            <label key={idx} htmlFor={`category_chk_${category.id}`} className="inline-flex items-center">
                                                <input type="checkbox" id={`category_chk_${category.id}`} name="categories" value={category.id} className="hidden peer"/>
                                                <div className="border rounded-sm w-[18px] h-[18px] mr-[4px] peer-checked:bg-[var(--btn-blue)] peer-checked:[&_svg]:block">
                                                    <Check size="16" color="white" className="hidden "/>
                                                </div>
                                                <span className="ml-[4px]">{category.enName}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <Separator className="my-[20px]"/>
                                    <div className="flex flex-col">
                                        <span>정렬</span>
                                        <input type="radio" value="stars"/>
                                    </div>
                                </>}
                        />
                        <SubBox titleIcon="" title="인기토픽" boxWidth="w-[280px]"
                                content={<></>}
                        />
                    </div>
                    <div className="border">DevTool List</div>
                </div>
            </div>
        </section>
    </>;
}

export {Explorer};