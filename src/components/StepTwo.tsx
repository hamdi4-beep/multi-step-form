function StepTwo() {
    return (
        <div className="page two">
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div className="plans-list">
                <div className="plan">
                    <div className="avatar-img">
                        <img src="/multi-form-step/images/icon-arcade.svg" alt="Arcade Icon" />
                    </div>

                    <p>Arcade</p>
                    <span>$9/mo</span>
                </div>

                <div className="plan">
                    <div className="avatar-img">
                        <img src="/multi-form-step/images/icon-advanced.svg" alt="Advanced Icon" />
                    </div>

                    <p>Advanced</p>
                    <span>$12/mo</span>
                </div>

                <div className="plan">
                    <div className="avatar-img">
                        <img src="/multi-form-step/images/icon-pro.svg" alt="Pro Icon" />
                    </div>

                    <p>Pro</p>
                    <span>$15/mo</span>
                </div>
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