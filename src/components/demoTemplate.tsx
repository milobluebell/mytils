import { FunctionalComponent, h } from 'preact';
import { Button } from './button';

interface IDemoProps {
  data?: any;
  method: () => any;
}
const demoStyle = {
  marginTop: 20,
  padding: 6,
  borderTop: `solid gray 2px`,
  borderRadius: 4,
  backgroundColor: `#eaeaea`,
  position: `relative`,
};
const tagStyle = {
  position: `absolute`,
  right: 0,
  top: 0,
  backgroundColor: `#c1c1c1`,
  minWidth: 150,
  textAlign: `center`,
  fontSize: 16,
  padding: 6,
};
export const Demo: FunctionalComponen = (props: IDemoProps) => {
  return (
    <div style={demoStyle}>
      <table>
        <tr>
          <td>原始数据类型：</td>
          <td>{Object.prototype.toString.call(props?.data)}</td>
        </tr>
        <tr>
          <td>原始数据：</td>
          <td>{JSON.stringify(props?.data).toString() || 'undefined'}</td>
        </tr>
      </table>
      <Button onClick={() => props.method(props?.data)}>{props.method.name}</Button>
      <div style={tagStyle}>{props.method.name}</div>
    </div>
  );
};
