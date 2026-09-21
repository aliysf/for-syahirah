import Wisuda from '../../assets/wisuda.png'
import Engagement from '../../assets/engagement.png'
import Yudisium from '../../assets/yudisium.png'
import Princess from '../../assets/princess.png'
import First from '../../assets/first.png'
import TypeIt from "typeit-react";
import Syg from "../../assets/syg.png";
import Bangkok from "../../assets/bangkok.png";
import Marry from "../../assets/marry.jpeg";
import Mina from "../../assets/mina.png";
import Dinner from "../../assets/bedua-makan.png";
import Pregnancy from "../../assets/pregnancy.jpg";
import HasanBirthday from "../../assets/hasan-birthday.jpg";
import Birthday23 from "../../assets/birthday-23.png";
import {useNavigate} from "react-router-dom";
import {formatDistanceToNow} from "date-fns";

const Header = () => {
    return (
        <div
            className={'h-[72px] bg-[#242424] w-full left-0 flex items-center justify-between py-[20px]'}>
            <div className={'text-[24px]'}>
                Hi There!
            </div>
            <div>
                <img className={'w-[50px] h-[50px] rounded-full bg-white object-cover'} src={Syg}></img>
            </div>
        </div>
    )
}

const memories = [
    {src: First, title: 'First'},
    {src: Engagement, title: 'Lamaran uhuy'},
    {src: Princess, title: 'Cosplay Princess'},
    {src: Yudisium, title: 'Mam Bareng'},
    {src: Wisuda, title: 'Cie Sarjana'},
    {src: Mina, title: 'Main bareng :)'},
]

const datedEvents = [
    {src: Marry, title: 'Wedding 💍', date: '2024-11-01'},
    {src: Bangkok, title: 'Bangkok ✈️', date: '2024-11-25'},
    {src: Pregnancy, title: 'Pregnancy 🤰', date: '2025-03-01'},
    {src: Birthday23, title: '23rd Birthday 🥳', date: '2025-09-21'},
    {src: HasanBirthday, title: "Hasan's 1st Birthday 🎂", date: '2026-09-01'},
    {src: Dinner, title: 'Dinner 🍽️', date: '2026-11-01'},
].sort((a, b) => +new Date(a.date) - +new Date(b.date))

const startOfToday = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return today
}

const Home = () => {
    const navigate = useNavigate();
    const today = startOfToday()
    const pastEvents = datedEvents.filter((event) => new Date(event.date) <= today)
    const upcomingEvents = datedEvents.filter((event) => new Date(event.date) > today)

    return (
        <>
            <Header/>
            <div className={'flex flex-col gap-[20px]'}>
                <div
                    className={'rounded w-screen animated-background ml-[-16px] bg-gradient-to-r from-purple-400 via-rose-300 to-violet-400 h-[220px] text-left flex flex-col justify-center px-[16px] gap-[4px]'}>
                    <h3 className={'text-left font-bold text-[28px] text-neutral-800'}>Happy<span
                        className={'text-yellow-300'}> 24th</span> Birthday 🥳</h3>
                    <span className={'text-left font-bold text-[18px] leading-tight'}>
                    You are {' '}
                        <TypeIt getBeforeInit={(instance) => instance.options({
                            loop: true,
                            speed: 80
                        }).type('the prettiest woman I have ever seen.').pause(800).delete().type('the greatest mom for our kid.').pause(800).delete().type('my favorite person, always.').pause(800).delete().type('loved more than words can say.')}
                                className={'text-left font-bold text-[18px]'}></TypeIt>
                </span>
                    <button onClick={() => navigate('/letter')}
                            className={'w-fit mt-[4px] outline-none focus:outline-none'}>Open The
                        Letter {'   '}💌
                    </button>

                </div>

                <div className={'flex flex-col gap-[8px]'}>
                    <h2 className={'text-left font-bold text-[20px]'}>Jump Back In</h2>
                    <div className={'flex overflow-x-scroll flex-nowrap no-scrollbar snap-x'}>
                        {memories.map((memory) => (
                            <div key={memory.title}
                                 className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                                <img className="rounded w-[152px] h-[152px] object-cover"
                                     src={memory.src} alt=""/>
                                <h3 className={'text-left'}>{memory.title}</h3>
                            </div>
                        ))}
                        {pastEvents.map((event) => (
                            <div key={event.title}
                                 className="min-w-[168px] w-[168px] h-[198px] flex flex-col gap-[8px] py-[8px]">
                                <img className="rounded w-[152px] h-[152px] object-cover"
                                     src={event.src} alt=""/>
                                <h3 className={'text-left'}>{event.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={'flex flex-col gap-[4px] mb-[150px]'}>
                    <h2 className={'text-left font-bold text-[20px]'}>Coming Soon &#128522;</h2>
                    <div className={'flex overflow-x-scroll flex-nowrap no-scrollbar snap-x'}>
                        {upcomingEvents.map((event) => (
                            <div key={event.title}
                                 className="min-w-[168px] w-[168px] h-[240px] flex flex-col gap-[8px] py-[8px]">
                                <img className="rounded w-[152px] h-[152px] object-cover"
                                     style={{filter: "grayscale(100%)"}}
                                     src={event.src} alt=""/>
                                <div>
                                    <h3 className={'text-left'}>{event.title}</h3>
                                    <h4 className={'text-left'}>{formatDistanceToNow(new Date(event.date))}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
