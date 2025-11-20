import { useNavigate } from 'react-router'
import data from '../data.json'

function AddOns() {
    const navigate = useNavigate()

    return (
        <div className="page three">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className="addons-list">
                {data.addons.map(addon => (
                    <div className="addon">
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