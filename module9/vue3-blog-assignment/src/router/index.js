import Home from '../components/Home.vue';
import Post from '../components/Post.vue';
import PostList from '../components/PostList.vue'

export const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: Post },
  { path: '/postlist/:id', component: PostList },
];