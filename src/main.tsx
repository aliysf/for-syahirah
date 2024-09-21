import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Outlet, RouterProvider, useLocation, useNavigate} from "react-router-dom";
import Home from "./page/home";
import Profile from "./page/profile";
import Search from "./page/search";
import Letter from "./page/letter";

const arrMusic = ["https://open.spotify.com/embed/track/5EcGSkkNBMAWOePvLgKde1?utm_source=generator", "https://open.spotify.com/embed/track/0T3pyPYtHAsxIRymAZsTkX?utm_source=generator", "https://open.spotify.com/embed/track/4TvZH3MgJ1ZNBPquN2xwjK?utm_source=generator", "https://open.spotify.com/embed/track/6h2ffmOUdlTNBCGEQHy8Oq?utm_source=generator", "https://open.spotify.com/embed/track/4NpEJp3Iw0Wk0lsPYQZeEF?utm_source=generator", "https://open.spotify.com/embed/track/3HEfLSVUo9rxdD0JxbLAUU?utm_source=generator"]

const Footer = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const randomMusic = arrMusic[Math.floor(Math.random() * arrMusic.length)];

    return (
        <footer className={'fixed bottom-0 w-full left-0'}>
            {!location.pathname.includes('letter') && !location.pathname.includes('library') &&
                <iframe style={{"borderRadius": "12px"}}
                        src={randomMusic}
                        width="100%" height="80" frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"></iframe>
            }
            <div className={'flex justify-around items-center bg-[#242424] w-full h-[70px] '}>
                <div className={'flex flex-col w-1/3 items-center justify-center gap-[4px]'}
                     onClick={() => navigate('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                         className="Svg-sc-ytk21e-0 bneLcE" width="24" height="24">
                        <path
                            d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
                            fill={window.location.pathname === '/' ? '#FFF' : '#B3B3B3'}></path>
                    </svg>
                    <div
                        className={window.location.pathname === '/' ? 'text-[11px] text-[#FFF]' : 'text-[11px] text-[#B3B3B3]'}>Home
                    </div>
                </div>
                <div className={'flex flex-col w-1/3 items-center justify-center gap-[4px]'}
                     onClick={() => navigate('/search')}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                         className="Svg-sc-ytk21e-0 bneLcE" width="24" height="24">
                        <path
                            d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"
                            fill={window.location.pathname === '/search' ? '#FFF' : '#B3B3B3'}></path>
                    </svg>
                    <div
                        className={window.location.pathname === '/search' ? 'text-[11px] text-[#FFF]' : 'text-[11px] text-[#B3B3B3]'}>Search
                    </div>
                </div>
                <div className={'flex flex-col w-1/3 items-center justify-center gap-[4px]'}
                     onClick={() => navigate('/library')}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                         className="Svg-sc-ytk21e-0 bneLcE" width="24" height="24">
                        <path
                            d="M14.5 2.134a1 1 0 0 1 1 0l6 3.464a1 1 0 0 1 .5.866V21a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 .5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zm6 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1z"
                            fill={window.location.pathname === '/library' ? '#FFF' : '#B3B3B3'}></path>
                    </svg>
                    <div
                        className={window.location.pathname === '/library' ? 'text-[11px] text-[#FFF]' : 'text-[11px] text-[#B3B3B3]'}>(Y)our
                        Library
                    </div>
                </div>
            </div>
        </footer>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <>
            <Outlet/>
            <Footer/>
        </>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/library",
                element: <Profile/>,
            },
            {
                path: "/search",
                element: <Search/>,
            },
            {
                path: "/letter",
                element: <Letter/>,
            },
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <div className={'max-w-[768px]'}>
        <RouterProvider router={router}/>
    </div>
)
