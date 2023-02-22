import { useCallback, useMemo, memo } from "react";


function CounterChild({count, countMemo, fc}) {


    console.log("render counterChild")

    useMemo(() => {
        console.log("thay doi countMemo")
    },[countMemo])

    // const handleButtonClick = useCallback(() => {
    //     console.log('Button clicked');
    //   }, [fc]);

    return ( 
        <div>
            <h2>Cái này thì rerender : {count}</h2>
            <h2>Cái này thì không : {countMemo}</h2>
            <button onClick={fc}>Change Fc</button> 
        </div>
     );
}

export default memo(CounterChild);