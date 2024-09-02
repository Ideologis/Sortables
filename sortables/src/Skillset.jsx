import './Skillset.css'

const Skillset = ({onSkillClick}) => {
  const skills =['HTML','CSS','Bootstrap','Typescript','VueJS','Angular','NodeJS']
  return (
    <div className="skillset">
      <h2>Suggested Skills</h2>
      <ol>
      {skills.map((item) =>(
        <li onClick={() => onSkillClick(item)}>{item}</li>
      ))}
      </ol>
    </div>
  )
}

export default Skillset
