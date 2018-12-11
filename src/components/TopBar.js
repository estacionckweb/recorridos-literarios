import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

class TopBar extends React.Component {
  state = {
    query: ''
  };

  handleChange = name => event => {
    if(event.target.value === '') this.props.clearSearch()
   this.setState({
     [name]: event.target.value,
   })
  }

  componentWillReceiveProps (nextProps) {
     if(nextProps.query !== this.props.query) {
       this.setState({ query: nextProps.query })
     }
  }

  render () {
    console.log('bar props', this.props)
    return <div className="absolute pin-t pin-r m-2 mr-16 w-64">
    <Input
    onKeyPress={(ev) => {
      console.log(`Pressed keyCode ${ev.key}`);
      if (ev.key === 'Enter') {
        // Do code here
        this.props.searchMapData(this.state.query)
        ev.preventDefault();
      }
    }}
     placeholder="Buscar por texto, autor, o palabra"
     type="search"
     fullWidth
     value={this.state.query}
     className=""
     onChange={this.handleChange('query')}
     inputProps={{
       'aria-label': 'Description',
     }}
   />
    </div>
  }
}

export default TopBar
