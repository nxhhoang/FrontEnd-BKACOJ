const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  userSubmissions: '/user/submissions',

  submissionDetail: '/submissions/:submissionId',
  submissionProblemDetail: '/problems/:problemId/submissions/:submissionId',
  
  login: '/login',
  register: '/register',
  logout: '/logout',
  
  problemset: '/problem',
  problemDetail: '/problem/:problemId',
  
  contest: '/contests',
  contestDetail: '/contests/:contestId',
  
  announcement: '/announcement',
  announcementDetail: '/announcement/:announcementId',
  
  about: '/about'
} as const

export default path
