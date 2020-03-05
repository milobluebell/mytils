
const Regs = {
  alphabet: /^[a-zA-Z]$/,
  number: /^[0-9]$/,
  objectLike: /^(\[|\{)(\w:\S*|\S)*(\]|\})$/,
  regExpLike: /^\/.+\/$/,
  stringLike: /^(\'|\"|\`).+(\'|\"|\`)$/,
}
export default Regs;