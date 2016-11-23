let BotFactory = function ($http, User) {
  const apiPrefix = 'http://api.mendelx.com/bot';

  let getMedicalData = (input) => {
    const apiUrl = apiPrefix + '/interpretWebInput';
    const payload = {
      sessionId: User.getUserSessionId(),
      input,
    };

    return $http.post(apiUrl, payload);
  };

  return { getMedicalData };
};

export default BotFactory;
