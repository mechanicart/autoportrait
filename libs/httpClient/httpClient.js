'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.createHttpClient = createHttpClient;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source),
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key),
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

function createHttpClient(params) {
  var baseRequestInit =
    params === null || params === void 0 ? void 0 : params.requestInit;

  var fetch = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(function* (request) {
      var response = yield window.fetch(request);

      try {
        // may error if there is no body
        response.parsedBody = yield response.json();
      } catch (ex) {}

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response;
    });

    return function fetch(_x) {
      return _ref.apply(this, arguments);
    };
  })();

  var get = /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(function* (url) {
      var args =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : {
              method: 'get',
            };
      return yield fetch(
        new Request(
          url,
          _objectSpread(_objectSpread({}, args), baseRequestInit),
        ),
      );
    });

    return function get(_x2) {
      return _ref2.apply(this, arguments);
    };
  })();

  var post = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(function* (url, body) {
      var args =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : {
              method: 'post',
              body: JSON.stringify(body),
            };
      return yield fetch(new Request(url, args));
    });

    return function post(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  })();

  var put = /*#__PURE__*/ (function () {
    var _ref4 = _asyncToGenerator(function* (url, body) {
      var args =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : {
              method: 'put',
              body: JSON.stringify(body),
            };
      return yield fetch(new Request(url, args));
    });

    return function put(_x5, _x6) {
      return _ref4.apply(this, arguments);
    };
  })();

  return {
    get,
    post,
    put,
  };
}
