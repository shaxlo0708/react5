import { useState } from 'react';


const Vazifa1 = () => {
    const [count, setCount] = useState(14);
    return (
        <div className="card">
            <div className="aaa">
                <div className={`${count > 20 ? 'qizil' : 'sariq'}`}>
                    <p className="p">{count}°C</p>
                </div>
                <button onClick={() => { setCount(count - 1) }} className="btnm">-</button>
                <button onClick={() => { setCount(count + 1) }} className="btn">+</button>

            </div>
        </div>
    )
}

export default Vazifa1