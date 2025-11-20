import { Link, useNavigate } from 'react-router'
import data from '../data.json'
import { useState } from 'react'

function SelectPlan() {
    const [paymentCycle, setPaymentCycle] = useState<'monthly' | 'yearly'>('monthly')
    const navigate = useNavigate()

    return (
        <div className="page two">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="plans-list">
                {data.plans.map((plan, i) => (
                    <div className={`plan ${plan.name === 'Arcade' ? 'active-plan' : ''}`} key={i}>
                        <div className="avatar-img">
                            <img src={`/multi-step-form/images/icon-${plan.name.toLocaleLowerCase()}.svg`} alt="" />
                        </div>

                        <div className="plan-info">
                            <p>{plan.name}</p>
                            <span>${(plan.price as {[x: string]: number})[paymentCycle]}/{paymentCycle === 'monthly' ? 'mo' : 'yr'}</span>
                            {paymentCycle === 'yearly' && <p className='gift-desc'>2 months free</p>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="toggle" onClick={() => setPaymentCycle(prev => prev === 'yearly' ? 'monthly' : 'yearly')}>
                <span className="active">Monthly</span>
                <div className={`toggle-bar ${paymentCycle === 'yearly' ? 'toggled' : ''}`}></div>
                <span>Yearly</span>
            </div>

            <div className="cta-btns">
                <button onClick={() => navigate('/multi-step-form/your-info')}>Go Back</button>

                <button className="cta-btn">
                    <Link to='/multi-step-form/add-ons'>Next Step</Link>
                </button>
            </div>
        </div>
    )
}

export default SelectPlan