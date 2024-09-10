export const endPoitsUrl = {
  auth: {
    login: "auth/login",
    signUp: "auth/register",
    forgetPassword: {
      email: "auth/otp/request",
      otp: "auth/otp/verify",
      resetPassword: "auth/password/update",
    },
  },
  dashboard: {
    home: "dashboard/home",
    courses: {
      allCourses: ({
        old,
        university_id,
      }: {
        old?: boolean | null | undefined;
        university_id: number | string;
      }) => `frontend/courses?old=${old}&university_id=${university_id}`,
      addCourse: "frontend/courses/create",
      deleteCourse: (courseId: number | string) =>
        `frontend/courses/${courseId}`,
      find_details: (courseId: number | string) =>
        `frontend/courses/${courseId}/details`,
      updateCourse: (courseId: number | string) =>
        `admin/courses/${courseId}/update`,
      addStudentToCourse: (courseId: number | string) =>
        `frontend/courses/${courseId}/people/create`,
    },
    unversity: {
      addUniversitie: "admin/universities",
      allUniversities: (page = 1) => `admin/universities?page=${page}`,
      deleteUniversity: (universityId: number | string) =>
        `admin/universities/${universityId}`,
      universitieDetailes: (universityId: number | string) =>
        `admin/universities/${universityId}`,
      updateUniversity: (universityId: number | string) =>
        `admin/universities/${universityId}`,
    },
    users: {
      professor: {
        list: ({
          page = 1,
          university_id,
          search,
        }: {
          page: number | string;
          university_id: number | string;
          search: string;
        }) =>
          `admin/users/${university_id}/Professor?page=${page}&search=${search}`,
      },
      student: {
        list: ({
          page = 1,
          university_id,
          search,
        }: {
          page: number | string;
          university_id: number | string;
          search: string;
        }) =>
          `admin/users/${university_id}/Student?page=${page}&search=${search}`,
      },
      all_users: ({
        page = 1,
        search = "",
        university_id,
      }: {
        page?: number;
        search?: string;
        university_id: number | string;
      }) => `admin/users/${university_id}?page=${page}&search=${search}`,
      delete_member: ({ user_id }: { user_id: number | string }) =>
        `admin/users/${user_id}/delete`,
      delete_member_from_course: ({
        course_id,
        user_id,
      }: {
        course_id: number | string;
        user_id: number | string;
      }) => `frontend/courses/${course_id}/people/${user_id}/delete`,
      add_user: 'admin/users/create',
      people_course: ({
        course_id,
        page = 1,
        search,
      }: {
        course_id: number | string;
        page?: number | string;
        search?: string;
      }) => `frontend/courses/${course_id}/people?page=${page}&name=${search}`,
      add_users_file: `admin/users/import`
    },
    majors: {
      list: ({ university_id }: { university_id: number | string }) =>
        `admin/majors/${university_id}`,
    },
    announcements: {
      homeList: "frontend/courses/announcements",
      list: ({
        course_id,
        page = 1,
      }: {
        course_id: number | string;
        page?: number | string;
      }) => `frontend/courses/${course_id}/announcements?page=${page}`,
      deleteAnnouncement: (announcementId: number | string) =>
        `frontend/courses/announcements/${announcementId}`,
      addAnnouncements: (course_id: number | string) =>
        `frontend/courses/${course_id}/announcements`,
      updateAnnouncements: (announcementId: number | string) =>
        `frontend/courses/announcements/${announcementId}`,
    },
    assignments: {
      addAssignments: ({ course_id }: { course_id: number | string }) =>
        `frontend/courses/${course_id}/assignments`,
      list: ({
        course_id,
        page = 1,
      }: {
        course_id: number | string;
        page?: number;
      }) => `frontend/courses/${course_id}/assignments?page=${page}`,
    },
    discussions: {
      addDiscussions: ({ course_id }: { course_id: number | string }) =>
        `frontend/courses/${course_id}/discussions`,
      list: ({
        course_id,
        page = 1,
      }: {
        course_id: number | string;
        page?: number;
      }) => `frontend/courses/${course_id}/discussions?page=${page}`,
    },
    calandar: {
      calendar_data: ({
        start_date,
        end_date,
      }: {
        start_date: string;
        end_date: string;
      }) => `frontend/calendar/period/${start_date}/${end_date}`,
      eventsType: "frontend/courses/events/types",
      createEvent: "frontend/courses/events/create",
      eventShow: (eventId: number | string) =>
        `frontend/courses/events/${eventId}/show`,
      eventAtendees: (event_id: number | string) =>
        `frontend/courses/events/${event_id}/attendance/attendees`,
      deleteEvent: (event_id: number | string) =>
        `frontend/courses/events/${event_id}/delete`,
      updateEvent: (event_id: number | string) =>
        `frontend/courses/events/${event_id}/update`,
      resetEvent: (event_id: number | string) =>
        `frontend/courses/events/${event_id}/location/reset`,
    },
    course_detailes: {
      modules: (module_id: string | number) =>
        `frontend/courses/${module_id}/modules`,
    },
    add_module: (course_id: string | number) =>
      `frontend/courses/${course_id}/modules`,
    updateModule: (module_id: string | number, course_id: string | number) =>
      `frontend/courses/${course_id}/modules/${module_id}/update`,
    deleteModule: (module_id: string | number) =>
      `frontend/courses/modules/${module_id}`,
    publishPage: (page_id: string | number) =>
      `frontend/courses/pages/${page_id}`,
    addPage: (course_id: string | number) =>
      `frontend/courses/${course_id}/pages`,
    page_list: ({
      course_id,
      page,
    }: {
      course_id: string | number;
      page: string | number;
    }) => `frontend/courses/${course_id}/pages?page=${page}`,
    add_page: (course_id: string | number) =>
      `frontend/courses/${course_id}/pages`,
    updatePage: (page_id: string | number) =>
      `frontend/courses/pages/${page_id}`,
    page_detailes: (page_id: string | number) =>
      `frontend/courses/pages/${page_id}`,
    deletePage: (page_id: string | number) =>
      `frontend/courses/pages/${page_id}`,
    files: {
      list: ({
        course_id,
        page = 1,
        file,
      }: {
        course_id?: string | number;
        page?: number;
        file?: string | number;
      }) =>
        `frontend/courses${course_id ? "/" + course_id : ""}/files${
          file ? `/${file}` : ""
        }?page=${page}`,
      addFolder: `frontend/courses/files`,
      updateFiles: (file_id: string | number) =>
        `frontend/courses/files/${file_id}/update`,
      deleteFiles: (file_id: string | number) =>
        `frontend/courses/files/${file_id}/delete`,
      addFiles: `frontend/courses/files`,
      moveFile: (file_id: string | number) =>
        `frontend/courses/files/${file_id}/update`,
    },
    notifications: ({ page }: { page: number | string }) =>
      `frontend/notifications?page=${page}`,
    all_semesters: ({
      page,
      university_id,
    }: {
      page: number | string;
      university_id: number | string;
    }) => `admin/semesters/${university_id}?page=${page}`,
    add_semester: `admin/semesters/create`,
    update_semester: (id: number | string) => `admin/semesters/${id}/update`,
    delete_semester: (id: number | string) => `admin/semesters/${id}`,
    roles: `admin/roles`
  },
};
