import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import Convert from './convert'; // Componente Conversor de divisas
import Flip from './flip'; //Componente Flip de divisas

export const Currency = () => {
    const [info, setInfo] = useState([]);
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);

    // API DE DIVISAS https://github.com/fawazahmed0/currency-api#readme
    useEffect(() => {
        Axios.get(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
           .then((res) => {
                setInfo(res.data[from]);
            })
    }, [from]);

    useEffect(() => {
        setOptions(Object.keys(info));
        <Convert />;
    }, [info])

    return (
		<div className="App">
			<div className="heading">
				<h1>Calculadora de divisas</h1>
			</div>
			<div className="container">
				<div className="left">
					<h3>Cantidad</h3>
					<input type="text"
						placeholder="Enter the amount"
						onChange={(e) => setInput(e.target.value)} />
				</div>
				<div className="middle">
					<h3>De</h3>
					<Dropdown options={options}
						onChange={(e) => { setFrom(e.value) }}
						value={from} placeholder="From" />
				</div>
				<div className="switch">
					<HiSwitchHorizontal size="30px"
						onClick={() => { <Flip/> }} />
				</div>
				<div className="right">
					<h3>A</h3>
					<Dropdown options={options}
						onChange={(e) => { setTo(e.value) }}
						value={to} placeholder="To" />
				</div>
			</div>
			<div className="result">
				<button onClick={() => {<Convert/>}}>Calcular</button>
				<h2>Cantidad convertida:</h2>
				<p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>

			</div>
		</div>
	);
}