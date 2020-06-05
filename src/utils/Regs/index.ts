const Regs = {
  objectLike: /^(\[|\{)(\w:\S*|\S)*(\]|\})$/,
  regExpLike: /^\/.+\/$/,
  stringLike: /^('|"|`).+('|"|`)$/,
};
export default Regs;
