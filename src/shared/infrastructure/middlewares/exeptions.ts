import { NextFunction, Request, Response } from 'express'

import AppException from '@shared/errors/AppException'

export default function exeptions(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response {
  if (err instanceof AppException) {
    return response.status(err.statusCode).json({
      error: 'Error',
      message: err.message,
    })
  }

  if (err instanceof SyntaxError) {
    return response.status(400).json({
      status: 'Error',
      message: 'Bad request!',
    })
  }

  console.error(err)

  return response.status(500).json({
    error: 'Error',
    message: 'Internal server error.',
  })
}
