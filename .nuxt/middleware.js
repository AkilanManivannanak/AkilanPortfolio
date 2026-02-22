const middleware = {}

middleware['auth.middleware'] = require('../src/middleware/auth.middleware.ts')
middleware['auth.middleware'] = middleware['auth.middleware'].default || middleware['auth.middleware']

middleware['index'] = require('../src/middleware/index.ts')
middleware['index'] = middleware['index'].default || middleware['index']

middleware['router.middleware'] = require('../src/middleware/router.middleware.ts')
middleware['router.middleware'] = middleware['router.middleware'].default || middleware['router.middleware']

export default middleware
