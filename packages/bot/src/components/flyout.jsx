import PropTypes        from 'prop-types';
import React            from 'react';
import { connect }      from '../stores/connect';
import                       '../assets/sass/scratch/_flyout.scss';

const Flyout = ({
    toolbox_bounds,
    is_visible,
    flyout_content,
    flyout_width,
}) => (
    <React.Fragment>
        <div
            className={`flyout${!is_visible ? ' flyout--hidden' : ''}`}
            style={{
                left : `${toolbox_bounds.width}px`,
                top  : `${toolbox_bounds.top}px`,
                width: `${flyout_width}px`,
            }}
        >
            { flyout_content }
        </div>
        <div className='flyout__arrow' />
    </React.Fragment>
);

Flyout.propTypes = {
    categoryName: PropTypes.string,
};

export default connect(({ flyout }) => ({
    selected_category: flyout.selected_category,
    is_visible       : flyout.is_visible,
    toolbox_bounds   : flyout.toolbox_bounds,
    flyout_content   : flyout.flyout_content,
    flyout_width     : flyout.flyout_width,
}))(Flyout);

