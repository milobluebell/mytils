import { FunctionalComponent, h } from 'preact';
import { Demo } from 'src/components/demoTemplate';
import encodeObject from 'src/utils/Translate/encodeObject';
import getDataType from 'src/utils/Calc/getDatatype';
import countdown from 'src/utils/Time/countdown';
import countdownNow from 'src/utils/Time/countdown/fromNow';
import countdownDuration from 'src/utils/Time/countdown/fromDuration';
import getQueryParams from 'src/utils/Url/getQueryParams';
import getRestParams from 'src/utils/Url/getRestParams';
import getRatioFromNum from 'src/utils/Number/getRatioFromNum';
import getNumFromRatio from 'src/utils/Number/getNumFromRatio';
import formatUnixTime from 'src/utils/Time/formatUnixTime';
import getByteLength from 'src/utils/Calc/getByteLength';
import decodeUTF8 from 'src/utils/Translate/decodeUTF8';
import encodeUTF8 from 'src/utils/Translate/encodeUTF8';

const hStyle = {
  backgroundColor: `#8e8e8e`,
  padding: 10,
};
const Home: FunctionalComponent = () => {
  return (
    <div>
      <h2 style={hStyle}>mytils {process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}</h2>

      {/* demos */}
      <Demo params={[1, true]} method={encodeObject}></Demo>
      <Demo params={[123, 'zh']} method={getDataType}></Demo>
      <Demo params={[2398348861, 3379424523, '{y}:{M}:{d}, {hh}:{mm}:{ss}']} method={countdown}></Demo>
      <Demo params={[2398348800]} method={countdownNow}></Demo>
      <Demo params={[216124]} method={countdownDuration}></Demo>
      <Demo params={[['test', 'test2'], 'http://192.168.102.11:8080?test=1&test2=2']} method={getQueryParams}></Demo>
      <Demo params={[]} method={getQueryParams}></Demo>
      <Demo params={[`/company/{company}/order/detail/{part}`, 'https://192.168.102.11:8080/company/macrohard/order/detail/C##?version=3']} method={getRestParams}></Demo>
      <Demo params={[0.24, 2, true]} method={getRatioFromNum}></Demo>
      <Demo params={['24%', 3, true]} method={getNumFromRatio}></Demo>
      <Demo params={[2398348800, 'YYYY/MM/DD HH:mm:ss']} method={formatUnixTime}></Demo>
      <Demo params={['麻麻，我想吃烤山药']} method={getByteLength}></Demo>
      <Demo params={['一给我里，giao,giao！']} method={encodeUTF8}></Demo>
      <Demo params={['&#x5B9D;&#x8D1D;&#x56DE;&#x5BB6;&#x5403;&#x996D;&#x5417;&#xFF1F;']} method={decodeUTF8}></Demo>
      {/* end of demos */}
    </div>
  );
};

export default Home;
