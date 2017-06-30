exports.command = function(selector, profile, callback) {
    var client = this

    var lastArgument = Array.prototype.slice.call(arguments, 0).pop()
    if (typeof (lastArgument) === 'function') {
        callback = lastArgument
    }

    client.execute(function(sel, data) {
      var successResponse = {
        getAuthResponse: () => {
          return { id_token: 'banana' }
        }
      }

      var successEvent = new CustomEvent('success', { 'detail': successResponse })
      var el = document.querySelector(sel)
      el.dispatchEvent(successEvent)
      return true
    }, [selector, profile], function(result) {
        if (typeof callback === 'function') {
            callback.call(client, result.value)
        }
    })

    return this
};
