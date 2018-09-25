export function getUsers() {
    return (dispatch) =>{
      return fetch('http://localhost:3000/api/v1/users').then(r=>r.json()).then(data=>dispatch({type:'GET_USERS', payload:data}))
    }
}

export function getSkateSpots() {
    return (dispatch) =>{
      return fetch('http://localhost:3000/api/v1/skate_spots').then(r=>r.json()).then(data=>dispatch({type:'GET_SKATE_SPOTS', payload:data}))
    }
}


export function postSkateSpots() {
    return (dispatch) =>{
      return fetch('http://localhost:3000/api/v1/skate_spots',{
        method: "POST",
        body: JSON.stringify({
          name: this.state.SpotName,
          country: 'n/a',
          city: 'n/a',
          state: 'n/a',
          latitude: this.props.latitude,
          longitude: this.props.longitude,
          description: this.state.Description,
          bust_factor: this.state.BustValue,
          photo: 'NYC_Black_Hubba',
          user_id: 1
        }),
        headers: {
          'Content-Type': 'application/json'}
      }).then(r=>r.json()).then(data=>dispatch(getSkateSpots()))
    }
}
