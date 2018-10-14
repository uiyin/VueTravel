let mutations = {
  // state代表整个数据
  changecity (state, city) {
    state.city = city
    try {
      window.localStorage.setItem('city', city)
    } catch (e) {}
  }
}
export default mutations
