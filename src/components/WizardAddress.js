import React, { useContext } from 'react'
import  dataCity  from '../dataCity';
import { multiStepContext } from '../StepContext';
export default function WizardAddress(){
   const { setStep, data, setData }=useContext(multiStepContext)
    return (
      <div>
            <div className='Form-header'>Adres bilgilerinizi girin</div>
            <div className="section_address">
            <div className='oldaddress'>
                  <label >Nereden taşınıyorsun (eski ev nerede)?</label> 
                   <select id="Iller"className="label-elements section-elements" 
                  value={data["oldcity"]} 
                  onChange={(e)=>setData({...data, "oldcity":e.target.value})} 
                  >
                  {dataCity.dataCity.map((data)=>(
                     <option key={data.plaka} value= {data.il} >
                        {data.il}
                     </option>
                  ))}
              </select> 
                  <textarea name=""id=""
                   placeholder='Açık adres girin'
                   value={data["oldaddress"]} 
                     onChange={(e)=>setData({...data, "oldaddress":e.target.value})} 
                  ></textarea>
              </div>
              <div className='newaddress'>
                  <label>Nereye taşınıyorsun (yeni ev nerede)?</label>
                   <select id="Iller"className="label-elements  section-elements" 
                    value={data["newcity"]} 
                         onChange={(e)=>setData({...data, "newcity":e.target.value})} 
                       defaultValue={data.il}>
                       {dataCity.dataCity.map((data)=>(
                          <option key={data.plaka} value= {data.il}>
                             {data.il}
                          </option>
                       ))} 
                   </select>
                  <textarea name="" id=""
                     placeholder='Açık adres girin'
                     value={data["newaddress"]} 
                     onChange={(e)=>setData({...data, "newaddress":e.target.value})} 
                  ></textarea>
              </div>
            </div>
            <div className='buttons'>
              <button type='button' onClick={()=>setStep(3)} >geri</button>
              <button type='sumbit'value="sumbit" onClick={()=>setStep(5)} >devam</button>
        </div>
      </div>
    )
  }
