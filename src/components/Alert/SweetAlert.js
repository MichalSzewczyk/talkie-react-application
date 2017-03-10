import { Component, PropTypes } from 'react';
import swal from 'sweetalert';
import pick from 'sweetalert';
import mousetrap from 'sweetalert';
import warning from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
import outsideTargetHandlerFactory from './utils/outsideTargetHandlerFactory';

const ALLOWS_KEYS = [
  'title',
  'text',
  'type',
  'customClass',
  'showCancelButton',
  'showConfirmButton',
  'data-has-done-function',
  'confirmButtonText',
  'confirmButtonColor',
  'cancelButtonText',
  'imageUrl',
  'imageSize',
  'html',
  'animation',
  'inputType',
  'inputValue',
  'inputPlaceholder',
  'showLoaderOnConfirm'
];

const REMOVED_KEYS = [
  'timer',
  'closeOnConfirm',
  'closeOnCancel',
  'allowOutsideClick',
  'allowEscapeKey'
];

const OVERWRITE_PROPS = {
  closeOnConfirm: false,
  closeOnCancel: false,
  allowOutsideClick: false,
  allowEscapeKey: false
};

// reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
const ALLOWS_INPUT_TYPES = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week'
];

function warningRemoved(props) {
  REMOVED_KEYS.forEach(key => {
    warning(
      props[key] === undefined,
      '%s has been removed from sweetalert-react, pass `show` props and use event hook instead.',
      `\`${key}\``
    );
  });
}

export default class SweetAlert extends Component {
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    // sweetalert option
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    type: PropTypes.oneOf(['warning', 'error', 'success', 'info', 'input']),
    customClass: PropTypes.string,
    showCancelButton: PropTypes.bool,
    showConfirmButton: PropTypes.bool,
    confirmButtonText: PropTypes.string,
    confirmButtonColor: PropTypes.string,
    cancelButtonText: PropTypes.string,
    imageUrl: PropTypes.string,
    imageSize(props, propName) {
      if (!/^[1-9]\d*x[1-9]\d*/.test(props[propName])) {
        return new Error('imageSize should have the format like this: "80x80"');
      }
    },
    html: PropTypes.bool,
    animation: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['pop', 'slide-from-top', 'slide-from-bottom'])
    ]),
    inputType: PropTypes.oneOf(ALLOWS_INPUT_TYPES),
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    showLoaderOnConfirm: PropTypes.bool,

    // custom option
    show: PropTypes.bool,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
    onEscapeKey: PropTypes.func,
    onOutsideClick: PropTypes.func
  };
  /* eslint-enable react/no-unused-prop-types */

  static defaultProps = {
    // sweetalert option
    text: null,
    type: null,
    customClass: null,
    showCancelButton: false,
    showConfirmButton: false,
    confirmButtonText: 'OK',
    confirmButtonColor: '#aedef4',
    background: '#000000',
    cancelButtonText: 'Cancel',
    imageUrl: null,
    imageSize: '80x80',
    html: false,
    animation: true,
    inputType: 'text',
    inputPlaceholder: null,
    inputValue: null,
    showLoaderOnConfirm: false,
    closeOnConfirm: true,
    timer: 1000,


    // custom option
    show: false
  };

  constructor(props, context) {
    super(props, context);
    this._show = false;
  }

  componentDidMount() {
    this.setupWithProps(this.props);

    if (this.props.onOutsideClick) {
      this.registerOutsideClickHandler(this.props.onOutsideClick);
    }
  }

  componentWillReceiveProps(props) {
    this.setupWithProps(props);

    const oldOutsideClickHandler = this.props.onOutsideClick;
    const newOutsideClickHandler = props.onOutsideClick;

    if (oldOutsideClickHandler !== newOutsideClickHandler) {
      if (oldOutsideClickHandler && newOutsideClickHandler) {
        this.unregisterOutsideClickHandler();
        this.registerOutsideClickHandler(newOutsideClickHandler);
      } else if (oldOutsideClickHandler && !newOutsideClickHandler) {
        this.unregisterOutsideClickHandler();
      } else if ((!oldOutsideClickHandler) && newOutsideClickHandler) {
        this.registerOutsideClickHandler(newOutsideClickHandler);
      }
    }
  }


  componentWillUnmount() {
    this.unregisterOutsideClickHandler();
    this.unbindEscapeKey();
  }

  setupWithProps(props) {
    warningRemoved(props);
    const { onConfirm, onCancel, onEscapeKey } = props;
    if (show) {
      swal({
        ...pick(props, ALLOWS_KEYS),
        ...OVERWRITE_PROPS
      }, isConfirm => this.handleClick(isConfirm, onConfirm, onCancel));
      this._show = true;
      if (onEscapeKey) SweetAlert.bindEscapeKey(onEscapeKey);
    } else {
      this.handleClose(onClose);
    }
  }

  registerOutsideClickHandler(handler) {
    this._outsideClickHandler = outsideTargetHandlerFactory(
      document.getElementsByClassName('sweet-alert')[0],
      handler
    );
    this.enableOutsideClick();
  }

  unregisterOutsideClickHandler() {
    this.disableOutsideClick();
    this._outsideClickHandler = null;
  }

  enableOutsideClick() {
    const fn = this._outsideClickHandler;
    if (fn) {
      document.addEventListener('mousedown', fn);
      document.addEventListener('touchstart', fn);
    }
  }

  disableOutsideClick() {
    const fn = this._outsideClickHandler;
    if (fn) {
      document.removeEventListener('mousedown', fn);
      document.removeEventListener('touchstart', fn);
    }
  }

  static bindEscapeKey(onEscapeKey) {
    mousetrap.bind('esc', onEscapeKey);
  }

  static unbindEscapeKey() {
    mousetrap.unbind('esc');
  }

  static handleClick(isConfirm, onConfirm, onCancel) {
    if (isConfirm !== false) {
      if (onConfirm) onConfirm(isConfirm);
    } else {
      if (onCancel) onCancel(); // eslint-disable-line no-lonely-if
    }
  }

  handleClose(onClose) {
    if (this._show) {
      swal.close();
      this.unbindEscapeKey();
      if (onClose) onClose();
      this._show = false;
    }
  }

  render() {
    return null;
  }
}