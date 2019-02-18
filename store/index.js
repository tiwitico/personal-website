let instagram_url = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN';

export const state = () => ({
    instagram: []
});

export const mutations = {
    fillInstagram(state,n){
        state.item = n;
    },
    changeFetchStatus(state, n) {
        state.fetch = n
    }
}

export const actions = {
    fetchList({commit}){
        this.app.$axios
            .$get(instagram_url)
            .then(e => {
                setTimeout(function() { // remove this timeout for real fetching time
                    commit('changeFetchStatus', true);
                    commit('fillInstagram',e);
                }, 2000) // current realFetchingTime + 2s
            });
    }
}