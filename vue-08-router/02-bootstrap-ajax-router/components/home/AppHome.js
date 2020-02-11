(function () {
    window.AppHome = {
        template: `<div
        class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"
    >
        <!--右边上半区域-->
        <!--<h1 class="page-header">Dashboard</h1>-->
        <slot name="dashboard"></slot>
        <Dashboard :hobbies='hobbies' @delete_hobby="deleteHobby"></Dashboard>
        <!--右边下半区域-->
        <h2 class="sub-header">Section title</h2>
        <section-title :emplist="emplist" :deleteEmp="deleteEmp" ></section-title>
    </div>`,
        data() {
            return {
                hobbies: ['吃饭', '睡觉', '看书', '打游戏'],
                emplist: [

                ]
            }
        },
        components: {
            Dashboard,
            SectionTitle
        },
        methods: {
            deleteEmp(index) {
                this.emplist.splice(index, 1);
            },
            deleteHobby(index) {
                this.hobbies.splice(index, 1);
            }
        },
        created() {
            axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/employee.json')
                .then(response => {
                    console.log(response.data)
                    this.emplist = response.data;
                })
                .catch(error => {

                })
                .finally(() => {

                });
        },
    };
})();