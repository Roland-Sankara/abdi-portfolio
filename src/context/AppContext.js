import React,{useState,createContext} from 'react';

const AppContext = createContext();

export function ContextProvider({children}){
    const [data, setData] = useState(null);

    function updateProject(data){
        setData(data)
    }

    return(
        <AppContext.Provider value={{data, updateProject}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;