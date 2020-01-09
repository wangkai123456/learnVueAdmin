export default async (elemId, pageIndex, pageSize, totalCount) => {
  const clientHeight = (document.getElementById(elemId) || document.body).clientHeight; // 可见区域高度
  const scrollTop2 = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; // 滚动条到顶部的距离
  const scrollHeight = document.body.clientHeight; // 整个页面高度
  if (clientHeight - scrollTop2 < scrollHeight + 100 && Number(pageIndex) * Number(pageSize) < Number(totalCount)) {
    return ++pageIndex;
  }
  // 如果分页到底
  if (Number(pageIndex) * Number(pageSize) >= Number(totalCount) && clientHeight - scrollTop2 < scrollHeight + 100) {
    // reject 需要传入Error对象
    return false;
  }
};