import type {ReactNode} from "react";

interface SubBoxProps {
    titleIcon: ReactNode | null;
    title: string;
    content: ReactNode;
}

const SubBox = ({titleIcon, title, content}: SubBoxProps) => {
    return <>
        <div className="border w-[280px] rounded-sm shadow-xl">
            <div className="flex items-center gap-[8px] pl-[14px] h-[40px] border-b bg-[var(--bg-gray)]">
                {titleIcon}
                <span className="text-[16px]">{title}</span>
            </div>
            <div className="pl-[16px] pt-[14px]">
                {content}
            </div>
        </div>
    </>;
}
export { SubBox }