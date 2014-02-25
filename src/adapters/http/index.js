/**
 * @doc function
 * @id DSHttpAdapterProvider
 * @name DSHttpAdapterProvider
 */
function DSHttpAdapterProvider() {

	this.$get = ['$http', '$log', 'DSUtils', function ($http, $log, DSUtils) {

		/**
		 * @doc property
		 * @id DSHttpAdapterProvider.properties:defaults
		 * @name defaults
		 * @description
		 * Default configuration for this adapter.
		 *
		 * Properties:
		 *
		 * - `{function}` - `serialize` - See [the guide](/documentation/guide/adapters/index). Default: No-op.
		 * - `{function}` - `deserialize` - See [the guide](/documentation/guide/adapters/index). Default: No-op.
		 * - `{function}` - `queryTransform` - See [the guide](/documentation/guide/adapters/index). Default: No-op.
		 */
		var defaults = this.defaults = {
			/**
			 * @doc property
			 * @id DSHttpAdapterProvider.properties:defaults.serialize
			 * @name defaults.serialize
			 * @description
			 * Your server might expect a custom request object rather than the plain POJO payload. Use `serialize` to
			 * create your custom request object.
			 *
			 * @param {object} data Data to be sent to the server.
			 * @returns {*} Returns `data` as-is.
			 */
			serialize: function (data) {
				return data;
			},

			/**
			 * @doc property
			 * @id DSHttpAdapterProvider.properties:defaults.deserialize
			 * @name defaults.deserialize
			 * @description
			 * Your server might return a custom response object instead of the plain POJO payload. Use `deserialize` to
			 * pull the payload out of your response object so angular-data can use it.
			 *
			 * @param {object} data Response object from `$http()`.
			 * @returns {*} Returns `data.data`.
			 */
			deserialize: function (data) {
				return data.data;
			},

			/**
			 * @doc property
			 * @id DSHttpAdapterProvider.properties:defaults.queryTransform
			 * @name defaults.queryTransform
			 * @description
			 * Transform the angular-data query to something your server understands. You might just do this on the server instead.
			 *
			 * @param {object} query Response object from `$http()`.
			 * @returns {*} Returns `query` as-is.
			 */
			queryTransform: function (query) {
				return query;
			}
		};

		/**
		 * @doc interface
		 * @id DSHttpAdapter
		 * @name DSHttpAdapter
		 * @description
		 * Default adapter used by angular-data. This adapter uses AJAX and JSON to send/retrieve data to/from a server.
		 * Developers may provide custom adapters that implement the adapter interface.
		 */
		return {
			/**
			 * @doc property
			 * @id DSHttpAdapter.properties:defaults
			 * @name defaults
			 * @description
			 * Reference to [DSHttpAdapterProvider.defaults](/documentation/api/api/DSHttpAdapterProvider.properties:defaults).
			 */
			defaults: defaults,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:HTTP
			 * @name HTTP
			 * @description
			 * Wrapper for `$http()`.
			 *
			 * ## Signature:
			 * ```js
			 * DS.HTTP(config)
			 * ```
			 *
			 * ## Example:
			 *
			 * ```js
			 * works the same as $http()
			 * ```
			 *
			 * @param {object} config Configuration for the request.
			 * @returns {Promise} Promise produced by the `$q` service.
			 */
			HTTP: HTTP,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:GET
			 * @name GET
			 * @description
			 * Wrapper for `$http.get()`.
			 *
			 * ## Signature:
			 * ```js
			 * DS.GET(url[, config])
			 * ```
			 *
			 * ## Example:
			 *
			 * ```js
			 * Works the same as $http.get()
			 * ```
			 *
			 * @param {string} url The url of the request.
			 * @param {object=} config Configuration for the request.
			 * @returns {Promise} Promise produced by the `$q` service.
			 */
			GET: GET,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:POST
			 * @name POST
			 * @description
			 * Wrapper for `$http.post()`.
			 *
			 * ## Signature:
			 * ```js
			 * DS.POST(url[, attrs][, config])
			 * ```
			 *
			 * ## Example:
			 *
			 * ```js
			 * Works the same as $http.post()
			 * ```
			 *
			 * @param {string} url The url of the request.
			 * @param {object=} attrs Request payload.
			 * @param {object=} config Configuration for the request.
			 * @returns {Promise} Promise produced by the `$q` service.
			 */
			POST: POST,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:PUT
			 * @name PUT
			 * @description
			 * Wrapper for `$http.put()`.
			 *
			 * ## Signature:
			 * ```js
			 * DS.PUT(url[, attrs][, config])
			 * ```
			 *
			 * ## Example:
			 *
			 * ```js
			 * Works the same as $http.put()
			 * ```
			 *
			 * @param {string} url The url of the request.
			 * @param {object=} attrs Request payload.
			 * @param {object=} config Configuration for the request.
			 * @returns {Promise} Promise produced by the `$q` service.
			 */
			PUT: PUT,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:DEL
			 * @name DEL
			 * @description
			 * Wrapper for `$http.delete()`.
			 *
			 * ## Signature:
			 * ```js
			 * DS.DEL(url[, config])
			 * ```
			 *
			 * ## Example:
			 *
			 * ```js
			 * Works the same as $http.delete
			 * ```
			 *
			 * @param {string} url The url of the request.
			 * @param {object} config Configuration for the request.
			 * @returns {Promise} Promise produced by the `$q` service.
			 */
			DEL: DEL,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:find
			 * @name find
			 * @description
			 * Retrieve a single entity from the server.
			 *
			 * Sends a `GET` request to `:baseUrl/:endpoint/:id`.
			 *
			 * @param {object} resourceConfig Properties:
			 * - `{string}` - `baseUrl` - Base url.
			 * - `{string=}` - `endpoint` - Endpoint path for the resource.
			 * @param {string|number} id The primary key of the entity to retrieve.
			 * @param {object=} options Optional configuration. Refer to the documentation for `$http.get`.
			 * @returns {Promise} Promise.
			 */
			find: find,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:findAll
			 * @name findAll
			 * @description
			 * Retrieve a collection of entities from the server.
			 *
			 * Sends a `GET` request to `:baseUrl/:endpoint`.
			 *
			 *
			 * @param {object} resourceConfig Properties:
			 * - `{string}` - `baseUrl` - Base url.
			 * - `{string=}` - `endpoint` - Endpoint path for the resource.
			 * @param {object=} params Search query parameters. See the [query guide](/documentation/guide/queries/index).
			 * @param {object=} options Optional configuration. Refer to the documentation for `$http.get`.
			 * @returns {Promise} Promise.
			 */
			findAll: findAll,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:findAll
			 * @name find
			 * @description
			 * Create a new entity on the server.
			 *
			 * Sends a `POST` request to `:baseUrl/:endpoint`.
			 *
			 * @param {object} resourceConfig Properties:
			 * - `{string}` - `baseUrl` - Base url.
			 * - `{string=}` - `endpoint` - Endpoint path for the resource.
			 * @param {object=} params Search query parameters. See the [query guide](/documentation/guide/queries/index).
			 * @param {object=} options Optional configuration. Refer to the documentation for `$http.post`.
			 * @returns {Promise} Promise.
			 */
			create: create,

			createMany: function () {
				throw new Error('Not yet implemented!');
			},

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:update
			 * @name update
			 * @description
			 * Update an entity on the server.
			 *
			 * Sends a `PUT` request to `:baseUrl/:endpoint/:id`.
			 *
			 * @param {object} resourceConfig Properties:
			 * - `{string}` - `baseUrl` - Base url.
			 * - `{string=}` - `endpoint` - Endpoint path for the resource.
			 * @param {string|number} id The primary key of the entity to update.
			 * @param {object} attrs The attributes with which to update the entity. See the [query guide](/documentation/guide/queries/index).
			 * @param {object=} options Optional configuration. Refer to the documentation for `$http.put`.
			 * @returns {Promise} Promise.
			 */
			update: update,

			updateMany: function () {
				throw new Error('Not yet implemented!');
			},

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:destroy
			 * @name destroy
			 * @description
			 * destroy an entity on the server.
			 *
			 * Sends a `PUT` request to `:baseUrl/:endpoint/:id`.
			 *
			 * @param {object} resourceConfig Properties:
			 * - `{string}` - `baseUrl` - Base url.
			 * - `{string=}` - `endpoint` - Endpoint path for the resource.
			 * @param {string|number} id The primary key of the entity to destroy.
			 * @param {object=} options Optional configuration. Refer to the documentation for `$http.delete`.
			 * @returns {Promise} Promise.
			 */
			destroy: destroy,

			/**
			 * @doc method
			 * @id DSHttpAdapter.methods:destroyAll
			 * @name destroyAll
			 * @description
			 * Retrieve a collection of entities from the server.
			 *
			 * Sends a `DELETE` request to `:baseUrl/:endpoint`.
			 *
			 *
			 * @param {object} resourceConfig Properties:
			 * - `{string}` - `baseUrl` - Base url.
			 * - `{string=}` - `endpoint` - Endpoint path for the resource.
			 * @param {object=} params Search query parameters. See the [query guide](/documentation/guide/queries/index).
			 * @param {object=} options Optional configuration. Refer to the documentation for `$http.delete`.
			 * @returns {Promise} Promise.
			 */
			destroyAll: destroyAll
		};

		function HTTP(config) {
			var start = new Date().getTime();

			return $http(config).then(function (data) {
				$log.debug(data.config.method + ' request:' + data.config.url + ' Time taken: ' + (new Date().getTime() - start) + 'ms', arguments);
				return defaults.deserialize(data);
			});
		}

		function GET(url, config) {
			config = config || {};
			return HTTP(DSUtils.deepMixIn(config, {
				url: url,
				method: 'GET'
			}));
		}

		function POST(url, attrs, config) {
			config = config || {};
			return HTTP(DSUtils.deepMixIn(config, {
				url: url,
				data: attrs,
				method: 'POST'
			}));
		}

		function PUT(url, attrs, config) {
			config = config || {};
			return HTTP(DSUtils.deepMixIn(config, {
				url: url,
				data: attrs,
				method: 'PUT'
			}));
		}

		function DEL(url, config) {
			config = config || {};
			return this.HTTP(DSUtils.deepMixIn(config, {
				url: url,
				method: 'DELETE'
			}));
		}

		function find(resourceConfig, id, options) {
			options = options || {};
			return this.GET(
				DSUtils.makePath(resourceConfig.baseUrl, resourceConfig.endpoint, id),
				options
			);
		}

		function findAll(resourceConfig, params, options) {
			options = options || {};
			options.params = options.params || {};
			if (options.params.query) {
				options.params.query = defaults.queryTransform(options.params.query);
			}
			DSUtils.deepMixIn(options, params);
			return this.GET(
				DSUtils.makePath(resourceConfig.baseUrl, resourceConfig.endpoint),
				options
			);
		}

		function create(resourceConfig, attrs, options) {
			options = options || {};
			return this.POST(
				DSUtils.makePath(resourceConfig.baseUrl, resourceConfig.endpoint),
				defaults.serialize(attrs),
				options
			);
		}

		function update(resourceConfig, id, attrs, options) {
			return this.PUT(
				DSUtils.makePath(resourceConfig.baseUrl, resourceConfig.endpoint, id),
				defaults.serialize(attrs),
				options
			);
		}

		function destroy(resourceConfig, id, options) {
			options = options || {};
			return this.DEL(
				DSUtils.makePath(resourceConfig.baseUrl, resourceConfig.endpoint, id),
				options
			);
		}

		function destroyAll(resourceConfig, params, options) {
			options = options || {};
			options.params = options.params || {};
			if (options.params.query) {
				options.params.query = defaults.queryTransform(options.params.query);
			}
			DSUtils.deepMixIn(options, params);
			return this.DEL(
				DSUtils.makePath(resourceConfig.baseUrl, resourceConfig.endpoint),
				options
			);
		}
	}];
}

module.exports = DSHttpAdapterProvider;
