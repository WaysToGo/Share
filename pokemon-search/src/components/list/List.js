import React, { Component } from 'react'
import pokemonData from './pokemon.json'
import Pagination from './Pagination'
import Pokemon from './Pokemon.js';
import Header from '../common/Header'
import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

 class List extends Component {
  constructor(){
    super();// have to call it because it is a subclass of Component also this is uninitialized if super is not called
    this.state={

      game:[],
      page:1,
      totalPages:0,
      updatedData:[],
      error:null,
      filterData:[],
    }
    this.Pagination=this.Pagination.bind(this);
    this.filterList = this.filterList.bind(this);
    this.handlePaginationClick=this.handlePaginationClick.bind(this)
  }

  componentDidMount(){



      this.setState({game:pokemonData,totalPages:pokemonData.length/10},()=>this.Pagination(0,10));


  }
  filterList(event) {


    let updated = this.state.filterData.filter(game =>
      game.Name.toLowerCase().includes(event.target.value)
    );
    this.setState({
      updatedData: updated
    });
  }



  handlePaginationClick(direction) {
    let numberOfItems=10
    let nextPage = this.state.page;

    // Increment nextPage if direction variable is next, otherwise decrement
    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

    this.setState({ page: nextPage }, () => {
      // call fetchCurrencies function inside setState's callback
      // because we have to make sure first page state is updated
      if(direction==='next'){
      this.Pagination(nextPage*numberOfItems,(nextPage*numberOfItems+numberOfItems))
    }
    else{
      this.Pagination(nextPage*numberOfItems-numberOfItems,(nextPage*numberOfItems))
    }
    });
  }



  Pagination(start,end){


    let arr=[];
    for(let i=start;i<end;i++){
      arr.push(this.state.game[i])
    }

    this.setState({updatedData:arr,filterData:arr})

  }

  render() {
const{error,game,page,totalPages,updatedData}=this.state

    if(error){
      return <div className="error">{error}</div>
    }

    return (
      <div>

<Header/>
<TextField
            id="search"

            label="Search"
            InputLabelProps={{
              shrink: true
            }}
            placeholder="Search"
            fullWidth
            margin="normal"
            onChange={this.filterList}
          />
      { <Pokemon game={updatedData}/>}

        <Pagination
          page={page}
          totalPages={totalPages}
          handlePaginationClick={this.handlePaginationClick}
        />
        </div>
    )
  }
}


export default  withStyles()(List);