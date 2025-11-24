import { useLocation, useNavigate } from 'react-router'
import data from '../data.json'

function AddOns() {
    const navigate = useNavigate()
    const {state} = useLocation()

    const handleAddonClick: React.MouseEventHandler = e => {
        const targetElement = e.target as HTMLElement
        
        for (const addonElement of e.currentTarget.children) {
            // assumes the checkbox element is the first child of the addon element
            const checkboxElement = addonElement.firstElementChild as HTMLInputElement

            if (addonElement.contains(targetElement)) {
                addonElement.classList.toggle('active-addon')
                checkboxElement.checked = !checkboxElement.checked
            }
        }
    }

    return (
        <div className="page three">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className="addons-list" onClick={handleAddonClick}>
                {data.addons.map((addon, i) => (
                    <div className="addon" key={i}>
                        <input type="checkbox" name='addon' id='addon' />

                        <div className="content">
                            <h4 className='title'>{addon.title}</h4>
                            <p>{addon.description}</p>
                        </div>

                        <span className="price">+${(addon.price as {[x: string]: any})[state.paymentCycle]}/{state.paymentCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                ))}
            </div>

            <div className="cta-btns">
                <button onClick={() => navigate('/multi-step-form/select-plan')}>Go back</button>
                <button className="cta-btn" onClick={() => navigate('/multi-step-form/summary')}>Next Step</button>
            </div>
        </div>
    )
}

export default AddOns