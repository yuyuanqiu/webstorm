const TopContainer = () => import('components/TopContainer.vue')

const Home = () => import('components/home/Home.vue')
const HomeMenu = () => import('components/home/HomeMenu.vue')
const SchoolRandom = () => import('../components/home/SchoolRandom.vue')
const HomeLessons = () => import('../components/home/HomeLessons.vue')

const SpecialCourse = () => import('views/specialcourse/SpecialCourse')
const SpecificCourseNav = () => import('views/specialcourse/SpecialCourseNav')
const SpecialCourseGood = () => import('views/specialcourse/SpecialCourseGood')
const SpecialCourseAll = () => import('views/specialcourse/SpecialCourseAll')

const LessonsLunbo = () => import('views/specialcourse/LessonsLunbo')

const LessonsADColumn3 = () => import('components/home/LessonsADColumn3')

const Lesson = () => import('components/lessonInfo/Lesson')
const LessonTitle = () => import('components/lessonInfo/LessonTitle')
const LessonBodyLeft = () => import('components/lessonInfo/LessonBodyLeft')
const LessonBodyRight = () => import('components/lessonInfo/LessonBodyRight')

const SchoolAll = () => import('components/school/SchoolAll')

const School = () => import('components/school/School')
const SchoolTitle = () => import('components/school/SchoolTitle')
const SchoolTeacher = () => import('components/school/SchoolTeacher')

const Teacher = () => import('views/teacher/teacher')
const TeacherHead = () => import('views/teacher/teacher-head')
const TeacherBody = () => import('views/teacher/teacher-body')

const Student = () => import('views/student/Student')
const StudentHead = () => import('views/student/StudentHead')
const StudentBody = () => import('views/student/StudentBody')

const Course = () => import('views/course/Course')
const CoursePlayer = () => import('views/course/CoursePlayer')
const CourseDiscuss = () => import('views/course/CourseDiscuss')
const CourseHomework = () => import('views/course/CourseHomework')

const Login = () => import('components/login/Login.vue')

const Register = () => import('components/login/Register.vue')

const NotFound404 = () => import('components/NotFound404.vue')

const routes = [{
    path: '/',
    name: 'home',
    component: Home,

    children: [{
        path: '',
        redirect: 'course/ls'
      },
      {
        // --------------------------主页面------------------------
        path: 'home',
        components: {
          'top-container': TopContainer,
          'home-menu': HomeMenu,
          'school-random': SchoolRandom,
          'home-lessons': HomeLessons,
        }
      },
    ]
  },
  {
    // 当使用命名视图时，应该在子组件定义，即同一级不能同时出现component/components


    // -------------------一级课程分类页面------------------
    path: '/specialcourse/:class',
    component: SpecialCourse,
    children: [{
      path: '',
      components: {
        'special-course-nav': SpecificCourseNav,
        'lessons-lunbo': LessonsLunbo,
        'special-course-good': SpecialCourseGood,
        'lessons-ad-column3': LessonsADColumn3,
        'special-course-all': SpecialCourseAll,

      }
    }]

  },
  {
    // -----------------课程详情页----------------------
    path: '/lessoninfo/:lessonname',
    component: Lesson,
    children: [
      {
        path: '',
        components: {
          'lesson-title': LessonTitle,
          'lesson-body-left': LessonBodyLeft,
          'lesson-body-right': LessonBodyRight,
        }
      }
    ]
  },
  {
    // ------------------------小节课程播放、讨论、作业-------------------
    path: '/course/:coursename',
    component: Course,
    children: [
      {
        path: '',
        components: {
          "course-player": CoursePlayer,
          "course-discuss": CourseDiscuss,
          "course-homework": CourseHomework
        }
      }
    ]
  },
  {
    // -------------------所有学校页--------------------
    path: '/schools',
    component: SchoolAll,
  },
  {
    // ------------------学校详情页--------------------
    path: '/school/:schoolname',
    component: School,
    children: [
      {
        path: '',
        components: {

          'school-title': SchoolTitle,
          'special-course-all': SpecialCourseAll,
          'school-teacher': SchoolTeacher,
        }
      }
    ]
  },
  {
    // -------------教师详情页-------------------
    path: '/teacher/:teacher',
    component: Teacher,
    children: [
      {
        path: '',
        components: {
          'teacher-head': TeacherHead,
          'teacher-body': TeacherBody,
        }
      }
    ]
  },
  {
    //-------------------学生详情页---------------
    path: '/student/:student',
    component: Student,
    children: [
      {
        path: '',
        components: {
          'student-head': StudentHead,
          'student-body': StudentBody,
        }
      }
    ]
  },
  {
    // ----------------登录页面----------------
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
    // component: () => import('components/home/SpecialCourseNav.vue')
  },
  {
    path: '/test/lunbos',
    component: () => import('test/lunbo-eazy')
  },
  {
    path: '/test/lunbo2',
    // component: () => import('test/lunbo2')
  },
  {
    path: '/test/el-img',
    component: () => import('test/el-img')
  },
  {
    path: '/test/video',
    component: () => import('test/vider-player'),
  },
  {
    path: '/test/impress',
    component: () => import('test/impressjs')
  },
  {
    path: '/test/chacao',
    component: () => import('test/chacaousing')
  },
  {
    path: '/co',
    component: () => import('components/common/ContainerFlex')
  },
  // ------------------------404路由
  {
    path: '*',
    component: NotFound404,
  }

]

export default routes