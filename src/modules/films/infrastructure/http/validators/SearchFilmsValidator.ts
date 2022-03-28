import { celebrate, Segments, Joi } from 'celebrate'

export default celebrate({
  [Segments.QUERY]: {
    title: Joi.string().trim().min(4).required(),
  },
})
