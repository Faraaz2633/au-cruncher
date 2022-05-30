import React, { createContext, useState } from "react";

export const ResultContext = createContext();

export const ResultProvider = props => {
    const [globalResult, setGlobalResult] = useState(0);
    console.log(globalResult)

    return (
        <ResultContext.Provider value={[globalResult, setGlobalResult]}>
            {props.children}
        </ResultContext.Provider>
    )
}