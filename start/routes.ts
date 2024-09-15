/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router
      .group(() => {
        router.get('/create', [UsersController, 'createUser']);
        router.get('auth', [UsersController, 'userAuth'])

      })
      .prefix('users')
  })
  .prefix('api/v1')
