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

export const AuthContext = createContext();

export const AuthProvider = props => {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <AuthContext.Provider value={[isAuth, setIsAuth]}>
            {props.children}
        </AuthContext.Provider>
    )
}