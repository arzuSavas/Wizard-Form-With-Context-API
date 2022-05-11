import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';
import dataSection from '../dataSection';

export default function WizardThirdPage () {
       const { setStep, data, setData }=useContext(multiStepContext)
   return (
    <div>
       <div className='Form-header'>Yeni eve eşya nasıl taşınacak?</div>
       <div className="section">
        {dataSection.thirdPage.map((item)=>(
               <label className='label-elements' key={item.id}>
                 {item.value}
                <input type="radio"name="selection-1" 
                   value={item.value}
                   price={item.price}
                  onChange={(e)=>setData({...data,"value3":e.target.value,"Price3":item.price})}
                 />
                </label>
            ) )}
       </div>
       <div className='buttons'>
              <button type='button' onClick={()=>setStep(2)} >geri</button>
              <button type='button' onClick={()=>setStep(4)} >devam</button>
        </div>
     </div>
    )
  }
