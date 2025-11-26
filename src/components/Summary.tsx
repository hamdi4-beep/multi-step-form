import { useLocation, useNavigate } from "react-router"

// fix the reduce logic not working properly for the total amount

function Summary() {
    const navigate = useNavigate()
    const {state} = useLocation()

    const paymentCycle = state.paymentCycle === 'monthly' ?
        'mo' : 'yr'

    console.log(
        state.addons.reduce((prev: any, curr: any) => {
            if (prev) {
                console.log(prev.price[state.paymentCycle])
                return prev.price[state.paymentCycle]
            }
        })
    )

    return (
        <div className="page four">
            <h1>Finishing up</h1>
            <p>Double make sure everything looks OK before confirming.</p>

            <div className="wrapper">
                <div className="top-banner">
                    <div className="plan-info">
                        <p className="plan-title">{state.selectedPlan['name']} ({state.paymentCycle.replace(paymentCycle[0], paymentCycle[0].toUpperCase())})</p>
                        <button className="change-plan-btn">Change</button>
                    </div>

                    <p className="plan-price">${state.selectedPlan.price[state.paymentCycle]}/{paymentCycle}</p>
                </div>

                {state.addons.map((addon: any, index: number) => (
                    <div className="addon-info" key={index}>
                        <p>{addon.title}</p>
                        <p className="addon-price">+${addon.price[state.paymentCycle]}/{paymentCycle}</p>
                    </div>
                ))}
            </div>

            <div className="bottom-banner">
                <p className="total-label">Total (per {paymentCycle === 'mo' ? 'month' : 'year'})</p>
                <p className="total-price">${0}/{paymentCycle}</p>
            </div>

            <div className="action-btns">
                <button onClick={() => navigate('/multi-step-form/add-ons')}>Go back</button>
                <button className="cta-btn">Confirm</button>
            </div>
        </div>
    )
}

export default Summary