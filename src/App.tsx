function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          <div className="step">
            <span className="step-number">1</span>
            
            <div className="step-info">
              <p>Step 1</p>
              <h4>Your Info</h4>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number</p>
          
          <form action="#">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="e.g. Stephen King" />
            <label htmlFor="emailAddress">Email Address</label>
            <input type="email" name="emailAddress" id="emailAddress" placeholder="e.g. stephenking@lorem.com" />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="number" name="phoneNumber" id="phoneNumber" placeholder="e.g. +1 234 567 890" />
            <button className="cta-btn">Next Step</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App