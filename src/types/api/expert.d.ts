import { PageQueryParam, PageResult } from './base';

/**
 * 角色查询参数类型
 */
export interface ExpertQueryParam extends PageQueryParam {
  keywords?: string;
}

/**
 * 角色分页列表项
 */
export interface ExpertItem {
  id: string;
  name: string;
  code: string;
  sort: number;
  status: number;
  deleted: number;
  menuIds?: any;
  permissionIds?: any;
}

/**
 * 角色分页项类型
 */
export type ExpertPageResult = PageResult<ExpertItem[]>;

/**
 * 角色表单类型
 */
export interface ExpertFormData {
  id: string | undefined;
  name: string;
  code: string;
  sort: number;
  status: number;
}
