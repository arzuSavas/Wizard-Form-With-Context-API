import React, { useContext } from 'react'
import { multiStepContext } from '../StepContext';

export default function WizardConfirm (){
   const {  setStep,data,}=useContext(multiStepContext)
    return (
      <div>
        <div className='Form-header'>Bilgilerinizi onaylayın</div>
        
             <div className='confirm'>
            <div className="section-confirm">
              <div className='home-info'>
                 <div className='oldhome-info'>
                    <span>Taşınacak eşya bilgisi: <p>{data.value1}</p> </span>
                    <span>Eski ev bilgisi: <p> {data.value2}</p></span>
                    <span>seçilen il: <p> {data.newcity}</p></span>
                    <span>Eski ev adresi: <p>{data.oldaddress}</p> </span>
                    
                 </div>
                 <div className='newhome-info'>
                    <span>Yeni ev bilgisi <p>{data.value3}</p></span>
                    <span>seçilen il:<p> {data.oldcity}</p></span>
                    <span>Yeni ev adresi <p>{data.newaddress}</p></span>
                    <span>minimum fiyat bilgisi:<p>{data.Price1+data.Price2+data.Price3}</p></span>
                    {console.log(data.Price1+data.Price2+data.Price3)}
                 </div>
              </div>
              
           </div>
           <span>İletişim Bilgileri</span>
        <div className='contact-info'>
          <div>
             <span>İsim: <p>{data.firstname}</p> </span>
             <span>Soy İsim: <p>{data.lastname}</p></span>
          </div>
          <div>
             <span>Email: <p>{data.email}</p></span>
             <span>Telefon Numarası: <p>{data.phone}</p></span>
          </div>
        </div>
             </div>
    
           <div className='buttons'>
              <button type='button'onClick={()=>setStep(5)} >geri</button>
              <button type='sumbit' onClick={()=>alert("İşlem tamamlandı")}>onayla</button>
        </div>
      </div>
    )
  }
