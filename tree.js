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

// 查看节点
const travel = (tree) => {
  console.log(tree.data)
  // 最底层就结束
  if(!tree.children) {
    return
  }
  for(let i = 0; i < tree.children.length; i++) {
    // 一层一层查询，直到最后一层
    travel(tree.children[i])
  }
}

//删除节点
const removeNode = (tree,node) => {
  const siblings = node.parent.children
  let index = 0 // 假设第一个就是需要删除的node
  for(let i = 1; i < siblings.length; i++) {
    //相等就是要删除的那个
    if(siblings[i] === node) {
      index = i
    }
  }
  siblings.splice(index,1)
}