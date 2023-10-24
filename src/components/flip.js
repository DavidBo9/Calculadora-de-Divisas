import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';

function Flip(){
    
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    var temp = from;
    setFrom(to);
    setTo(temp);
}


// Flip = () =>{
// 		var temp = from;
// 		setFrom(to);
// 		setTo(temp);
// }

export default Flip