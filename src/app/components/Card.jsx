/**
 * @author Fuyuan Cheng <gloomcheng@gmail.com>
 */
import Image from "next/image";
export default function CustomCard({item}) {
    return (
        <div className="border">
            <image src={item.Picture.PictureUrl1}alt={item.Picture.PictureDescription}/>
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}