import React, { useState, useRef} from "react";

import NewForm from "./NewForm";




const SecendRow = () => {
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef(null);




  
  
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (!visible) {
      setVisible(true);
    }
  };

  

  // const selectChange = (e) => {
  //   console.log(e.target.value);
  // };




  return (
    <div>
      <div  className="input_container">
        <input
          className="input p-2" style={{width:'80%'}}
          type="text"
          placeholder="Search Text"
         
          onChange={handleChange}
          onFocus={() => {
            // if (searchValue) {
            setVisible(true);
            // };
          }}
        />
      </div>
      <div ref={dropdownRef} className={`dropdown ${visible ? "v" : ""}`}>
        {visible && (
          <ul>
              <NewForm visible={[visible, setVisible]}></NewForm>
          </ul>
        )}
      </div>
     
    </div>
  );
};

export default SecendRow 

