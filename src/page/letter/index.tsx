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
                    text: "To the prettiest woman I have ever seen.",
                    fontSize: 18,
                    duration: 3000,
                    letterSpacing: 2,
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "And the greatest mom for our little kid.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 4000,
                    textAlign: 'center'
                },
                {
                    text: "Every day I still catch myself looking at you, grateful that you chose us.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Thank you for the warmth you pour into our home, and the gentle love you give our child.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "Watching you be a mother is the most beautiful thing I have ever witnessed.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center'
                },
                {
                    text: "You are my forever, my peace, my favorite person.",
                    color: 'white',
                    letterSpacing: 2,
                    fontSize: 18,
                    duration: 5000,
                    textAlign: 'center',
                },
                {
                    text: "I love you more than yesterday, and somehow still less than tomorrow.",
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