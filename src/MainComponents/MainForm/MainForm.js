/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable eqeqeq */
import React, { useContext,useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import {
    RangeDatePicker,
    SingleDatePicker
} from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import SecendRow from '../ChildForm/SecendRow';
import { ContextCreate } from '../../MainContext/MainContext';

import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');



function MainForm() {

    // modal start
    let subtitle;

   





    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }


    //modal finish 

    






    const value = useContext(ContextCreate)


// eslint-disable-next-line no-unused-vars
const [valueContext, setvalueContext] = value
const [success,setsuccess] =useState({})



    const [startDate, setstartDate] = useState("")
    const [finishDate, setfinishDate] = useState("")
    const [from , setForm] = useState("")
    const [to , setTo] = useState("")
    const [voucher1 , setVoucher1] = useState("")

    const [all1, setall1] = useState({
       radio:"radio2"

        })


        const chng =(e)=>{
            const newall1 = {...all1}
            
           
            newall1[e.target.name] = e.target.value
            setall1(newall1)
            
            }

           
        






    const onDateChange = (e , v ) => {
        setstartDate(e)
        setfinishDate(v)
        
    }


    const submitSuccess = () =>{
        let data = {
            startDate, finishDate,  from, to , voucher1 , valueContext

        }
        setsuccess(data);

       
    }


    


    return (<div style={{ marginLeft: "180px", marginTop: "250px" }}>


        {/* modal */}
        <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-primary'>Congratulations...</h2> <br /> <hr /><br />

        <div >Your Ticket is : </div> <br />


        
          <ul>

              <li> StartDate : {success.startDate?success?.startDate?.toLocaleDateString() : "Pick Date First"}</li>
              <li> FinishDate :  {success.finishDate? success?.finishDate?.toLocaleDateString() : "Pick Date First"}</li>
              <li> Form : {success?.form}</li>
              <li> To : {success?.to}</li>
              <li> voucher" {success?.voucher1}</li>
              <li> Sit adult : {success?.valueContext?.adult}</li>
              <li> Sit Young_adult : {success?.valueContext?.Young_adult}</li>
              <li> Sit Child : {success?.valueContext?.Child}</li>
              <li> Sit Infant : {success?.valueContext?.Infant}</li>
              <li> Sit Travel :  {success?.valueContext?.travel}</li>
          </ul>

          <br />

        <button className='btn btn-danger' onClick={closeModal}>close</button>

       
      </Modal>
      {/* modal */}








        <div className='text-center mb-5'>
        <p  className='text-danger'><span style={{fontSize :"60px"}}>Flight deals with Virgin Atlantic </span></p>
        </div>

        <div className='row mb-5'>


            <form>

          <span className='me-5'>  <input onBlur={(e)=>chng(e)}   type="radio" name="radio"  value="radio1"  />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    One way
                </label></span>
           
                <input  onBlur={(e)=>chng(e)}   type="radio" name="radio" value="radio2"  />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Round trip
                </label>

            </form>

          
               
           

        </div>

        {/* checked finish */}


        <div className="row">
            <div className="col-3">
                <label htmlFor="exampleDataList" className="form-label">From</label>

                <div className='input-container '>

                    <span className='icon'>  < FaMapMarkerAlt /></span>


                    <input onChange={(e)=>setForm(e.target.value)} className=" p-3 input-field" list="datalistOptions" id="exampleDataList" placeholder="Select Departure..." />



                </div>
            </div>
            <div className="col-3">

                <label htmlFor="exampleDataList" className="form-label">To</label>

                <div className='input-container '>

                    <span className='icon'>  < FaMapMarkerAlt /></span>

                    <input onChange={(e)=>setTo(e.target.value)} className=" p-3 input-field" list="datalistOptions" id="exampleDataList" placeholder="Select Distination..." />
                </div>

            </div>
            <div className="col-6">
                <span> <label htmlFor="exampleDataList" className="form-label me-5">Departure</label>
                    <label htmlFor="exampleDataList" className="form-label ms-5 ps-5">Return</label>
                </span>

                {/* <input className="form-control p-3" list="datalistOptions" id="exampleDataList" placeholder="Select Dates..." /> */}




             { all1.radio=="radio2" ?   <RangeDatePicker
             
                    startDate={new Date()}

                    endDate={new Date()}



                
                    onChange={(startDate,endDate) => onDateChange(startDate, endDate)}
                /> :

                <SingleDatePicker startDate={new Date()} onChange={(startDate) => onDateChange(startDate)}  />
                   
                    }




            </div>

        </div>

        {/* first row finish */}
       

        <div className="row mt-5">
            <div className="col-4">
            <h4 className=' '>Passengers/travel class</h4>


                <SecendRow></SecendRow>


         

            </div>

            <div className="col-3" >

            <h6 htmlFor="exampleDataList" className="form-label pb-2">Voucher or event code</h6>

               <input onChange={(e)=>setVoucher1(e.target.value)} style={{width:'80%'}} className="p-2" list="datalistOptions" id="exampleDataList" placeholder="Select Distination..." />
            
           </div>


            <div className="col-4 mt-3">
                <button onClick={
                    ()=>
                      {  submitSuccess()
                         openModal()
                        }
                    

                    
                }  className='btn btn-danger p-3' style={{width:"160px"}}>Book Now..</button>


            </div>
        </div>

       
       






    </div>)
}

export default MainForm;
