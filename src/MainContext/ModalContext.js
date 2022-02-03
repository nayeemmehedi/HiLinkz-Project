import React, { createContext, useState } from 'react';

export const ModalVALUE = createContext()

function ModalContext({children}) {

    const [modalContext, setvmodalContext] = useState({})



  return <ModalVALUE.Provider value={[modalContext, setvmodalContext]}>

      {children}

  </ModalVALUE.Provider>;
}

export default ModalContext;
