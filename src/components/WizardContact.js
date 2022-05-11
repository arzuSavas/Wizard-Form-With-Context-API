import React, { useContext } from 'react'
import { Form} from 'antd';
import { multiStepContext } from '../StepContext';

export default function WizardContact() {
  const { setStep, data, setData }=useContext(multiStepContext)
     
    return (
        
      <div>
        <div className='Form-header'>iletişim bilgilerinizi girin</div>
            <Form className='section contact'> 
              <div className='section-contact'>
                    <input type="text" placeholder='İsim'name='firstname' className='contact-elements' 
                      value={data["firstname"]} 
                      onChange={(e)=>setData({...data, "firstname":e.target.value})}
                    /> 
                    <input type="text" placeholder='Soy İsim'name='lastname' className='contact-elements'
                        value={data["lastname"]} 
                       onChange={(e)=>setData({...data, "lastname":e.target.value})}
                    />      
              </div>
                    <input type="tel" placeholder='Numara'name='phone' className='contact-elements'
                        value={data["phone"]} 
                       onChange={(e)=>setData({...data, "phone":e.target.value})}
                    /> 
                    <input type="email" placeholder='Email'name='email' className='contact-elements'
                        value={data["email"]} 
                       onChange={(e)=>setData({...data, "email":e.target.value})}
                    />    
            </Form>
            <div className='buttons'>
              <button type='button' onClick={()=>setStep(4)} >geri
              </button>
              <button type='button'onClick={()=>setStep(6) } >devam</button>
            </div>
           
      </div>
    )
  }
