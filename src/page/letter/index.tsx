import Vara from 'vara';
import {useEffect} from "react";

let timer: number;

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
                    duration: 3000,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Aku sangat bersyukur kenal dengan kamu, sangat senang ketika ngobrol sama kamu, dan sangat bahagia karena dikit lagi aku jadi suami kamu.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Terima kasih udah hadir di hidup aku, selalu menghadapi sikap aku yang macem-macem, apalagi kalo udah tengah malem.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Aku mendoakan kamu agar sehat selalu, mendapatkan hal-hal yang terbaik, dan dikelilingi oleh orang-orang baik.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Dan...",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Kamu orang yang aku selalu tunggu kabarnya.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center',
                },
                {
                    text: "Aku selalu excited kalo denger cerita kamu, tentang apapun itu.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center',
                },
                {
                    text: "Really Love Everything About U",
                    color: 'gold',
                    textAlign: 'center',
                    fontSize: 30,
                },
                {
                    text: "Happy Birthday,",
                    color: 'pink',
                    fontSize: 25,
                    textAlign: 'center'
                },
                {
                    text: "My Love",
                    color: 'pink',
                    letterSpacing: 2,
                    fontSize: 30,
                    textAlign: 'center'
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