import React, { useContext, useState } from "react";
import { ContextCreate } from "../../MainContext/MainContext";




export default function NewForm({visible}) {

    const value = useContext(ContextCreate)

    // eslint-disable-next-line no-unused-vars
    const [valueContext, setvalueContext] = value



    const [adult, setadult] =useState(1)
    const [Young_adult, setYoung_adult] =useState(0)
    const [Child, setChild] =useState(0)
    const [Infant, setInfant] =useState(0)

    const [travel, settravel] =useState("Economy")



  // eslint-disable-next-line no-unused-vars
  const [visible1, setVisible1] = visible

  const selectChange = (e) => {
    settravel(e.target.value);
  };

  


  const submitdata =()=>{

   let dataMatch = {adult, Young_adult, Child, Infant, travel}
   


    setvalueContext( dataMatch )


    setVisible1(false)

  



   
  }


  


  return (




    <div className="border border-danger"  >


     <div className=" px-4">

        <h6 className="mb-4 pt-4">Travel Class</h6>
        <select onChange={selectChange}>
        <option value="Economy">Economy</option>
        <option value="Premium">Premium</option>
        <option value="Upper Class">Upper Class</option>

      </select>
      <hr />


     </div>

     {/* finish option */}

     {/* box value start */}

     <div>

     <div className="px-5">

<h5 className="my-4 ">PASSENGERS</h5>

<div className="row">
    <div className="col-5">
        <h5> Adult </h5> 
        <small>Age 16 and over</small>
    
    </div>
    <div className="col-6"> 
     <div className="row">
         <div className="col-3"> <button onClick={()=> setadult(adult>0 ?adult-1 : adult)} className="btn btn-primary">-</button> </div>
         <div className="col-2">{adult}</div>
         <div className="col-2"><button onClick={()=> setadult(adult+1)} className="btn btn-primary"> +</button></div>
     </div>


    
    </div>
</div>

{/* adult complete */}

<div className="row mt-5">
    <div className="col-5">
        <h5> Young adult </h5> 
        <small>Age 12 - 15</small>
    
    </div>
    <div className="col-6"> 
     <div className="row">
         <div className="col-3"> <button onClick={()=> setYoung_adult(Young_adult>0 ?Young_adult-1 : Young_adult)} className="btn btn-primary">-</button> </div>
         <div className="col-2">{Young_adult}</div>
         <div className="col-2"><button onClick={()=> setYoung_adult(Young_adult+1)} className="btn btn-primary"> +</button></div>
     </div>


    
    </div>
</div>

{/* younge adult complte */}

<div className="row mt-5">
    <div className="col-5">
        <h5> Child </h5> 
        <small>Age 2 - 11</small>
    
    </div>
    <div className="col-6"> 
     <div className="row">
         <div className="col-3"> <button onClick={()=> setChild(Child>0 ?Child-1 : Child)} className="btn btn-primary">-</button> </div>
         <div className="col-2">{Child}</div>
         <div className="col-2"><button onClick={()=> setChild(Child+1)} className="btn btn-primary"> +</button></div>
     </div>


    
    </div>
</div>
{/* child complete */}



<div className="row mt-5 mb-5">
    <div className="col-5">
        <h5> Infant </h5> 
        <small>Age up to 2</small>
    
    </div>
    <div className="col-6"> 
     <div className="row">
         <div className="col-3"> <button onClick={()=> setInfant(Infant>0 ?Infant-1 : Infant)} className="btn btn-primary">-</button> </div>
         <div className="col-2">{Infant}</div>
         <div className="col-2"><button onClick={()=> setInfant(Infant+1)} className="btn btn-primary"> +</button></div>
     </div>


    
    </div>
</div>

<hr />

<div className="text-end me-2 pe-5 pb-4" >
<button className="btn btn-danger btn-lg " onClick={()=>submitdata()}> Done</button>

</div>



</div>




     </div>

      
    </div>
  );
}