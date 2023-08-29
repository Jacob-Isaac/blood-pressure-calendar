import { Div, Div1, Div2, Div3, Div4 } from "./styled";

const KeyInfo = () => {
  return (
    <Div>
      <h1>KEY INFO</h1>
      <Div1>
        Hypertonia arterialis is a condition of the circulatory system
        characterized by periodically or persistently elevated blood pressure,
        both systolic "upper" and diastolic "lower".
      </Div1>
      <Div2>
        Hypertension can be primary "essential", which means there is no known
        somatic cause that can be removed by medical intervention, or secondary
        "symptomatic", which means there is a specific cause, such as kidney
        disease, endocrine disorders or brain disease.
        <br />
        Hypertension is diagnosed by measuring blood pressure "hypertension is
        defined as values exceeding 140 for systolic pressure or 90 for
        diastolic pressure". Other tests may include blood tests, urine tests,
        ECG, echocardiography, eye examination, chest X-ray and ultrasound.
      </Div2>
      <Div3>
        Hypertension treatment depends on the cardiovascular risk assessment.
        Non-pharmacological measures include lifestyle changes, such as weight
        normalization, salt restriction, potassium intake, moderate alcohol
        consumption, smoking cessation and physical activity. If these are not
        enough, pharmacological therapy based on a range of antihypertensive
        drugs may be introduced. In case of secondary hypertension, the
        underlying cause should also be treated.
      </Div3>
      <Div4>
        Hypertension can cause serious complications, such as left ventricular
        failure, hypertensive retinopathy, cerebral complications and renal
        failure. Therefore, regular monitoring and control of blood pressure is
        essential to prevent organ damage and reduce the risk of cardiovascular
        events.
      </Div4>
    </Div>
  );
};

export default KeyInfo;
