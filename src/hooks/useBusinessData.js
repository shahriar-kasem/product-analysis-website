import { useEffect, useState } from "react"

const useBusinessData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('businessData.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    return [data, setData];
}

export default useBusinessData;