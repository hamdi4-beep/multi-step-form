import { useNavigate } from 'react-router'
import data from '../data.json'

function AddOns() {
    const navigate = useNavigate()

    const handleAddonClick: React.MouseEventHandler = e => {
        const targetElement = e.target as HTMLElement
        
        for (const addonElement of e.currentTarget.children) {
            // assumes the checkbox element is the first child of the addon element
            const checkboxElement = addonElement.firstElementChild as HTMLInputElement

            if (addonElement.contains(targetElement)) {
                addonElement.classList.add('active-addon')
                checkboxElement.checked = true
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

                        <span className="price">+${addon.price}/yr</span>
                    </div>
                ))}
            </div>

            <div className="cta-btns">
                <button onClick={() => navigate('/multi-step-form/select-plan')}>Go back</button>
                <button className="cta-btn">Next Step</button>
            </div>
        </div>
    )
}

export default AddOns