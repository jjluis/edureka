import reducer from '../reducers';     //import cuser defined reducers

describe('Reducer', () => {            //test suite --> collection of test cases
  it('should return the initial state', () => {     //test case to return the initial state processed by the reducer
      expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify(  
          {  //convert state (underfined initially) to json and check if it has articles data processed via the reducer
            articles:{}
          }
      ))
  })

  it('reducer test for GET_LATEST_NEWS',() => {  //test case to check if reducer processes this action 
      let state ={
        articles:[]
      }
      state = reducer(state, {                //get a ref. to the a tion processed by the reducer & the state data 
          action: "GET_LATEST_NEWS"
      })
      expect(state).toEqual({                //check if the state processed by the reducer is an articles array
        articles:[]
      })
  })
})
