export const API_ROUTES = {
  OFFERS: {
    GET_GLOBAL: '/offers',
    GET_EXACT: '/offers/{offerId}',
    GET_NEARBY: '/offers/{offerId}/nearby',
  },
  FAVORITE: {
    GET: '/favorite',
    SET: '/favorite/{offerId}/{status}',
  },
  COMMENTS: {
    GET: '/comments/{offerId}',
    POST: '/comments/{offerId}',
  },
  USER: {
    VALIDATE: '/login',
    LOGIN: '/login',
    LOGOUT: '/logout',
  },
};
