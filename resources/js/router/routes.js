function page (path) {
  return () => import(/* webpackChunkName: '' */ `../pages/${path}`).then(m => m.default || m)
}

console.log('Archivo de rutas');
const routes = [  
  { path: '/index',    name: 'index'  ,  component:() => import('../pages/index.vue') },
  { path: '/',         name: 'welcome',  component:() => import('../pages/welcome.vue') },
  { path: '/login',    name: 'login'  ,  component:() => import('../pages/auth/login.vue') },
  { path: '/register', name: 'register', component:() => import('../pages/auth/register.vue') },
  { path: '/password/reset', name: 'password.request',      component:() => import('../pages/auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component:() => import('../pages/auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component:() => import('../pages/auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend',     component:() => import('../pages/auth/verification/resend.vue') },

  { path: '/home', name: 'home', component:() =>  import('../pages/home.vue') },
  { path: '/settings',
    component:() =>  import('../pages/settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile',  name: 'settings.profile',  component:() =>  import('../pages/settings/profile.vue') },
      { path: 'password', name: 'settings.password', component:() =>  import('../pages/settings/password.vue') }
    ] },

  { path: '*', component: page('errors/404.vue') }
]


export default routes; 