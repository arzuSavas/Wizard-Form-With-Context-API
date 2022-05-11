import './App.css';
import { useContext } from 'react';
import {multiStepContext} from "./StepContext";
import WizardConfirm from './components/WizardConfirm'
import WizardAddress from './components/WizardAddress'
import WizardFirstPage from './components/WizardFirstPage'
import WizardSecondPage from './components/WizardSecondPage'
import WizardThirdPage from './components/WizardThirdPage'
import WizardContact from './components/WizardContact'

function App() {
  const{currentStep,data}=useContext(multiStepContext);
  function showstep(step) {
   switch(step){
      case 1:
        return <WizardFirstPage/>
      case 2:
        return <WizardSecondPage/>
      case 3:
        return <WizardThirdPage/>
      case 4:
        return <WizardAddress/>
      case 5:
        return <WizardContact/>
      case 6:
        return <WizardConfirm/>
    }
  }
  return (
    <div className="App">
      <div className='WizardForm'>
                 <div className='progressbar'>  
                    <div  className='progress' style={{
                      maxWidth:500,  width:`${currentStep*17}%`
                       }}>
                    </div>
                 </div> 
                 {showstep(currentStep)}
             </div>
    </div>
  );
}

export default App;
