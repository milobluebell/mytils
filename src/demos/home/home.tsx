import { FunctionalComponent, h } from 'preact';
import { Demo } from 'src/components/demoTemplate';
import isObject from 'src/utils/isX/isObject';
import isArray from 'src/utils/isX/isArray';
import translateInputValue from 'src/utils/Translate/translateInputValue';
import dataType from 'src/utils/Calc/dataType';
import countdown from 'src/utils/Time/countdown';
import countdownFromUnix from 'src/utils/Time/countdown/fromUnix';
import countdownFromDuration from 'src/utils/Time/countdown/fromDuration';

const hStyle = {
  backgroundColor: `#8e8e8e`,
  padding: 10,
};
const Home: FunctionalComponent = () => {
  return (
    <div>
      <h2 style={hStyle}>Funs Demos</h2>
      <Demo params={[1]} method={translateInputValue}></Demo>
      <Demo params={[1583475041, 1583475631, '{m}分钟{s}秒']} method={countdown}></Demo>
      <Demo params={[1583511350, '{d}天{h}小时，{m}分钟{s}秒']} method={countdownFromUnix}></Demo>
      <Demo params={[`1234`]} method={isObject}></Demo>
      <Demo params={[1234]} method={isArray}></Demo>
      <Demo params={[123, 'zh']} method={dataType}></Demo>
    </div>
  );
};

export default Home;
