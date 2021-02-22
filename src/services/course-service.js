const COURSES_URL = "https://wbdv-generic-server.herokuapp.com/api/ruiwang1991/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL).then(res => res.json())

export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method:'POST',
        body:JSON.stringify(course),
        headers:{
            'content-type':'application/json'}
        }).then(res => res.json())

export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {method:'DELETE'}).then(res => res.json())

export const updateCourse = (courseId, course) => {

}

const api = {
    findAllCourses: findAllCourses,
    createCourse: createCourse,
    deleteCourse: deleteCourse,
    updateCourse: updateCourse
}

export default api;