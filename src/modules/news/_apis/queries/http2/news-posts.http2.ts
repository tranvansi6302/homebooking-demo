import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { createInt32Value } from "../../../../../core/apis/common/common";
import { executeApiQuery } from "../../../../../core/utils/api.util";
import type { PaginatedResult } from "../../../../../core/types/api.type";
import { NewsPostsQueryClient } from "../protos/news_posts_query.client";
import {
  GetAllNewsPostsRequest,
  GetDetailNewsPostsRequest,
} from "../protos/news_posts_query";

export interface GetAllNewsPostsRequestType {
  categoryId?: number | null;
  pagingOption?: { pageNumber?: number; pageSize?: number };
  orderByOption?: Array<{ field: string; isDescending: boolean }>;
}

export interface GetDetailNewsPostRequestType {
  id: number;
}

export interface NewsCategoryType {
  Id: number;
  CateName: string;
  CateSlug: string;
  SortOrder: number;
  IsActived: boolean;
}

export interface NewsPostResponseType {
  Id: number;
  CategoryId: number;
  PostTitle: string;
  PostSlug: string;
  PostExcerpt: string;
  PostContent: string;
  PostThumbnail: string;
  PostStatus: number;
  PublishedAt: number;
  CreatedDate: number;
  UpdatedDate: number;
  IsActived: boolean;
  NewsCategory?: NewsCategoryType;
}

const COMMONS_BASE_URL =
  import.meta.env.VITE_COMMONS_GRPC_URL ||
  "https://8a5da52ed126447d359e70c05721a8aa.homebooking.global/home-booking/query/commons";

const transport = new GrpcWebFetchTransport({
  baseUrl: COMMONS_BASE_URL,
});

const newsQueryClient = new NewsPostsQueryClient(transport);

export const newsPostsHttp2 = {
  getAllNewsPosts: async (body: GetAllNewsPostsRequestType) => {
    const request = GetAllNewsPostsRequest.create({
      categoryId:
        body.categoryId != null
          ? createInt32Value(Number(body.categoryId))
          : undefined,
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
      clientMethod: newsQueryClient.getAllNewsPosts.bind(newsQueryClient),
      request,
      defaultValue: {
        Items: [],
        PageNumber: 1,
        PageSize: 1000,
        TotalItems: 0,
        TotalPages: 0,
      } as PaginatedResult<NewsPostResponseType>,
    });
  },

  getDetailNewsPost: async (body: GetDetailNewsPostRequestType) => {
    const request = GetDetailNewsPostsRequest.create({
      id: createInt32Value(body.id),
    });

    return executeApiQuery({
      clientMethod: newsQueryClient.getDetailNewsPosts.bind(newsQueryClient),
      request,
      defaultValue: null as NewsPostResponseType | null,
    });
  },
};
