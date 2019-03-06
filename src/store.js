import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		title: 'Website Bookmarker',
		links: [ 'https://www.youtube.com', 'https://www.facebook.com', 'https://www.twitter.com' ]
	},
	mutations: {
		ADD_LINK: (state, link) => {
			state.links.push(link);
		},
		REMOVE_LINK: (state, link) => {
			state.links.splice(link, 1);
		}
	},
	actions: {
		removeLinks: (ctx, link) => {
			ctx.commit('REMOVE_LINK', link);
		}
	},
	getters: {
		countLinks: (state) => {
			return state.links.length;
		}
	}
});
