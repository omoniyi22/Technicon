export function de(a) {
  let num = `${a}`.match(/[0-9]/g)
  let alf = `${a}`.match(/[A-Za-z]/g)
  if (num !== null) {
    if (alf !== null) {
      if (a.length > 8) return true
      else return "Password must contain at least eight characters"
    }
    else return "Password must contain at least one alphabet"
  }
  else return "Password must contain at least one number"
}