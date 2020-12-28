const createList = (value) => {
  return createNode(value)
}
// 给最后一个节点新增节点
const appendList = (list, value) => {
  const node = createNode(value)
  let x = list // 初始化为需要操作的那个节点
  while (x.next) {
    // 当当前节点还有节点时，就把x赋值为当前节点的节点
    x = x.next
  }
  // 当x.next === null 时，x就是最后一个节点了
  x.next = node
  return node
}


// 删除节点
const removeFromList = (list,node) => {
  // 复制一份进行操作
  let x = list
  let p = node
  // 当不是第一个，也不是null时
  while(x !== node && x !== null) {
    p = x // 储存一份x
    x =x.next  // 将x赋值为x的节点
  }
  if(x === null) { // x为null，表示不需要删除
    return false
  } else if(x === p) { // 说明删除第一个节点
    p = x.next
    return p //删除第一层节点，第二层x.next也就变成第一层了
  } else {
    p.next = x.next
    return list // 删除中间节点，则第一层还是原返回
  }
}

// 遍历节点
/* 
  接收需要操作的节点和一个操作函数
*/
const travelList = (list, fn) => {
  let x = list // 复制一份进行操作
  while (x !== null) {
    // 当不是最后一个节点时
    fn(x) // 执行操作
    x = x.next // 将x赋值为 当前节点的下一个节点
  }
}
travelList(list, (node) => {
  console.log(node.data)
})

// 创建节点
const createNode = (value) => {
  return {
    data: value,
    next: null,
  }
}
