const TopContainer = () => import('components/home/TopContainer.vue')

const Home = () => import('components/home/Home.vue')
const HomeMenu = () => import('components/home/HomeMenu.vue')
const SchoolRandom = () => import('../components/home/SchoolRandom.vue')
const HomeLessons = () => import('../components/home/HomeLessons.vue')

const SpecialCourse = () => import('components/home/SpecialCourse')
const SpecificCourseNav = () => import('components/home/SpecialCourseNav')
const SpecialCourseGood = () => import('components/home/SpecialCourseGood')
const SpecialCourseAll = () => import('components/home/SpecialCourseAll')

const LessonsLunbo = () => import('components/home/LessonsLunbo')

const Login = () => import('components/login/Login.vue')

const Register = () => import('components/login/Register.vue')

const NotFound404 = () => import('components/NotFound404.vue')

const routes = [{
    path: '/',
    name: 'home',
    component: Home,

    children: [{
        path: '',
        redirect: 'specialcourse'
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
    // 当使用命名视图时，应该在子组件定义，即同一级不能同时出现component/components
    path: '/specialcourse',
    component: SpecialCourse,
    children: [{
      path: '',
      components: {
        'special-course-nav': SpecificCourseNav,
        'lessons-lunbo': LessonsLunbo,
        'special-course-good': SpecialCourseGood,
        'special-course-all': SpecialCourseAll,


      }
    }]

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
  },
  {
    path: '/test/textpic',
    component: () => import('test/text-pic-lunbo')
  },
  {
    path: '/test/specific',
    component: () => import('components/home/SpecialCourseNav.vue')
  },
  {
    path: '/test/lunbos',
    component: () => import('test/lunbo-eazy')
  },
  {
    path: '/test/lunbo2',
    // component: () => import('test/lunbo2')
  },
  // ------------------------404路由
  {
    path: '*',
    component: NotFound404,
  }

]

export default routes