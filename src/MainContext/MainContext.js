import React, { createContext, useState } from 'react';

export const ContextCreate = createContext()

function MainContext({children}) {

    const [valueContext, setvalueContext] = useState({})



  return <ContextCreate.Provider value={[valueContext, setvalueContext]}>

      {children}

  </ContextCreate.Provider>;
}

export default MainContext;
