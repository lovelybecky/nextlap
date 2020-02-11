import About from './components/aboutus.vue';
import Curr from './components/curriculum.vue';
import Activity from './components/activities.vue';
import Promotion from './components/promotions.vue';
import Gallery from './components/gallery.vue';
import Career from './components/career.vue';
import Review from './components/reviews.vue';
import Contactus from './components/contact.vue';
import Act1 from './components/act1.vue';
import Act2 from './components/act2.vue';
import Act3 from './components/act3.vue';
import Act4 from './components/act4.vue';

export default[
	{path:'/about',component:About},
	{path:'/service',component:Curr},
	{path:'/activities',component:Activity},
	{path:'/program',component:Promotion},
	{path:'/facility',component:Gallery},
	{path:'/career',component:Career},
	{path:'/testmonials',component:Review},
	{path:'/contact',component:Contactus},
	{path:'/act1',component:Act1},
	{path:'/act2',component:Act2},
	{path:'/act3',component:Act3},
	{path:'/act4',component:Act4},
]