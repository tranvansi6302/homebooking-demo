export interface CommonResult {
    /**
     * @generated from protobuf field: int32 statusCode = 1
     */
    statusCode: number
    /**
     * @generated from protobuf field: bool isSuccess = 2
     */
    isSuccess: boolean
    /**
     * @generated from protobuf field: string data = 3
     */
    data: string
    /**
     * @generated from protobuf field: string dataType = 4
     */
    dataType: string
    /**
     * @generated from protobuf field: string messageCode = 5
     */
    messageCode: string
    /**
     * @generated from protobuf field: PartnerBeautyBookingUserBooking.Error error = 6
     */
    error?: Error
}
export interface ApiError {
    statusCode?: number
    messageCode?: string
    message?: string
    details?: unknown
}

export interface PaginatedResult<T> {
    Items: T[]
    PageNumber: number
    PageSize: number
    TotalItems: number
    TotalPages: number
}