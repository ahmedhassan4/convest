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
      course_detailes: (course_id: any | string) =>
        `${routes.dashboard.all_courses.list}/${course_id}`, // Reusing the list property
    },
    users: "/dashboard/users",
    calendar: "/dashboard/calendar",
    myAccount: "/dashboard/myAccount",
    files: "/dashboard/files",
    semesters: "/dashboard/semesters",
  },
  eCommerce: {
    dashboard: "/ecommerce",
    products: "/ecommerce/products",
    createProduct: "/ecommerce/products/create",
    productDetails: (slug: string) => `/ecommerce/products/${slug}`,
    ediProduct: (slug: string) => `/ecommerce/products/${slug}/edit`,
    categories: "/ecommerce/categories",
    createCategory: "/ecommerce/categories/create",
    editCategory: (id: string) => `/ecommerce/categories/${id}/edit`,
    orders: "/ecommerce/orders",
    createOrder: "/ecommerce/orders/create",
    orderDetails: (id: string) => `/ecommerce/orders/${id}`,
    editOrder: (id: string) => `/ecommerce/orders/${id}/edit`,
    reviews: "/ecommerce/reviews",
    shop: "/ecommerce/shop",
    cart: "/ecommerce/cart",
    checkout: "/ecommerce/checkout",
    trackingId: (id: string) => `/ecommerce/tracking/${id}`,
  },
};
