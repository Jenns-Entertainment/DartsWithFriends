import { createRouter, createWebHistory } from 'vue-router'
import { useLobbyStore } from '../stores/lobby'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/home/Home.vue')
    },
    {
      path: '/Home',
      component: () => import('../views/home/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    // Hier fehlt noch der Games Link
    {
      path: '/Board',
      name: 'Board',
      component: () => import('../views/dartboard/Board.vue')
    },
    {
      path: '/dartboard',
      name: 'Dartboard',
      component: () => import('../views/dartboard/Dartboard.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/settings/Profile.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/login/Register.vue')
    },
    {
      path: '/lobby',
      name: 'Lobby',
      component: () => import('../views/lobby/Lobby.vue')
    },
    {
      path: '/createLobby',
      name: 'CreateLobby',
      component: () => import('../views/lobbies/Create_lobby.vue')
    },
    {
      path: '/JoinLobby',
      name: 'JoinLobby',
      component: () => import('../views/lobbies/Join_lobby.vue')
    },
    {
      path: '/Lobbies',
      name: 'Lobbies',
      component: () => import('../views/lobbies/lobbies.vue')
    },
    {
      path: '/Settings',
      name: 'Setings',
      component: () => import('../views/settings/Settings.vue')
    },
    {
      path: '/Statistics',
      name: 'Statistics',
      component: () => import('../views/statistics/Statistics.vue'),
    },
  ]
})

export default router
