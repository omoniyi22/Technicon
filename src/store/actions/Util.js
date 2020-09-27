export const T_loader = (p) => {
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

export const DateSorter = (arr) => {
  console.log(arr)
  return arr.filter(res => res.type === "client" || res.type === "admin")
    .sort((a, b) => {
      let dateA = new Date(a.time), dateB = new Date(b.time)
      return dateA - dateB
    })
}

export function EmailTest(d) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(d)
}



export function TestPassword(a, b) {
  let num = `${a}`.match(/[0-9]/g)
  let alf = `${a}`.match(/[A-Za-z]/g)
  if (num !== null) {
    if (alf !== null) {
      if (a.length > 7) {
        if (a === b) return true
        else return "Password did not match"
      }
      else return "Password must contain at least eight characters"
    }
    else return "Password must contain at least a alphabet"
  }
  else return "Password must contain at least a number"
}



export function N(a, d) {
  let b = "₦ "
  if (d) {
    a = (((d / 100) * a) + a).toString()
    let h
    a = a.toString()
    if (a.indexOf(".") !== -1) {
      a = Number(a).toFixed(1)
      h = a.slice(a.indexOf("."), (a.indexOf(".") + 2))
      a = a.slice(0, (a.indexOf(".")))
    }
    console.log(a)
    for (let i in a) {
      b = b.concat(a[i])
      if ((a.length > 3 && Number(i) === 0 && ((Number(i) + 1) !== a.length)) || (a.length > 3 && (Number(i)) % 3 === 0) && ((Number(i) + 1) !== a.length)) {
        b = b.concat(",")
      }
    }
    let z = h ? b + h : b
    return z
  } else {
    let h
    a = a.toString()
    if (a.indexOf(".") !== -1) {
      a = Number(a).toFixed(1)
      h = a.slice(a.indexOf("."), (a.indexOf(".") + 2))
      a = a.slice(0, (a.indexOf(".")))
    }
    for (let i in a) {
      b = b.concat(a[i])
      if ((a.length > 3 && Number(i) === 0 && ((Number(i) + 1) !== a.length)) || (a.length > 3 && (Number(i)) % 3 === 0) && ((Number(i) + 1) !== a.length)) {
        b = b.concat(",")
      }
    }
    let z = h ? b + h : b
    return z
  }
}
