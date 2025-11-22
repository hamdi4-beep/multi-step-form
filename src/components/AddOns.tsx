import { useNavigate } from 'react-router'
import data from '../data.json'

function AddOns() {
    const navigate = useNavigate()

    const handleAddonClick: React.MouseEventHandler = e => {
        const elem = e.target as HTMLElement
        
        for (const child of e.currentTarget.children) {
            const checkboxElement = child.firstElementChild as HTMLInputElement
            if (child.contains(elem)) {
                child.classList.add('active-addon')
                checkboxElement.checked = true
            } else {
                child.classList.remove('active-addon')
                checkboxElement.checked = false
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