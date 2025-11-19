import { Navigate, Route, Routes, useLocation } from 'react-router'
import YourInfo from './components/YourInfo'
import SelectPlan from './components/SelectPlan'
import AddOns from './components/AddOns'

const steps = {
  'your-info': {
    name: 'Your Info',
    number: 1
  },
  'select-plan': {
    name: 'Select Plan',
    number: 2
  },
  'add-ons': {
    name: 'Add Ons',
    number: 3
  },
  'summary': {
    name: 'Summary',
    number: 4
  }
} as {
  [x: string]: any
}

function App() {
  const location = useLocation()
  console.log(location)

  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          {Object.keys(steps).map((path, i) => (
            <div className="step" key={i}>
              <span className={`step-number ${path === location.pathname.split('/').pop() ? 'active-step' : ''}`}>{steps[path].number}</span>
              
              <div className="step-info">
                <p>Step {steps[path].number}</p>
                <h4>{steps[path].name}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="right-side">
          <Routes>
            <Route path='/multi-step-form/your-info' element={<YourInfo />} />
            <Route path='/multi-step-form/select-plan' element={<SelectPlan />} />
            <Route path='/multi-step-form/add-ons' element={<AddOns />} />
            <Route path='*' element={<Navigate to='/multi-step-form/your-info' replace />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App