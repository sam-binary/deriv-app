import React            from 'react';
import { InfoBlueIcon } from './Icons.jsx';
import { connect }      from '../stores/connect';

class FlyoutItem extends React.PureComponent {
    render() {
        return (
            <div className='flyout__item'>
                <div className='flyout__item-header'>
                    <div className='flyout__item-label'>{this.props.block_node.getAttribute('type')}</div>
                    <div className='flyout__item-buttons'>
                        <InfoBlueIcon onClick={() => alert('hello')} />
                        <button className='flyout__item-add' onClick={() => this.props.onAddClick(this.props.block_node)}>Add</button>
                    </div>
                </div>
                <div id={this.props.id} className='flyout__block-workspace' />
            </div>
        );
    }

    componentDidMount() {
        this.props.initBlockWorkspace(this.props.id, this.props.block_node);
    }
}

export default connect(({ flyout }) => ({
    initBlockWorkspace: flyout.initBlockWorkspace,
    onAddClick        : flyout.onAddClick,
}))(FlyoutItem);

