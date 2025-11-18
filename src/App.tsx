import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import data from './data.json'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          {data.steps.map(stepInfo => (
            <div className="step" key={stepInfo.stepNumber}>
              <span className={`step-number ${stepInfo.stepNumber === 1 ? 'active-step' : ''}`}>{stepInfo.stepNumber}</span>
              
              <div className="step-info">
                <p>{stepInfo.subheadline}</p>
                <h4>{stepInfo.headline}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="right-side">
          <StepTwo />
        </div>
      </div>
    </div>
  )
}

export default App