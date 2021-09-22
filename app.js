new Vue({
    el: '#app',

    data() {
        return {
            // List to save courses list
            courses: [],
            // properties needed to add a new course
            title: '',
            time: '',
            totalTime: 0,

        }
    },

    computed: {},

    methods: {

        courseAlreadyExists(course) {
            //list empty
            if (this.courses.length == 0) {
                return false
            }

            //check the list
            for (const c of this.courses) {
                // Compare the titles
                if (c.title === course.title) {
                    return true
                }
            }

            return false
        },

        modifyCourseTime(course) {
            for (const c of this.courses) {
                if (c.title === course.title) {
                    
                    c.time = parseInt(c.time, 10) + parseInt(course.time, 10)
                    console.log(c);
                    break
                }
            }
        },

        cleanInputFields() {
            this.title = ''
            this.time = ''
        },

        validateHours() {
            return this.time > 0 
        },

        validateTitle() {
            return this.title !== ''
        },

        addCourse() {
            if (!this.validateHours() || !this.validateTitle()) {
                console.log("At least one param is not valid")
                this.cleanInputFields()
                return
            }

            const courseObj = {title: this.title, time: parseInt(this.time, 10)}

            console.log(courseObj)

            if (!this.courseAlreadyExists(courseObj)) {
                // Add the course to the list
                this.courses.push(courseObj)
                console.log("saved");
            }
            else {
                // Increment the hours qty
                this.modifyCourseTime(courseObj)
            }

            this.totalTime += parseInt(this.time, 10)

            this.cleanInputFields()

        }
    }
})