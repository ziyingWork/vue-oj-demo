import ACCESS_ENUM from "./accessEnum"


 
/**
 * 检查权限：判断当前用户是否具有某个权限
 * @param loginUser  当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean   有无权限
 */
const checkAccess = (loginUser : any, needAccess : string = ACCESS_ENUM.NOT_LOGIN) => {
    //获取当前用户具有的权限（如果没有loginUser，则表示未登录）
    const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN
}