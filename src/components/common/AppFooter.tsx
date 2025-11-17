import {Separator} from "@/components/ui";
import {FaTwitter, FaFacebook, FaLinkedin, FaYoutube, IoLogoGithub} from "@/assets/icons/index.ts"

function AppFooter() {
    const linkList = [
        {subTitle: 'Product',  list: ['Features','Explore']},
        {subTitle: 'Support',  list: ['Support','Contact DevGroup']},
        {subTitle: 'Company',  list: ['About','Blog']},
    ]

    return (
        <div className="w-full h-90 px-40 pt-10 bg-[#24292e]">
            <div className="flex justify-around text-[#8b949e]">
                {linkList.map((link, index) => (
                    <div key={index}>
                        <h5 className="text-xl mb-6">{link.subTitle}</h5>
                        <ul className="flex flex-col gap-1.5 font-light">
                            {link.list.map((item, index) => (
                                <li key={index}><a href="#">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
            <Separator className="my-6 bg-[#8b949e]"/>
            <div className="flex justify-between">
                <div className="flex gap-2 items-end">
                    <span className="font-semibold text-white text-lg">DevGroup</span>
                    <span className="text-[#8b949e]">© 2025 DevGroup, Inc.</span>
                </div>
                <div className="flex gap-4 items-end">
                    <FaTwitter className="size-5 text-[#8b949e]"/>
                    <FaFacebook className="size-5 text-[#8b949e]"/>
                    <FaLinkedin className="size-5 text-[#8b949e]"/>
                    <FaYoutube className="size-5 text-[#8b949e]"/>
                    <IoLogoGithub className="size-5 text-[#8b949e]"/>
                </div>
            </div>
        </div>
    );
}

export {AppFooter};