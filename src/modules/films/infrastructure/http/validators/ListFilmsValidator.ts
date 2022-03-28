import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.QUERY]: {
    limit: Joi.number().positive().max(50).default(5),
    offset: Joi.number().positive().default(1),
  },
})
