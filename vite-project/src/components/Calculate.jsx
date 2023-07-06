import {useState} from "react";

export function Calculate() {
    let [first, setFirst] = useState(0)
    let [second, setSecond] = useState(0)
    let [result, setResult] = useState("KQ")
    console.log(result)
    const Evaluate = (first, second, operator) => {
        switch (operator) {
            case "+":
                setResult(eval(first+"+"+second))
                break
            case "-":
                setResult(eval(first+"-"+second))
                break
            case "*":
                setResult(eval(first+"*"+second))
                break
            case "/":
                setResult(eval(first+"/"+second))
                break
        }
    }
    return (
        <>
            <input type="number" onChange={() => setFirst(event.target.value)}/>
            <input type="number" onChange={() => setSecond(event.target.value)}/>
            <p>{result}</p>
            <button onClick={()=>Evaluate(first,second,"+")}>+</button>
            <button onClick={()=>Evaluate(first,second,"-")}>-</button>
            <button onClick={()=>Evaluate(first,second,"*")}>*</button>
            <button onClick={()=>Evaluate(first,second,"/")}>/</button>
        </>
    )
}