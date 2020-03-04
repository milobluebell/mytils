import { FunctionalComponent, h } from 'preact';

//
const buttonStyle = {
  cursor: `pointer`,
  padding: 6,
  borderRadius: 5,
};
export const Button: React.FC<any> = (props: any) => {
  return (
    <button onClick={props?.onClick} style={buttonStyle}>
      <span>{`测试 ${props?.text} 方法`}</span>
    </button>
  );
};
