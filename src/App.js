import {FaDollarSign, FaUserAlt} from 'react-icons/fa'

import './App.css';

import CustomInput from './utilityComponents/CustomInput/CustomInput'
import DefaultButton from './utilityComponents/DefaultButton/DefaultButton';

function App() {
    return(
        <div className="App">
            <p style={{fontWeight: 700}}><strong>S P L I</strong></p>
            <p style={{fontWeight: 700}}><strong>T T E R</strong></p>

            <div className="tip-container">

                <div className="input-field">
                    <section className="bill-section">
                        <p className="section-title-input">Bill</p>
                        <CustomInput inputType="text" icon={FaDollarSign}
                        inputPlaceholder="0"/>
                    </section>
          
                    <section className="tip-section">
                        <p className="section-title-input">Select Tip %</p>
                        <div className="tip-selection">
                            <DefaultButton buttonBg="toxic" textColor="light">5%</DefaultButton>
                            <DefaultButton buttonBg="toxic" textColor="light">10%</DefaultButton>
                            <DefaultButton buttonBg="toxic" textColor="light">15%</DefaultButton>
                            <DefaultButton buttonBg="toxic" textColor="light">25%</DefaultButton>
                            <DefaultButton buttonBg="toxic" textColor="light">50%</DefaultButton>
                            <CustomInput inputType="text" inputPlaceholder="Custom"/>
                        </div>
                    </section>

                    <section className="people-number">
                        <p className="section-title-input">Number of people</p>
                        <CustomInput inputType="text" icon={FaUserAlt}
                        inputPlaceholder="0"/>
                    </section>
                </div>
        
                <div className="result-field">
                    <div className="tip-amount">
                        <span className="section-title-result">Tip Amount</span>
                        <span>$0.00</span>
                    </div>
                    <div className="tip-total">
                        <span className="section-title-result">Total</span>
                        <span>$0.00</span>
                    </div>
                    <DefaultButton buttonBg="#26c0ab" textColor="#00494d" style={{fontWeight: 700}}>Reset</DefaultButton>
                </div>
            </div>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/alvinAdler">Alvin Adler</a>.
            </div>
        </div>
  )
}

export default App;
