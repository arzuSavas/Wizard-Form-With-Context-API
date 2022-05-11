import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';
import dataSection from '../dataSection';

export default function WizardSecondPage () {
  const { setStep, data, setData }=useContext(multiStepContext)
   return (
    <div>
       <div className='Form-header'>Eski evden eşya nasıl taşınacak?</div>
       <div className="section">
        {dataSection.secondPage.map((item)=>(
               <label className='label-elements' key={item.id}>
                 {item.value}
                <input type="radio"name="selection-1" 
                   value={item.value}
                   price={item.price}
                  onChange={(e)=>setData({...data,"value2":e.target.value,"Price2":item.price})}
                 />
                </label>
            ) )}
       </div>
         <div className='buttons'>
              <button type='button' onClick={()=>setStep(1)} >geri</button>
              <button type='button'onClick={()=>setStep(3)} >devam</button>
        </div>
     </div>
    )
  }


