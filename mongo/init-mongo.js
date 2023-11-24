db = db.getSiblingDB('database2');
db.createUser({
  user: 'user2',
  pwd: 'user2password',
  roles: [{ role: 'readWrite', db: 'database2' }]
});

