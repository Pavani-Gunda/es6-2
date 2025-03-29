const userData = {name: "Alice",age: "35"}
export default userData
export function getUserInformation(userInfo){
  console.log(userInfo.name)
  console.log(userInfo.age)
}