import React, { useContext } from 'react'
import dataSection from '../dataSection';
import { multiStepContext } from '../StepContext';


export default function WizardFirstPage() {
  const { setStep, data, setData }=useContext(multiStepContext);
        return (
         <div>  
          <div className='Form-header'>Kaç odalı ev eşyası taşınacak?</div>
          <div className='section' >
            {dataSection.firstPage.map((item)=>(
               <label className='label-elements'key={item.id}>
                 {item.value} 
                <input type="radio"name="selection-1" 
                   value={item.value}
                  onChange={(e)=>setData({...data,"value1":e.target.value,"Price1":item.price})}
                   
                 />
                 
                </label>
             ))}  
            </div>       
        <div className='buttons'>
              <button type='button' onClick={()=>setStep(2)} >devam</button>
             </div>
       
     </div>
   )
  
}
