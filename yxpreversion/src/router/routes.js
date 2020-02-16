const TopContainer = () => import('components/home/TopContainer.vue')

const Home = () => import('components/home/Home.vue')
const HomeMenu = () => import('components/home/HomeMenu.vue')
const SchoolRandom = () => import('../components/home/SchoolRandom.vue')
const HomeLessons = () => import('../components/home/HomeLessons.vue')

const Login = () => import('components/login/Login.vue')

const Register = () => import('components/login/Register.vue')

const routes = [{
    path: '/',
    redirect: '/test/homemenu'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,

    children: [{
        path: '',
        redirect: 'home',
      },
      {
        path: 'home',
        components: {
          'top-container': TopContainer,
          'home-menu': HomeMenu,
          'school-random': SchoolRandom,
          'home-lessons': HomeLessons,
        }
      },
      {
        path: 'about',
        components: {
          'top-container': TopContainer,
          'about-test': () => import( /* webpackChunkName: "about" */ /* webpackMode: "lazy" */ 'views/About.vue')
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },

  {
    path: '/none',
    name: 'none',
    component: () => import('components/home/none.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ /* webpackMode: "lazy" */ 'views/About.vue')
  },
  // -------------------------------------------------------test用例---------------------------------------
  {
    path: '/test/slot',
    component: () => import('test/slot-parent.vue')
  },
  {
    path: '/test/panel',
    component: () => import('test/el-cascader-panel.vue')
  },
  {
    path: '/test/carousel',
    component: () => import('test/el-carousel.vue'),
  },
  {
    path: '/test/homemenu',
    component: () => import('test/t-home-menu'),
  }
]

export default routes