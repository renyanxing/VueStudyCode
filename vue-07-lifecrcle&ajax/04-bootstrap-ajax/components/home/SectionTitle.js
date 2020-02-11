(function () {
    window.SectionTitle = {
            props: {
                emplist: Array,
                deleteEmp:Function
            },
            template: `<div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>姓名</th>
                    <th>工资</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <Item v-for="(emp,index) in emplist" :key=emp.id :emp="emp" :deleteEmp="deleteEmp" :index="index" />
            </tbody>
        </table>
    </div>`,
            components: {
                Item
              
            }
        }

})();