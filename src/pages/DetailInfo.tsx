import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {GiPlasticDuck, IoLink, TbExternalLink, FaInfoCircle, GoHeartFill, GoHeart, IoEyeSharp, Clock, IoDocumentText} from '@/assets/icons'
import {Separator} from "@/components/ui";
import type {RepositoryInfo} from "@/types/info.ts";
import {getRepositoryInfo, postLikeRepository} from "@/api/infoApi.ts";

const DetailInfo = () => {
    const {id} = useParams();
    const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo>();
    const likedStorageKey = 'repository_like_list'
    const LikedStatus = useRef<boolean>(false);

    const toggleLiked = () => {
        const oldLikedList = JSON.parse(localStorage.getItem(likedStorageKey));
        const newLikedList = [];
        if (oldLikedList?.includes(id) || !oldLikedList) {
            oldLikedList?.map((item) => {
                if (item !== id) newLikedList.push(item);
            })
            LikedStatus.current = false;
        } else {
            newLikedList.push(oldLikedList);
            newLikedList.push(id);
            LikedStatus.current = true;
        }
        localStorage.setItem(likedStorageKey, JSON.stringify(newLikedList));

        // postLikeRepository(id)
        // .then(res => {
        //     if (res.data) {
        //         localStorage.setItem('repositoryInfo.like', 'liked');
        //         Liked.current = true;
        //     }
        // })
    }

    useEffect(() => {
        try {
            getRepositoryInfo(id)
            .then(res => {
                console.log('res : ', res.data)
                setRepositoryInfo(res.data);
            })
        } catch (error) {
            console.log('error : ', error)
        }
    }, []);

    return (
        <div className="">
            <section className="flex flex-col items-center mt-6 h-fit bg-[#f6f8fa] px-[67px]">
                <div className="flex flex-col max-w-[1320px] w-full">
                    <div className="flex pt-8">
                        {repositoryInfo?.thumbnailPath || repositoryInfo?.thumbnailWebLink
                            ? <img src={repositoryInfo?.thumbnailPath ?? repositoryInfo?.thumbnailWebLink} alt={repositoryInfo?.title}
                                   className="h-[120px] w-[120px] border mr-[12px] mb-[18px] p-1 rounded-xl bg-white
                                              hover:scale-105 hover:border-[#136ffe] transition-all duration-200 "/>
                            : <GiPlasticDuck size="50" className="border mr-3 p-1"/>
                        }
                        <div className="flex flex-col ml-4">
                            <span className="text-[36px] font-[600] mb-[10px]">{repositoryInfo?.title}</span>
                            <div className="flex">
                                <IoLink className="mr-4" size="18" color="#136ffe"/>
                                <span
                                    className="flex items-center text-[#136ffe] text-[16px] mb-[5px] hover:text-black hover:border-b hover:border-black hover:mb-[4px]"
                                    onClick={() => window.open(repositoryInfo?.url)}>
                                    {repositoryInfo?.url}<TbExternalLink className="ml-1"/>
                                </span>
                            </div>
                            <span className="flex items-center text-[16px]">
                                <FaInfoCircle className="mr-4 text-[#136ffe] "/>{repositoryInfo?.introduction}
                            </span>
                        </div>
                    </div>
                    <div className="flex border rounded-xl bg-white w-full p-6 mb-8 justify-between">
                        <div className="flex gap-4">
                            <div className="flex items-center bg-[#f6f8fa] w-fit gap-2 p-2">
                                <GoHeartFill size="14" color="#dc3545"/><span className="font-[600]">{repositoryInfo?.likeCount}</span> likes
                            </div>
                            <div className="flex items-center bg-[#f6f8fa] w-fit gap-2 p-2">
                                <IoEyeSharp size="15" color="#136ffe"/><span className="font-[600]">{repositoryInfo?.clickCount}</span> views
                            </div>
                        </div>
                        <div className="flex items-center bg-[#f6f8fa] w-fit gap-2 p-2">
                            <Clock size="15" color="#136ffe"/>{repositoryInfo?.updatedAt}
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center bg-white border-t px-[67px] pt-8">
                <div className="flex flex-col max-w-[1320px] w-full">
                    <span className="flex items-center text-[26px] font-[600]"><IoDocumentText color="#136ffe" size="30" className="mr-2"/>Overview</span>
                    <Separator className="mt-4 mb-8 bg-[#8b949e]"/>
                    <div className="flex justify-center gap-3 border bg-[#f6f8fa] py-8 mb-6">
                        <label htmlFor="visitBtn"
                               className="flex items-center w-fit border py-4 px-5 rounded-full text-[16px] text-white font-[600] bg-linear-135 from-[#667eea] to-[#136ffe]
                                          hover:scale-110 duration-200">
                            <TbExternalLink className="mr-2" size="20"/>
                            <button id="visitBtn">Visit Site</button>
                        </label>
                        <label htmlFor="likedBtn" onClick={() => toggleLiked(id)}
                               className="group flex items-center w-fit border-2 py-4 px-5 rounded-full text-[16px] hover:scale-110 duration-200">
                            {LikedStatus.current
                                ? <GoHeartFill className="hidden group-hover:block mr-2" size="20" color="#dc3545"/>
                                : <GoHeartFill className="hidden group-hover:block mr-2" size="20"/>}
                            <GoHeart className="group-hover:hidden mr-2" size="20"/>
                            <button id="likedBtn">Like</button>
                        </label>
                    </div>
                    <div className="border bg-white h-fit p-[32px] mb-[64px]">
                        {repositoryInfo?.description}
                    </div>
                </div>
            </section>
        </div>
    );
};

export {DetailInfo};