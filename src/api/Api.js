// import React from "react";
import axios from "axios";
const baseUrl = "http://localhost:3001";
// const baseUrl = "https://lrcapi.prashantdey.in";
const token = sessionStorage.getItem("token");
export const RegisterUser = async (params, type) => {
  return await axios.post(`${baseUrl}/${type}/register`, params);
};

export const getAllStudent = () => {
  return axios.get(`${baseUrl}/student/getstudent`, {
    headers: { Authorization: `${token}` },
  });
};

export const getSingleStudent = (id) => {
  return axios.get(`${baseUrl}/student/${id}`);
};

export const LoginUser = (data, type) => {
  return axios.post(`${baseUrl}/${type}/login`, data);
};

export const QuestionUpload = (params) => {
  return axios.post(`${baseUrl}/uploadQuestion`, params);
};

export const getStudentByBatch = (params) => {
  return axios.post(`${baseUrl}/getAllBatchStudent`, params);
};

export const getAllBatch = () => {
  return axios.get(`${baseUrl}/getAllBatch`);
};

export const createNewBatch = (params) => {
  return axios.post(`${baseUrl}/batch/register`, params);
};


export const capstoneAttendance = (params) => {
  return axios.post(`${baseUrl}/attendance/capstoneAttendance`, params);
};

export const getAllCapstoneProgress = () => {
  return axios.get(`${baseUrl}/capstoneProgress/getAllCapstoneProgress`);
};

export const getCapstoneDetails = (id)=>{
  console.log('inside fun',id)
  return  axios.get(`${baseUrl}/capstoneProgress/getCapstoneDetails/${id}`);

};

export const markAttendance = (params) => {
  return axios.post(`${baseUrl}/attendance/register`, params);
};

export const getStudentAttendance = (id) => {
  return axios.get(`${baseUrl}/attendance/${id}`);
};

export const updateStudentProfile = (id , data) => {
  return axios.put(`${baseUrl}/student/updateStudentProfile/${id}` , data);
};

export const getAttendanceCount = (id) => {
  return axios.get(`${baseUrl}/attendance/attendanceCount/${id}`);
};

export const getAllPlacementOpportunity = () => {
  return axios.get(`${baseUrl}/placement/getAllPlacementOpportunity`);
};

export const getStudentPlacementOpportunity = (id) => {
  return axios.get(`${baseUrl}/placement/getStudentPlacementOpportunity/${id}`)
}

export const getCompanyList = () => {
  return axios.get(`${baseUrl}/company/getCompanyList`)
}

export const getJobDetails = (id) => {
  return axios.get(`${baseUrl}/company/getJobDetails/${id}`)
}

export const getCareerServiceUser = (id) => {
  return axios.get(`${baseUrl}/careerService/getcareeruser/${id}`)
}

export const addCapstoneData = (params) => {
  return axios.post(`${baseUrl}/capstone/addCapstoneData/`, params)
}

export const getAllCapstoneData = () => {
  return axios.get(`${baseUrl}/capstone/`)
}

export const getCapstoneDataById = (id) => {
  return axios.get(`${baseUrl}/capstone/${id}`)
}