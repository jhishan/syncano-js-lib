var config = {
  accountKey: 'EXAMPLEACCOUNTKEY',
  apiKey: 'EXAMPLEAPIKEY',
  userKey: 'EXAMPLEUSERKEY',
  socialToken: 'SOCIALTOKEN',
  backend: 'BACKENDNAME',
  instance: 'INSTANCENAME',
  className: 'CLASSNAME',
  channelId: 'CHANNELNAME',
  groupId: 123,
  userId: 456,
  adminId: 123,
  apiKeyId: 456,
  scheduleId: 123,
  triggerId: 456,
  webhookId: 123,
  codeboxId: 456,
  dataobjectId: 123,
  traceId: 456,
  inviteId: 123,
  requestMock: function(uri, options, callback) {
    var res = {};
    res.body = options;
    callback(null, res);
    return;
  },
  mockSettings: {
    warnOnReplace: false,
    warnOnUnregistered: false,
    useCleanCache: true
  }
};

module.exports = config;
