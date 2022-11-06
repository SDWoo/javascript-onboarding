function problem7(user, friends, visitors) {
  const answer = [];
  const score = new Map();
  const firstFriends = [];
  const getFriend = (array, friend) => {
    return array.filter((person) => person !== friend)[0];
  };

  friends.forEach((friend) => {
    if (friend.includes(user)) {
      friend = getFriend(friend, user);
      firstFriends.push(friend);
    }
  });

  firstFriends.forEach((friend) => {
    for (let i = 0; i < friends.length; i++) {
      const secondFriend = friends[i].includes(friend)
        ? getFriend(friends[i], friend)
        : '';

      if (secondFriend.length > 0 && secondFriend !== user) {
        score.set(secondFriend, score.get(secondFriend) + 10 || 10);
      }
    }
  });

  visitors.forEach((visitor) => {
    if (!firstFriends.includes(visitor)) {
      score.set(visitor, score.get(visitor) + 1 || 1);
    }
  });

  return [...score.entries()]
    .sort((a, b) => {
      if (a[1] === b[1]) b[0] - a[0];
      else b[1] - a[1];
    })
    .map((friend) => friend[0]);
}

module.exports = problem7;
