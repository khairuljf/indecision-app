'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisiblilityApp = function (_React$Component) {
  _inherits(VisiblilityApp, _React$Component);

  function VisiblilityApp(props) {
    _classCallCheck(this, VisiblilityApp);

    var _this = _possibleConstructorReturn(this, (VisiblilityApp.__proto__ || Object.getPrototypeOf(VisiblilityApp)).call(this, props));

    _this.handleHideShow = _this.handleHideShow.bind(_this);
    _this.state = {
      check: true
    };
    return _this;
  }

  _createClass(VisiblilityApp, [{
    key: 'handleHideShow',
    value: function handleHideShow() {
      this.setState(function (prevState) {
        return {
          check: !prevState.check
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handleHideShow },
          this.state.check ? 'Hide Content' : 'Show Content'
        ),
        this.state.check && React.createElement(
          'div',
          null,
          'Test the Test'
        )
      );
    }
  }]);

  return VisiblilityApp;
}(React.Component);

ReactDOM.render(React.createElement(VisiblilityApp, null), document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
