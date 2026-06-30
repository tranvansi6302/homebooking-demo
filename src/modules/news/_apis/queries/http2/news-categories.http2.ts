import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { createInt32Value } from "../../../../../core/apis/common/common";
import { executeApiQuery } from "../../../../../core/utils/api.util";
import type { PaginatedResult } from "../../../../../core/types/api.type";
import { NewsCategoryQueryClient } from "../protos/news_categories_query.client";
import { GetAllNewsCategoriesRequest, GetDetailNewsCategoryRequest } from "../protos/news_categories_query";

export interface GetAllNewsCategoriesRequestType {
  pagingOption?: {
    pageNumber?: number;
    pageSize?: number;
  };
  orderByOption?: Array<{
    field: string;
    isDescending: boolean;
  }>;
}

export interface GetDetailNewsCategoryRequestType {
  id: number;
}

export interface NewsCategoryResponseType {
  Id: number;
  CateName: string;
  CateSlug: string;
  IsActive: boolean;
  CreatedDate: number;
}

const COMMONS_BASE_URL =
  import.meta.env.VITE_COMMONS_GRPC_URL ||
  "https://05a7566cd97ec253ea57b6c32493b5ec.homebooking.global/home-booking/query/commons";

const transport = new GrpcWebFetchTransport({
  baseUrl: COMMONS_BASE_URL,
});

const categoryQueryClient = new NewsCategoryQueryClient(transport);

export const newsCategoriesHttp2 = {
  getAllNewsCategories: async (body: GetAllNewsCategoriesRequestType) => {
    const request = GetAllNewsCategoriesRequest.create({
      pagingOption: body.pagingOption
        ? {
            pageNumber: body.pagingOption.pageNumber
              ? createInt32Value(body.pagingOption.pageNumber)
              : undefined,
            pageSize: body.pagingOption.pageSize
              ? createInt32Value(body.pagingOption.pageSize)
              : undefined,
          }
        : undefined,
      orderBy:
        body.orderByOption?.map((item) => ({
          field: item.field,
          isDescending: item.isDescending,
        })) ?? [],
    });

    return executeApiQuery({
      clientMethod: categoryQueryClient.getAllNewsCategories.bind(categoryQueryClient),
      request,
      defaultValue: {
        Items: [],
        PageNumber: 1,
        PageSize: 20,
        TotalItems: 0,
        TotalPages: 0,
      } as PaginatedResult<NewsCategoryResponseType>,
    });
  },

  getDetailNewsCategory: async (body: GetDetailNewsCategoryRequestType) => {
    const request = GetDetailNewsCategoryRequest.create({
      id: createInt32Value(Number(body.id)),
    });

    return executeApiQuery({
      clientMethod: categoryQueryClient.getDetailNewsCategory.bind(categoryQueryClient),
      request,
      defaultValue: {} as NewsCategoryResponseType,
    });
  },
};
