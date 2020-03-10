import { FunctionalComponent, h } from 'preact';
import { Demo } from 'src/components/demoTemplate';
import isObject from 'src/utils/isX/isObject';
import isArray from 'src/utils/isX/isArray';
import translateInputValue from 'src/utils/Translate/translateInputValue';
import getDataType from 'src/utils/Calc/getDatatype';
import countdown from 'src/utils/Time/countdown';
import countdownFromNow from 'src/utils/Time/countdown/fromNow';
import countdownFromDuration from 'src/utils/Time/countdown/fromDuration';

const hStyle = {
  backgroundColor: `#8e8e8e`,
  padding: 10,
};
const Home: FunctionalComponent = () => {
  return (
    <div>
      <h2 style={hStyle}>mytils demos</h2>
      <Demo params={[1]} method={translateInputValue}></Demo>
      <Demo params={[123, 'zh']} method={getDataType}></Demo>
      <Demo params={[1583825398, 1583825798]} method={countdown}></Demo>
      <Demo params={[2398348800]} method={countdownFromNow}></Demo>
      <Demo params={[6124, '{d}天{h}小时{m}分钟{s}秒']} method={countdownFromDuration}></Demo>
    </div>
  );
};

export default Home;
