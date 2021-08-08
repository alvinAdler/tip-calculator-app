import {useState} from 'react'
import {FaDollarSign, FaUserAlt} from 'react-icons/fa'

import './App.css';

import CustomInput from './utilityComponents/CustomInput/CustomInput'
import DefaultButton from './utilityComponents/DefaultButton/DefaultButton';

const numberOfTip = [
    5, 10, 15, 25, 50
]

function App() {
    const [currentBill, setCurrentBill] = useState("")
    const [peopleQuant, setPeopleQuant] = useState("")
    const [currentTip, setCurrentTip] = useState("")

    const handleReset = () => {
        setCurrentBill("")
        setPeopleQuant("")
        setCurrentTip("")
    }

    const disableCalculation = () => {
        return (
        currentBill === "" || 
        (currentTip === "" || isNaN(currentTip)) ||
        (peopleQuant === "" || peopleQuant === "0")
        )
    }

    const performCalculation = (calcType) => {
        if(disableCalculation()){
            return "0.00"
        }

        const tipAmount = (parseFloat(currentBill) * (parseFloat(currentTip) / 100) / parseFloat(peopleQuant))
        const totalBill = ((parseFloat(currentBill) / parseFloat(peopleQuant))) + tipAmount

        switch(calcType){
            case "tipAmount":
                return tipAmount.toFixed(2).toString()
            case "totalBill":
                return totalBill.toFixed(2).toString()
            default:
                alert("False Parameter")
        }
    }

    const isTheSame = (val1, val2) => {
        return val1 === val2
    }

    return(
        <div className="App">
            <div className="app-title">
                <p style={{fontWeight: 700}}><strong>S P L I</strong></p>
                <p style={{fontWeight: 700}}><strong>T T E R</strong></p>
            </div>

            <div className="tip-container">

                <div className="input-field">
                    <section className="bill-section">
                        <p className="section-title-input">Bill</p>
                        <CustomInput inputType="number" icon={FaDollarSign}
                        inputPlaceholder="0"
                        value={currentBill} 
                        onChange={(ev) => setCurrentBill(ev.target.value)}/>
                    </section>
          
                    <section className="tip-section">
                        <p className="section-title-input">Select Tip %</p>
                        <div className="tip-selection">

                            {numberOfTip.map((tip, index) => {
                                return(
                                    <DefaultButton key={index} buttonBg={isTheSame(numberOfTip[index], currentTip) ? 
                                    "#26c0ab" : "toxic"} textColor={isTheSame(numberOfTip[index], currentTip) ? 
                                    "#00494d" : "light"}
                                    onClick={() => setCurrentTip(numberOfTip[index])}>
                                        {`${tip}%`}
                                    </DefaultButton>
                                )
                            })}

                            <CustomInput inputType="number" inputPlaceholder="Custom"
                            placeholderAlign="placeholder-center"
                            onChange={(ev) => setCurrentTip(parseFloat(ev.target.value))}
                            value={currentTip}
                            />
                        </div>
                    </section>

                    <section className="people-number">
                        <p className="section-title-input">Number of people</p>
                        <CustomInput inputType="number" icon={FaUserAlt}
                        inputPlaceholder="0"
                        value={peopleQuant}
                        onChange={(ev) => setPeopleQuant(ev.target.value)}
                        />
                    </section>
                </div>
        
                <div className="result-field">
                    <div className="tip-amount">
                        <span className="section-title-result">Tip Amount</span>
                        <span>{`$${performCalculation("tipAmount")}`}</span>
                    </div>
                    <div className="tip-total">
                        <span className="section-title-result">Total</span>
                        <span>{`$${performCalculation("totalBill")}`}</span>
                    </div>
                    <DefaultButton buttonBg="#26c0ab" textColor="#00494d" style={{fontWeight: 700}}
                    onClick={handleReset}>
                        Reset
                    </DefaultButton>
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
