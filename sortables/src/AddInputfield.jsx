
import "./Addinputfield.css";
const AddInputfield = ({setSubmit, Inputs, Results = [], OnDelete, OnInputs}) => {

  
  
    function Handlekey(e) {
      if (e.key === "Enter") {
        setSubmit(e);
      }
    }

  return (
    <div className="fields">
      <div className="results">
        {Results.map((item,index) => (
          <ul>
            <div> {index + 1}. {item}</div>
            <div onClick={() => OnDelete(index)} className="close">❌</div>
          </ul>
        ))}
      </div>
      <form onSubmit={setSubmit}>
        <input
          type="text"
          placeholder="Add a skill"
          value={Inputs}
          onChange={(e) => OnInputs(e.target.value)}
          onKeyDown={(e) => Handlekey(e)}
          
        />
      </form>
    </div>
  );
};

export default AddInputfield;
