function onlineStatus(users) {
  const total = users.length;

  if (total === 0) {
    return "no one is online";
  } else if (total === 1) {
    return `${users[0]} is online`;
  } else if (total === 2) {
    return `${users[0]} and ${users[1]} are online`;
  } else {
    return `${users[0]}, ${users[1]} and ${total - 2} more online`;
  }
}
console.log(onlineStatus([])); // no one is online
console.log(onlineStatus(['mockIng99'])); // mockIng99 is online
console.log(onlineStatus(['mockIng99', 'J0eyPunch'])); // mockIng99 and J0eyPunch are online
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])); // mockIng99, J0eyPunch and 1 more online
