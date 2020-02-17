
module.exports = {
  apps : [{
    name: 'server',
    script: 'loadtest.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '18.211.232.32',
      ref  : 'origin/master',
      username : 'Barathbk98',
      password : 'bk191998',
      repo : 'https://github.com/Barathbk98/loadtest-server.git',
      path : '/var/www/loadtest-server',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
