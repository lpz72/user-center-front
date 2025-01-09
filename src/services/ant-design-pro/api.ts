// @ts-ignore
/* eslint-disable */
import  request  from '@/plugins/globalRequest'; //引入自己写的request

/**
 * 退出登录接口  POST /api/user/logout
 */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<Record<string, any>>>('/api/user/logout',{
    method: 'POST',
    ...(options || {}),
    }

  )
}


/**
 * 注册接口  POST /api/user/register
 */
export async function register(body: API.RegisterParams,options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.BaseResponse<API.RegisterResult>>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**
 * 登录接口  POST /api/user/login
 */
export async function login(body: API.LoginParams,options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 搜索用户 GET /api/user/search */
export async function searchUsers(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser[]>>('/api/user/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}
