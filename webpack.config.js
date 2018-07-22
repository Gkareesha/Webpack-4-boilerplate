const IS_DEV = process.env.NODE_ENV === 'dev';

const preprocessorName = 'sass';

module.exports = env => {
  console.log(`️️🛠️ using ${preprocessorName} as preprocessor 🛠️`);
  console.log(`🛠️ running ${env} Mode using ./webpack/webpack.${env}.js 🛠️`);
  return require(`./webpack/webpack.${env}.js`);
};