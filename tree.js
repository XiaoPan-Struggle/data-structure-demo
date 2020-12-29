// 创建节点
const createTree = value => {
  return {
    data: value,
    children: null,
    parent:null
  }
}

//新增节点
const addChild = (node,value) => {
  // 新生一个节点，在node上新增一个newNode节点
  const newNode = {
    data:value,
    children:null,
    parent:node
  }
  // node有无子结点，有就push，没有就新增再push
  node.children = node.children || []
  node.children.push(newNode)
  return newNode
}