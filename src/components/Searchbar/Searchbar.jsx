import { Component } from "react";
import { FaSearch } from 'react-icons/fa';
import {  toast } from 'react-toastify';
import {SearchbarClass, Form, Input, Button, Span} from './Searchbar.styled'

export default class Searchbar extends Component{
  state = {
    imageName: ''
  }

    handleNameChange = e => {
    this.setState({imageName: e.currentTarget.value.toLowerCase()})
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast("Please,enter text in the search field")
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({imageName:''})
  }
  render() {
    return (
      <>

        <SearchbarClass>
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name='imageName'
              value={this.state.imageName}
              onChange={this.handleNameChange}
            />
            <Button type="submit">
              <FaSearch size={24} />
              <Span>Search</Span>
            </Button>
          </Form>
        </SearchbarClass>
      </>
    )
  };

}
