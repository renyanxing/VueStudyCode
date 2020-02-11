;
(function () {
    window.router = new VueRouter({
        linkActiveClass: 'active',
        routes: [{
                path: '/',
                component: AppHome
            },
            {
                path: '/news',
                component: News,
                children: [{
                    path: 'sports',
                    component: Sports,
                    children: [{
                        path: 'detail/:id',
                        component: SportDetail
                    }]
                }, {
                    path: 'tech',
                    component: Tech,
                    children:[{
                        path: 'detail/:id',
                        component: TechDetail
                    }]
                }, {
                    path: '',
                    redirect: 'sports'
                }]
            }, {
                path: '/about',
                component: About
            }
        ]
    })
})()