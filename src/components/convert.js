
import { useEffect, useState } from 'react';
import 'react-dropdown/style.css';

function Convert(){
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [output, setOutput] = useState(0);
    
    var rate = info[to];
    setOutput(input * rate);
}


export default Convert