import { FunctionalComponent, h } from 'preact';
import { Demo } from 'src/components/demoTemplate';
import translateInputValue from 'src/utils/Translate/translateInputValue';
import getDataType from 'src/utils/Calc/getDatatype';
import countdown from 'src/utils/Time/countdown';
import countdownFromNow from 'src/utils/Time/countdown/fromNow';
import countdownFromDuration from 'src/utils/Time/countdown/fromDuration';
import getParamsFromUrl from 'src/utils/Url/getParamsFromUrl';
import getRatioFromNum from 'src/utils/Number/getRatioFromNum';
import getNumFromRatio from 'src/utils/Number/getNumFromRatio';
import formatUnixTime from 'src/utils/Time/formatUnixTime';
import getByteLength from 'src/utils/Calc/getByteLength';

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
      <Demo params={[6124, '{d}天,{h}小时{m}分钟{s}秒']} method={countdownFromDuration}></Demo>
      <Demo params={[['test', 'test2'], 'http://192.168.102.11:8080/?test=1234&test2=51']} method={getParamsFromUrl}></Demo>
      <Demo params={[0.24, 2, true]} method={getRatioFromNum}></Demo>
      <Demo params={['24%', 3, true]} method={getNumFromRatio}></Demo>
      <Demo params={[2398348800, 'YYYY/MM/DD HH:mm:ss']} method={formatUnixTime}></Demo>
      <Demo params={['麻麻，我想吃烤山药']} method={getByteLength}></Demo>
    </div>
  );
};

export default Home;
