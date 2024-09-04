import Vara from 'vara';
import {useEffect} from "react";

const Search = () => {
    useEffect(() => {
        new Vara(
            "#vara-container",
            "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
            [
                {
                    text: "Hi Syahirah!",
                    fontSize: 40,
                    strokeWidth: 0.7,
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Disini tulisan aku lebih bagus hehe.",
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Aku sangat bersyukur kenal dengan kamu, aku mungkin banyak kurangnya, sering kepo, sering debat hal ga penting, bawel, untungnya kamu tetep bersabar yh.",
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Aku tau aku udah berkali-kali ngucapin ini, kamu itu pinter banget, punya pemikiran yang dewasa, dan baikkkkk banget",
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Tapi, kamu harus tetep bahagia yah, ngedumel tipis-tipis gapapa, orang sekitar kamu selalu berharap kamu senang setiap harinya.",
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Aku selalu bangga & kagum kalo denger cerita kamu.",
                    color: 'white',
                    textAlign: 'center'
                },
                {
                    text: "Really Love Everything About U",
                    color: 'gold',
                    textAlign: 'center',
                    fontSize: 40,

                },

            ]
        );
    }, []);
    return (
        <div id={'vara-container'} className={'mb-[130px] mt-[50px]'}>

        </div>
    );
};

export default Search;