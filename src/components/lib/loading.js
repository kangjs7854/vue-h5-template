import loading from '../baseUI/loading.vue';

loading.install = function(Vue) {
	Vue.component(loading.name, loading);
};

export default loading;