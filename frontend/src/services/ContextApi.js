import { createContext } from "react";

const ContextApi = createContext({
    userData: {},
    setUserData: () => { },
    userLogin: false,
    setUserLogin: () => { },
    courses: [],
    setCourses: () => { },
    teachers: [],
    setTeachers: () => { }
})

export default ContextApi