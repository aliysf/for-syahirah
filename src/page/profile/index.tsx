import Syg from "../../assets/syg.png";
import Coklat from "../../assets/coklat.png";
import Bunga from "../../assets/bunga.png";
import Betiga from "../../assets/betiga.gif";
import potobot from "../../assets/potobot.png";
import beduawisuda from "../../assets/bedua-wisuda.png";
import bedualamaran from "../../assets/bedua-lamaran.png";
import beduacosplay from "../../assets/bedua-cosplay.png";
import beduamakan from "../../assets/bedua-makan.png";
import jalan1 from "../../assets/jalan1.png";
import ucing from "../../assets/ucing.png";
import {useState} from "react";

const Profile = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={'text-center flex flex-col items-center gap-[12px] w-full'}>
            <img src={Syg} className={'rounded-full w-[150px] h-[150px] object-cover mt-[20px]'}/>
            <h1 className={'text-[20px] font-bold'}>Syahirah / Husna / Runa / Ruby</h1>
            {show &&
                <h1 className={'text-[20px] font-bold px-[10px] py-[2px] rounded-md animated-background bg-gradient-to-r from-purple-400 via-rose-300 to-violet-400'}>Princess
                    / Ayang</h1>}
            <h1 className={'text-[14px] mb-[20px]'} onClick={() => setShow((pre) => !pre)}>👀 Click to show new names!
                👀</h1>

            <div className={'flex flex-col gap-[4px] w-full'}>
                <h2 className={'text-left font-bold text-[20px]'}>Archive</h2>
                <div className={'flex overflow-x-scroll flex-nowrap no-scrollbar snap-x'}>

                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={Coklat} alt=""/>
                        <h3 className={'text-left'}>🍫</h3>
                    </div>
                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={jalan1} alt=""/>
                        <h3 className={'text-left'}>🍨</h3>

                    </div>

                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={Betiga} alt=""/>
                        <h3 className={'text-left'}>📷</h3>
                    </div>

                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={Bunga} alt=""/>
                        <h3 className={'text-left'}>ִ🌷</h3>
                    </div>

                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={potobot} alt=""/>
                        <h3 className={'text-left'}>📸</h3>
                    </div>
                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={ucing} alt=""/>
                        <h3 className={'text-left'}>✨</h3>

                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-[4px] w-full'}>
                <h2 className={'text-left font-bold text-[20px]'}>Us</h2>
                <div className={'flex overflow-x-scroll flex-nowrap no-scrollbar snap-x'}>
                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={bedualamaran} alt=""/>
                    </div>
                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={beduamakan} alt=""/>
                    </div>
                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={beduawisuda} alt=""/>
                    </div>
                    <div className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                        <img className="rounded w-[152px] h-[152px] object-cover"
                             src={beduacosplay} alt=""/>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col gap-[4px] mb-[150px] w-full'}>
                <h2 className={'text-left font-bold text-[20px] mb-[4px]'}>Playlist</h2>
                <iframe style={{"borderRadius": "12px"}}
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1EJBEqCydrBGEi?utm_source=generator"
                        width="100%" height="152" frameBorder="0" allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
            </div>

        </div>
    );
};

export default Profile;