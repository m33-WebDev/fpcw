import { Card } from "react-bulma-components";
import { Typography } from "./style";

interface SplashTileProps {
    title: string;
    to: string;
    image: string;
}

export function SplashTile(props: SplashTileProps) {
    return (
        <a href={props.to}>
            <Card style={{ overflow: "hidden" }} className="h-full relative">
                <img
                    src={props.image}
                    alt="Splash"
                    style={{ objectFit: "cover", minHeight: "100%" }}
                />
                <h2 className="border-l-0 border-4 border-green-500 absolute bottom-[10%] left-0 p-1 text-left bg-[#48c774] max-w-[70%]">
                    <Typography>{props.title}</Typography>
                </h2>
            </Card>
        </a>
    );
}
