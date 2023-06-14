String.prototype.sanitaize = function () {
  if (!this || this.trim().length === 0) return '';
  return this.toLowerCase();
};
//Sanitaize and remove spaces
String.prototype.srs = function () {
  return this.sanitaize().replace(/\s/g, '');
};
//Sanitaize and remove spaces and underscores
String.prototype.srsu = function () {
  return this.sanitaize().replace(/[\s_]/g, '');
};

export const filterMembers = ({ word, power, isPowerEnabled }, members) => {
  const checkWord = word
    ? (member) =>
        member.name.srs().includes(word.srs()) ||
        member.crew.srsu().includes(word.srs())
    : () => true;

  const checkPower = isPowerEnabled
    ? (member) => member.avg_power == power
    : () => true;

  return members.filter((member) => checkWord(member) && checkPower(member));
};

export const sortMembers = ({ sortByName, sortByPower }, members) => {
  let sortedMembers = [...members];
  if (sortByName) {
    sortByName === 'descendent'
      ? sortedMembers.sort((a, b) => a.name.localeCompare(b.name))
      : sortedMembers.sort((a, b) => b.name.localeCompare(a.name));
  }
  if (sortByPower) {
    sortByName === 'descendent'
      ? sortedMembers.sort((a, b) => b.avg_power - a.avg_power)
      : sortedMembers.sort((a, b) => a.avg_power - b.avg_power);
  }

  return sortedMembers;
};

export const filterMembersByWord = (value, members) => {
  const sanitaizedValue = value.srs();
  return members.filter(
    (member) =>
      member.name.srs().includes(sanitaizedValue) ||
      member.crew.srsu().includes(sanitaizedValue)
  );
};

export const filterMembersByRange = (value, members) => {
  return members.filter((member) => member.avg_power == value);
};
