// We use named exports for Models so that at a glance you can see what is being put on the context object. It's a subtle hint as to how you can pull in a Model as the third argument of a Query or Mutation method.
// Importing the models here and putting them on the context object in the server allows us to use our Mongoose models, without import them into our resolver files.

import { Event } from '../api/events/model_Event'
import { Product } from '../api/products/model_Product'
import { User } from '../api/users/model_User'

export default {
  Event,
  Product,
  User,
}
