import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport'
import { createBoolValue, createInt32Value, createStringValue } from '../../../../../core/apis/common/common'
import type { PaginatedResult } from '../../../../../core/types/api.type'
import { executeApiQuery } from '../../../../../core/utils/api.util'
import type {
  GetAllBookingCatalogServicesRequestType,
  GetDetailBookingCatalogServiceRequestType,
} from '../../../_types/service-catalog/service-catalog.req.type'
import type {
  ServiceDetailResponseType,
  ServiceResponseType,
} from '../../../_types/service-catalog/service-catalog.res.type'
import {
  GetAllBookingCatalogServicesRequest,
  GetDetailBookingCatalogServiceRequest,
} from '../protos/service-catalog/booking_catalog_service_query'
import { BookingCatalogServiceQueryClient } from '../protos/service-catalog/booking_catalog_service_query.client'

const BOOKINGS_BASE_URL =
  import.meta.env.VITE_BOOKINGS_GRPC_URL ||
  'https://05a7566cd97ec253ea57b6c32493b5ec.homebooking.global/home-booking/query/bookings'

const transport = new GrpcWebFetchTransport({
  baseUrl: BOOKINGS_BASE_URL,
})

const serviceQueryClient = new BookingCatalogServiceQueryClient(transport)

export const serviceCatalogHttp2 = {
  getAllServices: async (body: GetAllBookingCatalogServicesRequestType) => {
    const request = GetAllBookingCatalogServicesRequest.create({
      serName: body.serName ? createStringValue(body.serName) : undefined,
      servPid: body.servPid !== undefined ? createInt32Value(Number(body.servPid)) : undefined,
      isOnlyChildren: body.isOnlyChildren !== undefined ? createBoolValue(body.isOnlyChildren) : undefined,
      pagingOption: body.pagingOption
        ? {
            pageNumber: body.pagingOption.pageNumber ? createInt32Value(body.pagingOption.pageNumber) : undefined,
            pageSize: body.pagingOption.pageSize ? createInt32Value(body.pagingOption.pageSize) : undefined,
          }
        : {
            pageNumber: createInt32Value(1),
            pageSize: createInt32Value(200),
          },
      orderBy: body.orderByOption?.map((item) => ({
        field: item.field,
        isDescending: item.isDescending,
      })),
    })

    return executeApiQuery({
      clientMethod: serviceQueryClient.getAllBookingCatalogServices.bind(serviceQueryClient),
      request,
      defaultValue: {
        Items: [],
        PageNumber: 1,
        PageSize: 100,
        TotalItems: 0,
        TotalPages: 0,
      } as PaginatedResult<ServiceResponseType>,
    })
  },

  getServiceDetail: async (body: GetDetailBookingCatalogServiceRequestType) => {
    const id = body.id ?? body.Id
    const request = GetDetailBookingCatalogServiceRequest.create({
      id: createInt32Value(id),
    })

    return executeApiQuery({
      clientMethod: serviceQueryClient.getDetailBookingCatalogService.bind(serviceQueryClient),
      request,
      defaultValue: {} as ServiceDetailResponseType,
    })
  },
}
