import React            from 'react';
import { BlueInfoIcon } from './Icons.jsx';
import { connect }      from '../stores/connect';

class FlyoutBlock extends React.PureComponent {
    render() {
        const { onInfoClick, onAddClick, block_node } = this.props;

        return (
            <div className='flyout__item'>
                <div className='flyout__item-header'>
                    <div className='flyout__item-label'>{block_node.getAttribute('type')}</div>
                    <div className='flyout__item-buttons'>
                        { onInfoClick &&
                            <BlueInfoIcon className={'info'} onClick={onInfoClick} /> }
                        <button
                            className='flyout__item-add'
                            onClick={() => onAddClick(block_node)}
                        >
                            Add
                        </button>
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
}))(FlyoutBlock);

