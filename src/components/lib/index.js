import Toast from './toast.js'
import Loading from './loading.js'


const components = [
    Toast,
    Loading
]

const install = (Vue, opts = {}) => {
    components.forEach(component => {
		
		Vue.use(component);
	});
}

export default install