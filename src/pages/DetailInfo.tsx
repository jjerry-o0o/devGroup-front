import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {GiPlasticDuck, IoLink, TbExternalLink, FaInfoCircle, GoHeartFill, GoHeart, IoEyeSharp, Clock, IoDocumentText} from '@/assets/icons'
import {Separator} from "@/components/ui";

const DetailInfo = () => {
    const {id} = useParams();
    const [repositoryInfo, setRepositoryInfo] = useState();

    useEffect(() => {
        try {
            axios.get(`http://localhost:8099/api/info/${id}`)
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
            <section className="flex flex-col w-full mt-6 h-fit bg-[#f6f8fa] px-[67px]">
                <div className="flex w-full pt-8 mb-10">
                    {repositoryInfo?.thumbnailPath || repositoryInfo?.thumbnailWebLink
                        ? <img src={repositoryInfo?.thumbnailPath ?? repositoryInfo?.thumbnailWebLink} alt={repositoryInfo?.title} height="120" width="120"
                               className="border mr-3 p-1 rounded-xl bg-white"/>
                        : <GiPlasticDuck size="50" className="border mr-3 p-1"/>
                    }
                    <div className="flex flex-col gap-2">
                        <span className="text-[36px] font-[600]">{repositoryInfo?.title}</span>
                        <span className="flex items-center text-[#136ffe] text-[16px]"><IoLink className="mr-4" size="18"/>{repositoryInfo?.url}<TbExternalLink
                            className="ml-1"/></span>
                        <span className="flex items-center text-[16px]"><FaInfoCircle className="mr-4 text-[#136ffe] "/>{repositoryInfo?.introduction}</span>
                    </div>
                </div>
                <div className="flex border rounded-xl bg-white w-full p-5 mb-8 justify-between">
                    <div className="flex gap-4">
                        <div className="flex items-center bg-[#f6f8fa] w-fit gap-2 p-2">
                            <GoHeartFill size="14" color="#dc3545"/><span className="font-[600]">{repositoryInfo?.likeCount}</span> likes
                        </div>
                        <div className="flex items-center bg-[#f6f8fa] w-fit gap-2 p-2">
                            <IoEyeSharp size="15" color="#136ffe"/><span className="font-[600]">{repositoryInfo?.clickCount}</span> views
                        </div>
                    </div>
                    <div className="flex items-center bg-[#f6f8fa] w-fit gap-2 p-2"><Clock size="15" color="#136ffe"/>{repositoryInfo?.updatedAt}</div>
                </div>
            </section>
            <section className="bg-white border-t px-[67px] pt-8">
                <span className="flex items-center text-[26px] font-[600]"><IoDocumentText color="#136ffe" size="30" className="mr-2"/>Overview</span>
                <Separator className="mt-3 mb-4 bg-[#8b949e]"/>
                <div className="flex justify-center gap-3 border bg-[#f6f8fa] p-4">
                    <label htmlFor="visitBtn" className="flex items-center w-fit border py-4 px-5 rounded-full text-[16px] text-white font-[600] bg-linear-135 from-[#667eea] to-[#136ffe]">
                        <TbExternalLink className="mr-2" size="20"/>
                        <button id="visitBtn">Visit Site</button>
                    </label>
                    <label htmlFor="likedBtn" className="flex items-center w-fit border-2 py-4 px-5 rounded-full text-[16px]">
                        {/*<GoHeartFill className="mr-2" size="20"/>*/}
                        <GoHeart className="mr-2" size="20"/>
                        <button id="likedBtn">Liked</button>
                    </label>
                </div>
            </section>
        </div>
    );
}

export {DetailInfo};