import { useNavigate } from "react-router"

function Summary() {
    const navigate = useNavigate()

    return (
        <div className="page four">
            <h1>Finishing up</h1>
            <p>Double make sure everything looks OK before confirming.</p>

            <div className="wrapper">
                <div className="top-banner">
                    <div className="plan-info">
                        <p className="plan-title">Arcade (Yearly)</p>
                        <button className="change-plan-btn">Change</button>
                    </div>

                    <p className="plan-price">$90/yr</p>
                </div>

                <div className="addon-info">
                    <p>Online service</p>
                    <p className="addon-price">+$10/yr</p>
                </div>

                <div className="addon-info">
                    <p>Larger storage</p>
                    <p className="addon-price">+$20/yr</p>
                </div>
            </div>

            <div className="bottom-banner">
                <p className="total-label">Total (per year)</p>
                <p className="total-price">$120/yr</p>
            </div>

            <div className="action-btns">
                <button onClick={() => navigate('/multi-step-form/add-ons')}>Go back</button>
                <button className="cta-btn">Confirm</button>
            </div>
        </div>
    )
}

export default Summary