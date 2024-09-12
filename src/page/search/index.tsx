import {useEffect, useState} from "react";

const Search = () => {
    const [img, setImg] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        const filter = search.includes('orange') ? '/orange' : '';
        if (search) fetch('https://cataas.com/cat' + filter).then((resp) => resp.blob().then((res) => setImg(URL.createObjectURL(res))))
    }, [search])

    return (
        <div className={'flex h-[calc(100vh_-_127px)] justify-center items-center flex-col gap-[20px]'}>
            <input value={search} placeholder={'Search Anything!'} className={'focus:outline-none p-[20px] text-center'}
                   onChange={(e) => setSearch(e.target.value)}/>
            {img && <img src={img} className={'w-[200px] h-[200px] object-cover rounded-full'} alt={'fetch'}/>}

            {!img && <span>Just in case kamu butuh refreshing :)</span>}
        </div>
    );
};

export default Search;