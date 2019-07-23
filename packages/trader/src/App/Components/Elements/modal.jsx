import classNames        from 'classnames';
import PropTypes         from 'prop-types';
import React             from 'react';
import ReactDOM          from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import Icon              from 'Assets/icon.jsx';
import VerticalTab       from 'App/Components/Elements/VerticalTabs';

class ModalElement extends React.PureComponent {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {
            modal_root: document.getElementById('modal_root'),
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        this.el.classList.add('modal');
        this.props.showFullBlur();
        this.state.modal_root.appendChild(this.el);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        this.state.modal_root.removeChild(this.el);
        this.props.hideFullBlur();
    }

    handleClickOutside = (event) => {
        if (this.wrapper_ref && !this.wrapper_ref.contains(event.target) && this.props.is_open) {
            this.props.hideFullBlur();
            this.props.toggleModal();
        }
    };

    render() {
        return ReactDOM.createPortal(
            <div ref={this.setWrapperRef} className={classNames('modal__container', this.props.className && `modal__${this.props.className}`)}>
                <div className='modal-header'>
                    <h3 className='modal-header__sidebar'>{this.props.title}</h3>
                    <div className='modal-header__main'>
                        { this.props.header &&
                            <div className='modal-header__section'>
                                {this.props.header}
                            </div>
                        }
                        <div className='modal-header__close' onClick={this.props.toggleModal}>
                            <Icon icon='ModalIconClose' />
                        </div>
                    </div>
                </div>
                <VerticalTab
                    alignment='center'
                    classNameHeader='modal__tab-header'
                    list={this.props.modal_content}
                    selected_index={this.props.selected_index}
                />
            </div>,
            this.el
        );
    }

    setWrapperRef = (node) => {
        this.wrapper_ref = node;
    };
}

ModalElement.propTypes = {
    className     : PropTypes.string,
    header        : PropTypes.node,
    hideFullBlur  : PropTypes.func,
    is_open       : PropTypes.bool,
    modal_content : PropTypes.array,
    selected_index: PropTypes.number,
    showFullBlur  : PropTypes.func,
    title         : PropTypes.string,
    toggleModal   : PropTypes.func,
};

const Modal = ({
    className,
    header,
    hideFullBlur,
    is_open,
    modal_content,
    selected_index,
    showFullBlur,
    title,
    toggleModal,
}) => (
    <CSSTransition
        appear
        in={is_open}
        timeout={250}
        classNames={{
            appear   : 'modal__container--enter',
            enter    : 'modal__container--enter',
            enterDone: 'modal__container--enter-done',
            exit     : 'modal__container--exit',
        }}
        unmountOnExit
    >
        <ModalElement
            className={className}
            header={header}
            hideFullBlur={hideFullBlur}
            is_open={is_open}
            modal_content={modal_content}
            selected_index={selected_index}
            showFullBlur={showFullBlur}
            title={title}
            toggleModal={toggleModal}
        />
    </CSSTransition>
);

Modal.propTypes = {
    className     : PropTypes.string,
    header        : PropTypes.node,
    hideFullBlur  : PropTypes.func,
    is_open       : PropTypes.bool,
    modal_content : PropTypes.array,
    selected_index: PropTypes.number,
    showFullBlur  : PropTypes.func,
    title         : PropTypes.string,
    toggleModal   : PropTypes.func,
};

export {
    Modal,
    ModalElement,
};
