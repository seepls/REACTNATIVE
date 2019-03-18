import classNames from 'classnames';
import React, {Component, PropTypes} from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating:  props.defaultValue,
      tmpRating: props.defaultValue,
    };
  }
  
 /* ... more methods ..... */
}

Rating.propTypes = {
  defaultValue: PropTypes.number,
  readonly: PropTypes.bool,
  max: PropTypes.number,
};

Rating.defaultProps = {
  defaultValue: 0,
  max:  5,
};

export default Rating
