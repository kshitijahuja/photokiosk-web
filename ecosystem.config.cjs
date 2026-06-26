module.exports = {
  apps: [{
    name: 'photokiosk',
    script: 'npm',
    args: 'start',
    env: {
      PORT: 4000,
      NODE_ENV: 'production'
    }
  }]
};
