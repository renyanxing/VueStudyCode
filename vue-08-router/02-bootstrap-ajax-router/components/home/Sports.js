;
(function () {
    const template = `<!--体育栏目-->
    <div>
        <ul>
            <li v-for="sport in sportArray" :key="sport.id">
                <router-link :to="'/news/sports/detail/'+sport.id">{{sport.title}}</router-link>
            </li>

        </ul>
        <!--详情-->
        <router-view></router-view>
    </div>  `;
    window.Sports = {
        data(){
            return{
                sportArray:[

                ]
            }
        },
        template,
        created() {
            this.getSportArray()
        },
        methods: {
            getSportArray(){
                axios.get('http://127.0.0.1:5500/vue-08-router/02-bootstrap-ajax-router/db/sport.json')
                .then(response => {
                    console.log(response.data)
                    this.sportArray = response.data;
                })
                .catch(error => {

                })
                .finally(() => {

                });
            }
        },
    }
})()