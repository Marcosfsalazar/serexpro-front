import React, {useEffect, useState} from "react";
import PlanDataService from "../services/plan.service";

const AddPlan = () => {
  const initialPlanState = {
    id: null,
    name: "",
    description: "",
    value: 0,
    contractor: "Mariana",
  };
  const [plan, setPlan] = useState(initialPlanState);
  const [score, setScore] = useState();
  const [planValue, setPlanvalue] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const plans = [
    {
      name: "Básico",
      description: "Um plano pra você que precisa de uma pequena ajuda financeira!",
      value: 5000,
      contractor: "Mariana",
    },
    {
      name: "Médio",
      description: "Um plano para você que pretende realizar aquela reforma, ou comprar aquele carro!",
      value: 20000,
      contractor: "Mariana",
    },
    {
      name: "Advanced",
      description: "Um plano pra você que pretende dar aquela virada na sua vida!",
      value: 50000,
      contractor: "Mariana",
    },
  ]

  const handleScore = event => {
    console.log(event)
    const  {value} = event.target;
    setScore(value);
    setShowForm(true)
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    setPlan({ ...plan, [name]: value });
  };

  const savePlan = () => {
    var data = {
      name: plans[planValue].name,
      description: plans[planValue].description,
      value: plans[planValue].value,
      contractor: plans[planValue].contractor
    };
    console.log(data)
    PlanDataService.create(data)
      .then(response => {
        setPlan({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          value: response.data.value,
          contractor: response.data.contractor,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newPlan = () => {
    setPlan(initialPlanState);
    setSubmitted(false);
  };

  useEffect(() => {
    console.log(score)
    if(score < 300){
      setPlanvalue(0)
      return
    }
    if(score < 600){
      setPlanvalue(1)
    }
    if(score > 600){
      setPlanvalue(2)
    }
  },[score])

  return (
    <div>
    <div className="submit-form">
    {submitted ? (
      <div>
        <h4>You submitted successfully!</h4>
        <button className="btn btn-success" onClick={newPlan}>
          Add
        </button>
      </div>
    ) : (
      <div>
        <div className="d-flex flex-column">
          <div className="text-dark h6">Insira seu score serasa</div>
          <input type="text" 
            value={score}
            onChange={handleScore}          
            id="score"
            name="score"
          />
        </div>
          {showForm &&
          <div>
            <div className="form-group">
              <label htmlFor="name">Plano</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                disabled
                value={plans[planValue].name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                disabled
                value={plans[planValue].description}
                onChange={handleInputChange}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="value">Valor</label>
              <input
                type="text"
                className="form-control"
                id="value"
                required
                disabled
                value={plans[planValue].value}
                onChange={handleInputChange}
                name="value"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contractor">Contractor</label>
              <input
                type="text"
                className="form-control"
                id="contractor"
                required
                disabled
                value={plans[planValue].contractor}
                onChange={handleInputChange}
                name="contractor"
              />
            </div>

            <button onClick={savePlan} className="btn btn-success my-2">
              Submit
            </button>
          </div>
          }
        </div>
      )}
    </div>
  </div>
  );
}

export default AddPlan