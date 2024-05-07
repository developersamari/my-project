import React from "react";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Store=(props)=>{
return(
    <div className="flex flex-col gap-2.5 mt-16 w-48 shadow-2xl">
        <img className="w-48" src={props.img}/>
        <h1 className="text-center">{props.title}</h1>
        <h5 className="text-center">${props.cunst}</h5>
        <Checkbox className="text-red" {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <button className="w-48 bg-zinc-400 p-3.5">افزودن به سبد خرید</button>
    </div>
)
}
export default Store;