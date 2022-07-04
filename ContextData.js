import React from 'react';

export const Datacontext = React.createContext();
// export const Usercontext = React.createContext();

export const Dataprovider = ({children}) => {
  const [selectData, setSelectData] = React.useState(0);
  //   const [datauser, setDatauser] = React.useState([]);
  return (
    <Datacontext.Provider value={[selectData, setSelectData]}>
      {/* <Usercontext.Provider value={[datauser, setDatauser]}> */}
      {children}
      {/* </Usercontext.Provider> */}
    </Datacontext.Provider>
  );
};
