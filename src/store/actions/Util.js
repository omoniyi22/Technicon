export const  T_loader =(p)=>{
  let items
  let content = 3
  items = Math.ceil(p.length / content)
  let i = 0
  let j
  let len = []
  while (i < items) {
    j = p.splice(0, content)
    len.push(j)
    i++
  }
  return (len)
}
