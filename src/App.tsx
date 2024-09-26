import Button from "./assets/components/Button";
import Inputs from "./assets/components/Inputs";
import Texto from "./assets/components/Texto";
import "./assets/components/App.css";
import Header from "./assets/components/Header";

const showAlert = () => {
  alert("¡Su cuenta ha sido creada!");
};
const App=()=> {
  return(

    <div className="container">

       <div className="left-side">
      <Header/>
        <div className="google">
        <Button  
        imageUrl="img/google.png"
        texto="Sign up with Google" 
        buttonUrl="https://myaccount.google.com"
        onClick={() => {}}
        />
      </div>
      <Button  imageUrl="img/email.png"
        buttonUrl="https://myaccount.email.com"
        texto="Sign up with Email"
        onClick={() => {}}
        />
      <Texto/>
  
      </div>
      

      <div className="right-side">
        <Header/>
        <div className="inputs">
          <Inputs type="text" texto="Name"/>
          <Inputs type="text" texto="Email"/>
          <Inputs type="password" texto="Password"/>
        </div>
        <Button  onClick={showAlert}
         className="Sign"
          texto="Sign Up" />
         <Texto/>
          --------------------------------or--------------------------------
        <div className="google">
          <Button imageUrl="img/google.png" 
          texto="Sign up with Google" 
          buttonUrl="https://myaccount.google.com"
          onClick={() => {}}/>
        </div>
      </div>
    </div>
  );
    
  
}

export default App
