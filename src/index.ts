import 'golden-layout/src/css/goldenlayout-base.css'
import goldenLayout from './golden.vue'
export { registerGlobalComponent } from './golden.vue'
import glComponent from './gl-component.vue'
import { glRow, glCol, glStack } from './gl-groups'
import glDstack from './gl-dstack'
import glRouter from './router/gl-router.vue'
import glRoute from './router/gl-route.vue'
import glContainerRoute from './router/gl-container-route.vue'
export { glCustomContainer } from './roles'

const templateLoader = "TODO",
	templateDefiner = "TODO";

var components : any = {
	goldenLayout, glRouter, glRoute
}, containers: any = {
	glRow, glCol, glStack, glDstack
};

export { glContainerRoute };

const isSubWindow = /[?&]gl-window=/.test(window.location.search);

export default {
	install(Vue : any) {
		for(let i in components)
			Vue.component(i, components[i]);
		if(isSubWindow) {
			for(let i in containers)
				Vue.component(i, templateLoader);
			Vue.component('glComponent', templateDefiner);
		} else {
			for(let i in containers)
				Vue.component(i, containers[i]);
			Vue.component('glComponent', glComponent);
		}
	}
};