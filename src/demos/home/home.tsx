import { FunctionalComponent, h } from 'preact';
import { Button } from 'src/components/button';
import { Demo } from 'src/components/demoTemplate';

const h1Style = {
  backgroundColor: `#8e8e8e`,
  padding: 10,
};
const Home: FunctionalComponent = () => {
  const testFunc54t1rfqdsfgvadsgasdfdsafasdfas = (data) => {
    console.log(data);
    return `test1`;
  };
  const testFunc54t1rfqdsfgvadsgasdfds34321421412afasdfas = (data) => {
    console.log(data);
    return `test2`;
  };
  return (
    <div>
      <h1 style={h1Style}>Funs Demos：</h1>
      <Demo data={{ a: 1, b: 2 }} method={testFunc54t1rfqdsfgvadsgasdfdsafasdfas}></Demo>
      <Demo data={{ a: 3, b: 4 }} method={testFunc54t1rfqdsfgvadsgasdfds34321421412afasdfas}></Demo>
      <p>This is the Home component.</p>
    </div>
  );
};

export default Home;
