declare namespace API {
  //用户信息
  type CurrentUser = {
    data: any;
    id: number;
    username: string;
    userAccount: string;
    avatarUrl: string;
    gender: number;
    email: string;
    phone: string;
    userStatus: number;
    userRole: number;
    planetCode?: string;
    createTime: Date;
  };

  /**
   * 与后端对应，设一个通用返回类型
   * 通用返回类
   */
  type BaseResponse<T> = {
    code: number;
    data: T;
    message: string;
    description: string;
  }


  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type getFakeCaptchaParams = {
    /** 手机号 */
    phone?: string;
  };

  //登录用到的参数
  type LoginParams = {
    status: string;
    userAccount?: string;
    userPassword?: string;
    autoLogin?: boolean;
    type?: string;
  };

  //注册用到的参数
  type RegisterParams = {
    status: string;
    userAccount?: string; // ? 表示该字段是可选项
    userPassword?: string;
    checkPassword?: string;
    type?: string;
  };
  //登录成功后，后端返回的数据
  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  //注册成功后，后端返回的数据
  type RegisterResult = number;

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type ruleParams = {
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  };
}
