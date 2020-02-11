;
(function () {
    const template = `<div class="jumbotron">
    <p v-text="id"></p>
    <p>{{sportDetail.title}}</p>
    <p>{{sportDetail.content}}</p>
</div>`
    window.SportDetail = {
        template,
        data() {
            return {
                id: 1,
                sportDetail: {}
            }
        },
        created() {
            this.getReportById()
        },
        methods: {
            getReportById() {
                this.id = this.$route.params.id - 0;
                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json')
                    .then(response => {
                        const sportArray = response.data;
                        this.sportDetail = sportArray.find(detail => {
                            return detail.id === this.id;
                        })
                    })
                    .catch(error => {

                    })
                    .finally(() => {

                    });
            }
        },
        watch: {
            '$route': function () {
                this.getReportById()
            }
        }
    }
})()