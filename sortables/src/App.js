import './App.css'
import AddInputfield from './AddInputfield'
import Skillset from './Skillset'
import { useState } from 'react'

function App () {
  const [inputs, setInputs] = useState('')
  const [results, setResults] = useState([])

  function SubmitInput (e) {
    e.preventDefault()
    if (inputs.trim() !== '') {
      setResults(item => [...item, inputs])
      setInputs('')
    }
  }

  function HandleDelete (item) {
    setResults(prevResults => prevResults.filter((_, index) => index !== item))
  }
  function HandleSuggestion (item) {
    if (!results.includes(item)) {
      setResults(prevResults => [...prevResults, item])
    }
  }

  return (
    <div className='App'>
      <h3>Select your top 5 tech skills</h3>
      <div className='tech_form'>
        <AddInputfield
          setSubmit={SubmitInput}
          Inputs={inputs}
          Results={results}
          OnDelete={HandleDelete}
          OnInputs={setInputs}
        />
        <Skillset onSkillClick={HandleSuggestion} />
      </div>
    </div>
  )
}

export default App
