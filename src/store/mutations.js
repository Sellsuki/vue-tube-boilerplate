export const setSearchResult = (state, playload) => {
  state.searchResults = playload
}

export const setSelected = (state, video) => {
  state.selected = video
}

export const addToPlaylist = (state, video) => {
  if (!state.playlists.length) {
    state.selected = video
  }
  state.playlists.push(video)
}

export const removeFromPlaylist = (state, index) => {
  state.playlists.splice(index, 1)
}
