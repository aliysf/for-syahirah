import Vara from 'vara';
import {useEffect} from "react";

let timer;

function pageScroll() {
    window.scrollBy(0, 0.5);
    timer = setTimeout(pageScroll, 10);
}

const Letter = () => {
    useEffect(() => {
        new Vara(
            "#vara-container",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
            [
                {
                    text: "Hi Syahirah!",
                    fontSize: 30,
                    color: 'white',
                    strokeWidth: 1,
                    textAlign: 'center',
                },
                {
                    text: "Disini tulisan aku lebih bagus hehe.",
                    fontSize: 18,
                    duration: 2000,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Aku sangat bersyukur kenal dengan kamu, aku mungkin banyak kurangnya, sering kepo, sering debat hal ga penting, bawel, untungnya kamu tetep bersabar yahh.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Aku tau aku udah berkali-kali ngucapin ini, kamu itu pinter banget, punya pemikiran yang dewasa, dan tentunya cantik sekaliii!!",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Kamu harus tetep bahagia yah, boleh kok ngedumel tipis-tipis, orang sekitar kamu selalu ingin ngebikin kamu senang setiap harinya, termasuk aku.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 3000,
                    textAlign: 'center'
                },
                {
                    text: "Aku selalu excited kalo denger cerita kamu, tentang apapun itu.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 2000,
                    textAlign: 'center',
                },
                {
                    text: "Really Love Everything About U",
                    color: 'gold',
                    textAlign: 'center',
                    fontSize: 30,
                },
            ]
        );
        pageScroll()
        return () => {
            clearTimeout(timer)
        }
    }, []);
    return (
        <div id={'vara-container'} className={'mb-[150px] mt-[150px]'}>

        </div>
    );
};

export default Letter;