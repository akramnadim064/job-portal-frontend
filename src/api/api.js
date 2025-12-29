// // import axios from "axios";

// // const API = axios.create({
// //   baseURL: "http://localhost:5000/api",
// // });

// // API.interceptors.request.use((req) => {
// //   const token = localStorage.getItem("token");
// //   if (token) req.headers.Authorization = `Bearer ${token}`;
// //   return req;
// // });

// // export default API;



// import axios from "axios";

// const API = axios.create({
//   baseURL: `${process.env.REACT_APP_API_URL}/api`,
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

// export default API;



// import axios from "axios";

// const API = axios.create({
//   baseURL: process.env.REACT_APP_API_URL
//     ? `${process.env.REACT_APP_API_URL}/api`
//     : "/http://localhost:5000/api",
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export default API;






import axios from "axios";

// Helper to determine the correct Base URL
const getBaseURL = () => {
  if (process.env.REACT_APP_API_URL) {
    // If the Vercel env variable is set, use it
    return `${process.env.REACT_APP_API_URL}/api`;
  }
  // Fallback for local development
  return "http://localhost:5000/api";
};

const API = axios.create({
  baseURL: getBaseURL(),
});

// Attach Token to every request automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;