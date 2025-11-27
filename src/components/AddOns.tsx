import { useLocation, useNavigate } from 'react-router'
import data from '../data.json'
import { useState } from 'react'

function AddOns() {
    const navigate = useNavigate()
    const {state} = useLocation()
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

    const handleAddonClick: React.MouseEventHandler = e => {
        const targetElement = e.target as HTMLElement
        
        for (const addonElement of e.currentTarget.children) {
            // assumes the checkbox element is the first child of the addon element
            const checkboxElement = addonElement.firstElementChild as HTMLInputElement

            if (addonElement.contains(targetElement)) {
                addonElement.classList.toggle('active-addon')
                checkboxElement.checked = !checkboxElement.checked

                checkboxElement.checked ?
                    setSelectedAddOns(prev =>
                        Array.from(new Set([...prev, (addonElement as HTMLElement).dataset['addonName']!]))
                    ) : setSelectedAddOns(prev =>
                        prev.filter(it => it !== (addonElement as HTMLElement).dataset['addonName'])
                    )
            }
        }
    }

    const handleNextClick = () => {
        if (!selectedAddOns.length) {
            console.log('No addon was selected!')
            return
        }

        navigate('/multi-step-form/summary',
            {
                state: Object.assign(state, {
                    addons: selectedAddOns.map(it => data.addons.find(addon => addon.title === it))
                })
            }
        )
    }

    return (
        <div className="page three">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className="addons-list" onClick={handleAddonClick}>
                {data.addons.map((addon, i) => (
                    <div className="addon" key={i} data-addon-name={addon.title}>
                        <input type="checkbox" name='addon' id='addon' />

                        <div className="content">
                            <h4 className='title'>{addon.title}</h4>
                            <p>{addon.description}</p>
                        </div>

                        <span className="price">+${(addon.price as {[x: string]: any})[state ? state.paymentCycle : 'monthly']}/{state?.paymentCycle === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                ))}
            </div>

            <div className="action-btns">
                <button onClick={() => navigate('/multi-step-form/select-plan')}>Go back</button>
                <button className="cta-btn" onClick={handleNextClick}>Next Step</button>
            </div>
        </div>
    )
}

export default AddOns