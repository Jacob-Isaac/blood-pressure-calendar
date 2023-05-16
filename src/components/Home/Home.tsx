import {
  Div,
  Div1,
  Div2,
  Div3,
  Div4,
} from "./styled";

const Home = () => {

      return (       
    <Div>
      <h1>SUMMARY</h1>
      <Div1><p>30-day average</p>1</Div1>
      <Div2><p>30-day highest</p>2</Div2>
      <Div3><p>30-day lowest</p>3</Div3>
      <Div4><p>30-day termomether</p>4</Div4>
    </Div>
      );
    };

export default Home;