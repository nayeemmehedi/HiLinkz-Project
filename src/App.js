import MainForm from "./MainComponents/MainForm/MainForm";
import MainContext from "./MainContext/MainContext";
import ModalContext from "./MainContext/ModalContext";

function App() {
  return (
    <div className="" style={{ fontFamily: "Courgette" }}>
      <MainContext>
        <ModalContext>

          <MainForm></MainForm>
          
        </ModalContext>
      </MainContext>
    </div>
  );
}

export default App;
