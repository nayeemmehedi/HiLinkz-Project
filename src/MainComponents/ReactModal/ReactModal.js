// import React from 'react';
// import Modal from 'react-modal';

// const customStyles = {
//     content: {
//       top: '50%',
//       left: '50%',
//       right: 'auto',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//     },
//   };
// Modal.setAppElement('#root');

// function ReactModal() {

    

//     let subtitle;

   





//     const [modalIsOpen, setIsOpen] = React.useState(false);
  
//     function openModal() {
//       setIsOpen(true);
//     }
  
//     function afterOpenModal() {
//       // references are now sync'd and can be accessed.
//       subtitle.style.color = '#f00';
//     }
  
//     function closeModal() {
//       setIsOpen(false);
//     }

//   return  <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Congratulations...</h2>
//         <button onClick={closeModal}>close</button>
//         <div>Your Ticket is : </div>

//           <ul>

//               <li> {valueMODAL?.startDate}</li>
//               <li> {valueMODAL?.finishDate}</li>
//               <li> {valueMODAL?.form}</li>
//               <li> {valueMODAL?.to}</li>
//               <li> {valueMODAL?.voucher1}</li>
//               <li> {valueMODAL?.valueContext?.adult}</li>
//               <li> {valueMODAL?.valueContext?.Young_adult}</li>
//               <li> {valueMODAL?.valueContext?.Child}</li>
//               <li> {valueMODAL?.valueContext?.Infant}</li>
//               <li> {valueMODAL?.valueContext?.travel}</li>
//           </ul>
       
//       </Modal>
//     </div>;
// }

// export default ReactModal;
