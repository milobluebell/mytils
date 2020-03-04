import { FunctionalComponent, h } from 'preact';

interface IButtonProps {
  children: any;
  onClick: () => void;
}
//
const buttonStyle = {
  cursor: `pointer`,
  outline: `none`,
  padding: 6,
  borderRadius: 5,
};
export const Button: FunctionalComponen = (props: IButtonProps) => {
  return (
    <button onClick={props?.onClick} style={buttonStyle}>
      <span>{`测试 ${props?.children?.toString()} 方法`}</span>
    </button>
  );
};
