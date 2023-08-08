import RegistrationForm from './components/RegistrationForm.vue';
import LoginForm from './components/LoginForm.vue';
import WelcomePage from './components/WelcomePage.vue';

export const routes = [
  { path: '/', component: LoginForm },
  { path: '/register', component: RegistrationForm },
  { path: '/welcome', component: WelcomePage },
];