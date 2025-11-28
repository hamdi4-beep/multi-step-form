import { useState } from "react"
import { useLocation, useNavigate } from "react-router"
import Confirmation from "./Confirmation"

type State = {
    paymentCycle: 'monthly' | 'yearly'
    selectedPlan: {
        name: string
        price: {
            monthly: number
            yearly: number
        }
    },
    addons: {
        title: string
        description: string
        price: {
            monthly: number
            yearly: number
        }
    }[]
}

function Summary() {
    const navigate = useNavigate()

    const {
        state,
        pathname
    }: {
        state: State
        pathname: string
    } = useLocation()
    
    console.log(state)

    const [isConfirmed, setIsConfirmed] = useState(false)

    const cycleVariations = state.paymentCycle === 'monthly' ? 'mo' : 'yr'
    const selectedPlanPrice = state.selectedPlan.price[state.paymentCycle]

    const addonsTotalPrice = state.addons
            .map(addon => addon.price[state.paymentCycle])
            .reduce((prev, curr) => prev + curr)

    const handleChangeClick = () =>
        navigate(pathname, {
            state: {
                ...state,
                paymentCycle: state.paymentCycle === 'monthly' ? 'yearly' : 'monthly'
            },
            replace: true
        })

    if (isConfirmed) return <Confirmation />

    return (
        <div className="page four">
            <h1>Finishing up</h1>
            <p>Double make sure everything looks OK before confirming.</p>

            <div className="wrapper">
                <div className="top-banner">
                    <div className="plan-info">
                        <p className="plan-title">{state.selectedPlan['name']} ({state.paymentCycle.replace(state.paymentCycle[0], state.paymentCycle[0].toUpperCase())})</p>
                        <button className="change-plan-btn" onClick={handleChangeClick}>Change</button>
                    </div>

                    <p className="plan-price">${selectedPlanPrice}/{cycleVariations}</p>
                </div>

                {state.addons.map((addon, index) => (
                    <div className="addon-info" key={index}>
                        <p>{addon.title}</p>
                        <p className="addon-price">+${addon.price[state.paymentCycle]}/{cycleVariations}</p>
                    </div>
                ))}
            </div>

            <div className="bottom-banner">
                <p className="total-label">Total (per {cycleVariations === 'mo' ? 'month' : 'year'})</p>
                <p className="total-price">${selectedPlanPrice + addonsTotalPrice}/{cycleVariations}</p>
            </div>

            <div className="action-btns">
                <button onClick={() => navigate('/multi-step-form/add-ons', { state })}>Go back</button>
                <button className="cta-btn" onClick={() => setIsConfirmed(true)}>Confirm</button>
            </div>
        </div>
    )
}

export default Summary