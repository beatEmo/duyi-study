import { readonly, reactive } from "vue";
// 按要求补全函数
// function useUser() {
//   // 在这里补全函数
//   return {
//     user, // 这是一个只读的用户对象，响应式数据，默认为一个空对象
//     setUserName, // 这是一个函数，传入用户姓名，用于修改用户的名称
//     setUserAge // 这是一个函数，传入用户年龄，用户修改用户的年龄
//   };
// }

function useUser() {
  // 在这里补全函数

  const userOrign = reactive({});
  const user = readonly(userOrign);

  const setUserName = (name) => {
    userOrign.name = name;
  };
  const setUserAge = (age) => {
    userOrign.age = age;
  };

  return {
    user, // 这是一个只读的用户对象，响应式数据，默认为一个空对象
    setUserName, // 这是一个函数，传入用户姓名，用于修改用户的名称
    setUserAge // 这是一个函数，传入用户年龄，用户修改用户的年龄
  };
}

const { user, setUserName, setUserAge } = useUser();

console.log(user);
setUserName("mako");
setUserAge(18);
console.log(user);
