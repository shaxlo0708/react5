import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

const Vazifa2 = () => {
    const [data, setData] = useState();
    const [search, setsearch] = useState('');
    const handlechange = (e) => {
        setsearch(e.target.value);
    }
    async function fetchedData() {
        try {
            const response = await axios.get('https://api.github.com/users');
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchedData()
    }, [])
    const datas = data?.filter((info) => {
        if (search === "") {
            return info
        }
        else if (info.login.includes(search.toLowerCase())) {
            return info
        }
    }).map((a1, index) => (
        <div key={index}>
            <h2 >{a1.login}</h2>
        </div>
    ))
    return (
        <div className='searchch'>
            <form >
                <input onChange={handlechange} value={search} type="text" placeholder='Search' required />
            </form>
            <div className="datas">{
                datas
            }
            </div>
        </div>
    )
}

export default Vazifa2

