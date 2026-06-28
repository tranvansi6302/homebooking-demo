import type { UnaryCall } from '@protobuf-ts/runtime-rpc'
import type { CommonResult } from '../types/api.type'

type ExecuteApiQueryArgs<TRequest extends object, TResponse extends object, T> = {
  clientMethod: (request: TRequest, options: { meta: Record<string, string> }) => UnaryCall<TRequest, TResponse>
  request: TRequest
  defaultValue: T
  extraMeta?: Record<string, string>
}

export const handleResponse = <T>(response: CommonResult, defaultValue: T): T => {
  if (response.statusCode === 200 || response.statusCode === 201) {
    if (!response.data) return defaultValue

    try {
      return JSON.parse(response.data) as T
    } catch {
      return response.data as T
    }
  }

  throw {
    statusCode: response.statusCode,
    messageCode: response.messageCode,
    message: response.messageCode || 'API request failed',
    details: response.error || null,
  }
}

export const executeApiQuery = async <TRequest extends object, TResponse extends object, T>({
  clientMethod,
  request,
  defaultValue,
  extraMeta = {},
}: ExecuteApiQueryArgs<TRequest, TResponse, T>): Promise<T> => {
  const unaryCall = clientMethod(request, { meta: extraMeta })
  const response = await unaryCall.response

  return handleResponse<T>(response as unknown as CommonResult, defaultValue)
}
