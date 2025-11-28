function YourInfo() {
  return (
    <div className="page">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number</p>
      
      <form action="/multi-step-form/select-plan">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="input-field" placeholder="e.g. Stephen King" />
        <label htmlFor="emailAddress">Email Address</label>
        <input type="email" name="emailAddress" id="emailAddress" className="input-field" placeholder="e.g. stephenking@lorem.com" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="number" name="phoneNumber" id="phoneNumber" className="input-field" placeholder="e.g. +1 234 567 890" />
        
        <div className="action-btns">
          <button className="cta-btn">Next Step</button>
        </div>
      </form>
    </div>
  )
}

export default YourInfo