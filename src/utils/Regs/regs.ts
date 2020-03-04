
const Regs = {
  alphabet: /^[a-zA-Z]$/,
  number: /^[0-9]$/,
  objectLike: /^(\[|\{)(\w:\S*|\S)*(\]|\})$/,
  regExpLike: /^\/.*\/$/
}
export default Regs;