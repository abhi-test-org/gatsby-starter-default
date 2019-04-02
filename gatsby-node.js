/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const execa = require('execa')

exports.onPostBootstrap = () => {
  execa('ruby', ['-v']).then((res) => { console.log(res.stdout) }) 
}
