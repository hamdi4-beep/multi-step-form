import data from '../data.json'

function StepTwo() {
    return (
        <div className="page two">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="plans-list">
                {data.plans.map(plan => (
                    <div className={`plan ${plan.name === 'Arcade' ? 'active-plan' : ''}`}>
                        <div className="avatar-img">
                            <img src={`/multi-form-step/images/icon-${plan.name.toLocaleLowerCase()}.svg`} alt="" />
                        </div>

                        <div className="plan-info">
                            <p>{plan.name}</p>
                            <span>${plan.monthlyPrice}/mo</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="toggle">
                <span className="active">Monthly</span>
                <div className="toggle-bar"></div>
                <span>Yearly</span>
            </div>

            <div className="cta-btns">
                <button>Go Back</button>
                <button className="cta-btn">Next Step</button>
            </div>
        </div>
    )
}

export default StepTwo