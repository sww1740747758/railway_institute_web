import {
  ExpertFormData,
  ExpertPageResult,
  ExpertQueryParam
} from '@/types/api/expert';

import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取角色分页数据
 *
 * @param queryParams
 */
export function listExpertPages(
  queryParams?: ExpertQueryParam
): AxiosPromise<ExpertPageResult> {
  return request({
    url: '/api/v1/roles/pages',
    method: 'get',
    params: queryParams
  });
}

/**
 * 获取角色详情
 *
 * @param id
 */
export function getExpertFormDetail(id: number): AxiosPromise<ExpertFormData> {
  return request({
    url: '/api/v1/roles/' + id,
    method: 'get'
  });
}

/**
 * 添加角色
 *
 * @param data
 */
export function addExpert(data: ExpertFormData) {
  return request({
    url: '/api/v1/roles',
    method: 'post',
    data: data
  });
}

/**
 * 更新角色
 *
 * @param id
 * @param data
 */
export function updateExpert(id: number, data: ExpertFormData) {
  return request({
    url: '/api/v1/roles/' + id,
    method: 'put',
    data: data
  });
}

/**
 * 批量删除角色，多个以英文逗号(,)分割
 *
 * @param ids
 */
export function deleteExperts(ids: string) {
  return request({
    url: '/api/v1/roles/' + ids,
    method: 'delete'
  });
}
