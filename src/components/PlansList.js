import React, {useState, useEffect} from "react";
import PlanDataService from "../services/plan.service";

const PlanList = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    retrievePlans();
  }, []);

  const retrievePlans = () => {
    PlanDataService.getAll()
      .then(response => {
        setPlans(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <ul className="list-group">
          {plans &&
            plans.map((plan, index) => (
              <li
                className={
                  "list-group-item "
                }
                key={index}
              >
                <div class="card">
                  <div class="card-header">
                    Plano de Crédito
                  </div>
                  <div class="card-body">
                    <h6 class="card-title">{plan.name}</h6>
                    <p class="card-text">{plan.description}</p>
                    <h6 className="card-title">Dados</h6>
                    <p>Plano no valor de R${plan.value}, no nome de {plan.contractor}</p>
                  </div>
                </div>
              </li>
            ))}      
    </ul>
  );
}

export default PlanList