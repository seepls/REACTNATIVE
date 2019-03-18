import Actions from './Actions';
import Dialog from './Dialog';
import Form from './Form';
import FormInput from './FormInput';
import Rating from './Rating';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class Excel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.initialData,
      sortby: null,
      descending: false,
      edit: null,
      dialog: null,
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.initialData});
  }
  
  _fireDataChange(data){
    this.props.onDataChange(data);
  }
  
  _sort(key){
    let data = Array.from(this.state.data);
    const descending = this.state.sortby === key && !this.state.descending;
    data.sort(function(a,b){
      return descending
      ? (a[column] < b[column] ? 1 : -1)
      : (a[column] > b[column] ? 1 : -1); 
    });
    this.setState({
      data: data,
      sortby:  key,
      descending: descending,
     }); 
  }
   
  _showEditor(e) {
    this.setState({ edit: {
      row:  parseInt(e.target.dataset.row,  10),
      key:  e.target.dataset.key,
    }});
  }
  
  _save(e) {
    e.preventDefault();
    const value = this.refs.input.getValue();
    let data = Array.from(this.state.data);
    data[this.state.edit.row][this.state.edit.key] = value;
    this.setState({
      edit: null,
      data: data,
    });
    this._fireDataChange(data);
    
    _actionClick(rowidx, action) {
      this.setState({dialog: {type: action, idx: rowidx}});
    }
    
    _deleteConfirmationClick(action) {
      if(action == 'dismis'){
        this._closeDialog();
        return;
      }
      let data = Array.from(this.state.data);
      data.splice(this.state.dialog,idx, 1);
      this.setState({
        dialog: null,
        data: data,
      });
      this._fireDataChange(data);
    _closeDialog(){
      this.setState({dialog: null});
    }
    
    _saveDataDialog(action){
      if (action === 'dismiss'){
        this._closeDialog();
        return;
      }
      let data = Array.from(this.state.data);
      data[this.state.dialog.idx] = this.refs.from.gatData();
      this.setState({
        dialog: null,
        data: data,
      });
      this._fireDataChange(data);
    }
    
    render(){
      return (
        <div className = "Excel">
          {this._renderTable()}
          {this._renderDialog()}
        </div>
      );
    }
    
    _renderDialog(){
      if(!this.state.dialog){
        return null;
      }
      switch (this.state.dialog.type) {
        case 'delete':
          return this._renderDeleteDialog();
        case 'info':
          return this._renderFormDialog(true);
        case 'edit':
          return this._renderFormDialog();
        default:
          throw Error('Unexpected dialog type ${this.state.dialog.type}');
      }
    }
    
    
        
      
      
