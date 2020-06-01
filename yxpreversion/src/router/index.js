import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'




Vue.use(VueRouter)


const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// // 取到需要权限判断的路由表
// var addRouFlag = false

// global.antRouter = ''

// import store from '@/store'

// router.beforeEach(function(to, from, next)  {
//   console.log(to)
//   // 取到用户的角色
//   let GetRole = localStorage.getItem("userRole")
//   console.log(GetRole.split(","))

//   // 如果登录了
//   if (GetRole&&GetRole !== 'unload') {
//     // console.log("store", store)
//     next() //next()方法后的代码也会执行
//     // 1.如果路由表 没根据角色进行筛选,就筛选一次
//     if (!addRouFlag) {

//       console.log('test1')
//       addRouFlag = true
//       // 2.根据用户的角色、和需要动态展示的路由，生成符合用户角色的路由
//       var getRoutes = baseRoleGetRouters(quanxian, GetRole.split(","))
//       // 3.利用global属性，让渲染菜单的组件sideMeuns.vue重新生成左侧菜单
//       console.log('getrouter:', getRoutes)
//       store.state.is = getRoutes
//       // global.antRouter = routes.concat(getRoutes)
//       // console.log(global.antRouter)
//       // console.log("is", this.$store.state.is)
//       // 4.将生成好的路由addRoutes
//       router.addRoutes(routes.concat(getRoutes))
//       console.log('routes', routes)
//       // 5.push之后，会重新进入到beforeEach的钩子里,直接进入第一个if判断
//       router.push({ path: to.path })
//     }
//   } else {
//     // 用户没登录，跳转到登录页面
//     if (to.path === '/login') {
//       next()
//     } else {
//       next('/login')
//     }
//   }

// })


// function hasPermission(route, roles) {
//   if (route.meta && route.meta.roles) {
//     // 若roles【登录的角色】在route路由表中，则返回true，否则返回false
//     return roles.some(role => route.meta.roles.indexOf(role) >= 0)
//   } else {
//     // 若路由表中无值，代表没有设置权限，任何用户可访问
//     return true
//   }
// }
// // 根据用户的角色取到该用户对应的路由
// function baseRoleGetRouters(allRoutes, roles) {
//   // allRoutes是动态路由表
//   // roles是取到的用户角色，数组
//   // filter：当前元素的值【路由项】，index，array

//   // filter函数规则：
//   // 若当前元素的值最终返回false，则最后会被过滤掉，只剩下值返回true的项。
//   // 本例中，若当前登录用户角色不在某项路由表中，则会被过滤，最终只剩下符合条件的路由
//   let rightRoutes = allRoutes.filter((route, index) => {
//     if (hasPermission(route, roles)) {
//       // 判断是否有子路由，然后对子路由来一遍递归
//       if (route.children && route.children.length) {
//         route.children = baseRoleGetRouters(route.children, roles)
//       }
//       return true
//     }
//     return false
//   })
//   return rightRoutes
// }



export default router
