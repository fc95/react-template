const intlJection = {
  // app.js
  // useIntl().formatMessage注入到intlJection中，覆盖此方法
  // react组件外也能使用
  formatMessage: function () {
    throw new Error('formatMessage must be override');
  },
};

const formatMessage = (options) => {
  return intlJection.formatMessage(options)
}

export { formatMessage };
export default intlJection;