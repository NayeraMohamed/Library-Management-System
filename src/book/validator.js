// not currently used, TBI
import {body} from 'express-validator'

export const createValidator = [
    body('title', 'Invalid title').isAlphanumeric(),
    body('author', 'Invalid author').isAlpha(),
    body('location', 'location must be Alphanumeric').isAlphanumeric(),
    body('isbn', 'ISBN location must be Alphanumeric').isAlphanumeric(),
    body('availableQuantity', 'availabe quantity is not an integer').isInt(),
  ]