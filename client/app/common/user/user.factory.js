let UserFactory = function () {
  const user = {};

  let getUser = () => {
    return user;
  };

  let getUserSessionId = () => {
    return user.sessionId;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  return { getUser, getUserSessionId, isSignedIn };
};

export default UserFactory;
