import { useCallback, useMemo, useState } from "react";
import CounterChild from "./CounterChild";



function Counter() {

    const [count, setCount] = useState(0)
    const [countMemo, setCountMemo] = useState(0)
    const [fcState, setFcState] = useState(0)

    const fc = useCallback(() => {
        setFcState(pre =>pre =  pre + 1)
    },[])

    return ( 
        <div>
            <h1>test useCallback {fcState}</h1>
            <CounterChild  count={count} countMemo = {countMemo} fc = {fc} />
            <button onClick={() => setCount(pre => pre - 1 )}>Decrease</button>        
            <button onClick={() => setCount(pre => pre + 1)}>Increase</button>        
            <button onClick={() => setCountMemo(countMemo + 1)}>Change CountMemo</button>        
        </div>
    );
}

export default Counter;