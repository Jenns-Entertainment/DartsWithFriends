import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import { useLobbyStore } from '../stores/lobby'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Home',
      component: HomeView
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
      component: () => import('../views/Board.vue')
    },
    {
      path: '/dartboard',
      name: 'Dartboard',
      component: () => import('../views/Dartboard.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/lobby',
      name: 'Lobby',
      component: () => import('../views/Lobby.vue')
    },
    {
      path: '/createLobby',
      name: 'CreateLobby',
      component: () => import('../components/Lobbies/CreateLobby.vue')
    },
    {
      path: '/JoinLobby',
      name: 'JoinLobby',
      component: () => import('../components/Lobbies/JoinLobby.vue')
    },
    {
      path: '/imprint',
      name: 'Imprint',
      component: () => import('../views/Imprint.vue')
    },
    {
      path: '/Lobbies',
      name: 'Lobbies',
      component: () => import('../views/Lobbies.vue')
    },
    {
      path: '/Settings',
      name: 'Setings',
      component: () => import('../views/Settings.vue')
    },
    {
      path: '/Statistics/:friendId',
      name: 'Statistics',
      component: () => import('../views/Statistics.vue'),
      props: true, // Allows passing route params as component props
    },
  ]
})

export default router
