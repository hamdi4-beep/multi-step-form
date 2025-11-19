import data from '../data.json'

function StepThree() {
    return (
        <div className="page three">
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>

            <div className="addons-list">
                {data.addons.map(addon => (
                    <div className="addon">
                        <input type="checkbox" name='addon' id='addon' />

                        <div className="content">
                            <h3>{addon.name}</h3>
                            <p>{addon.description}</p>
                        </div>

                        <span className="price">+${addon.price}/yr</span>
                    </div>
                ))}
            </div>

            <div className="cta-btns">
                <button>Go back</button>
                <button className="cta-btn">Next Step</button>
            </div>
        </div>
    )
}

export default StepThree