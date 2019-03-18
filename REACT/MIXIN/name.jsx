var Counter = React.createClass({
  name: 'counter' ,
  mixins: [logMixin],
  propTypes: {
    count: React.PropTypes.number.isRequired,
  },
  render(){
    console.log(this.name + '::render()');
    return React.DOM.span(null , this.props.count);
  }
});

