const { INTERACTIONS } = require('../constants');

/**
 * @name routes
 * @description Common express routes used for all resources
 */
let routes = [
  {
    type: 'patch',
    path: '/:instance/:base_version/:resource/:id',
    interaction: INTERACTIONS.PATCH,
  },
  {
    type: 'get',
    path: '/:instance/:base_version/:resource',
    interaction: INTERACTIONS.SEARCH,
  },
  {
    type: 'post',
    path: '/:instance/:base_version/:resource/_search',
    interaction: INTERACTIONS.SEARCH,
  },
  {
    type: 'get',
    path: '/:instance/:base_version/:resource/:id/_history/:version_id',
    interaction: INTERACTIONS.SEARCH_BY_VID,
  },
  {
    type: 'get',
    path: '/:instance/:base_version/:resource/_history',
    interaction: INTERACTIONS.HISTORY,
  },
  {
    type: 'get',
    path: '/:instance/:base_version/:resource/:id/_history',
    interaction: INTERACTIONS.HISTORY_BY_ID,
  },
  {
    type: 'get',
    path: '/:instance/:base_version/:resource/:id',
    interaction: INTERACTIONS.SEARCH_BY_ID,
  },
  {
    type: 'post',
    path: '/:instance/:base_version/:resource',
    interaction: INTERACTIONS.CREATE,
  },
  {
    type: 'put',
    path: '/:instance/:base_version/:resource/:id',
    interaction: INTERACTIONS.UPDATE,
  },
  {
    type: 'delete',
    path: '/:instance/:base_version/:resource/:id',
    interaction: INTERACTIONS.DELETE,
  },
  /* eslint-disable no-useless-escape */
  {
    type: 'get',
    path: '/:instance/:base_version/:resource/:id/([$])expand',
    interaction: INTERACTIONS.EXPAND_BY_ID,
  },
  /* eslint-disable no-useless-escape */
  {
    type: 'post',
    path: '/:instance/:base_version/:resource',
    interaction: INTERACTIONS.OPERATIONS_POST,
  },
  {
    type: 'get',
    path: '/:instance/:base_version/:resource',
    interaction: INTERACTIONS.OPERATIONS_GET,
  },
  // bundle
  {
    type: 'get',
    path: '/:instance/:base_version',
    interaction: INTERACTIONS.OPERATIONS_GET,
  },
  {
    type: 'post',
    path: '/:instance/:base_version',
    interaction: INTERACTIONS.OPERATIONS_POST,
  },
  {
    type: 'put',
    path: '/:instance/:base_version/',
    interaction: INTERACTIONS.OPERATIONS_PUT,
  },
];

/**
 * @name routeArgs
 * @description Common express arguments used on many routes as route params
 */
let routeArgs = {
  INSTANCE: {
    name: 'instance',
    type: 'string',
    conformance_hide: true,
  },
  BASE: {
    name: 'base_version',
    type: 'string',
    conformance_hide: true,
  },
  ID: {
    name: 'id',
    type: 'string',
    conformance_hide: true,
  },
  VERSION_ID: {
    name: 'version_id',
    type: 'string',
    conformance_hide: true,
  },
};

/**
 * @name exports
 * @summary Route config
 */
module.exports = {
  routeArgs: routeArgs,
  routes,
};
