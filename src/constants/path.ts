const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changePassword: '/user/password',
  userSubmissions: '/user/submissions',

  //
  problemAllSubmissions: '/problem/:problemId/all-submissions',
  problemBestSubmissions: '/problem/:problemId/best-submissions',
  problemMySubmissions: '/problem/:problemId/my-submissions',
  //
  
  submit: '/submit/:problemId',
  submissionDetail: '/submission/:submissionId',
  submissionProblem: '/problems/:problemId/submissions',
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
