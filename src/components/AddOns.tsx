import { useNavigate } from 'react-router'
import data from '../data.json'

function AddOns() {
    const navigate = useNavigate()

    const handleAddonClick: React.MouseEventHandler = e => {
        const elem = e.currentTarget
        console.log(elem)
    }

    return (
        <div className="page three">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className="addons-list">
                {data.addons.map((addon, i) => (
                    <div className="addon" onClick={handleAddonClick} key={i}>
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