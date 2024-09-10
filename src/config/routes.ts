export const routes = {
  auth: {
    login: "/auth/sign-in",
    signUp: "/auth/sign-up",
    forgetPassword: "/auth/forget_password/forget-password",
    otp: "/auth/forget_password/otp",
    newPassword: "/auth/forget_password/new-password",
  },
  dashboard: {
    home: "/",
    institutions: "/dashboard/institutions",
    all_courses: {
    list: "/dashboard/all-courses",
    course_detailes: (course_id: any | string) => `${routes.dashboard.all_courses.list}/${course_id}`, // Reusing the list property
  },
    users: "/dashboard/users",
    calendar: "/dashboard/calendar",
    myAccount: "/dashboard/myAccount",
    files: "/dashboard/files",
    semesters: "/dashboard/semesters",
  },
};
