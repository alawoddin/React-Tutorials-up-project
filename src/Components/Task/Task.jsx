import React, { useState } from 'react';

const Task = () => {

    const [dollar, setDollar] = useState("");
    const [afg, setAfg] = useState("");
    const [result, setResult] = useState("");

    function calculate(d, a) {
        const dNum = parseFloat(d);
        const aNum = parseFloat(a);

        if (!isNaN(dNum) && !isNaN(aNum)) {
            setResult(dNum * aNum);
        } else {
            setResult("");
        }
    }

    function handleDollar(e) {
        const value = e.target.value;
        setDollar(value);
        calculate(value, afg);
    }

    function handleAfg(e) {
        const value = e.target.value;
        setAfg(value);
        calculate(dollar, value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Dollar"
                value={dollar}
                onChange={handleDollar}
            />

            <input
                type="text"
                placeholder="AFG rate"
                value={afg}
                onChange={handleAfg}
            />

            <input
                type="text"
                placeholder="Result"
                value={result}
                readOnly   
            />
        </div>
    );
};

export default Task;