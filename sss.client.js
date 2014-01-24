window.sss = window.sss || {};

sss.client = (function() {
    var self = {};
    
    function init(callback_url) {
        self.callback_url = callback_url;
    };
    self.init = init;
    
    function ajax(data, cbk, error_cbk) {
        $.ajax(
            {'url': self.callback_url,
             'data': "data=" + sss.util.base64.encode($.toJSON(data)),
             'type': "POST",
             'error': function(data) { 
                 error_cbk && error_cbk(data.responseJSON); 
             }, 
             'success': function(data) { cbk && cbk(data); }
            });
    };
    self.ajax = ajax;


    function call(data) {
        var form = $('<form method="POST"></form>');
        form.attr('action', self.callback_url);
        var input = $('<input name="data" type="hidden"></input>');
        input.val(sss.util.base64.encode($.toJSON(data)));
        form.append(input);
        $('body').append(form);
        form.submit();
    };
    self.call = call;
    
    return self;
})();



