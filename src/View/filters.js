'use strict'

/**
 * adonis-framework
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

module.exports = function (env, Route) {
  /**
   * adds route filter and makes use of route to build
   * dynamic routes out of the box
   */
  env.addFilter('route', function (val, options) {
    return Route.url(val, options)
  })

  /**
   * returns a route from it's controller action
   */
  env.addFilter('action', function (val, options) {
    const route = Route.getRoute({handler: val})
    if (!route || !route.route) {
      return null
    }
    return Route.url(route.route, options)
  })

  /**
   * output input as json
   */
  env.addFilter('json', function (val) {
    return JSON.stringify(val)
  })
}
