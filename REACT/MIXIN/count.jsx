 
 var TextAreaCounter = React.createClass({
  name : 'TextAreaCounter',
  mixins: [logMixin],
  propTypes: { 
    count: React.PropTypes.number.isRequired,
    }
    render: function(){
       return React.DOM.span(null, this.props.count);
    }
  };
  
