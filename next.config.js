const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/nhom8plus/' : '',
  basePath: isProd ? '/nhom8plus' : '',
};
