import $ from 'jquery';

$(function() {
    $('.copy-to-clipboard').on('click', function(event) {
        var $tempElement = $('<input>');
        $('body').append($tempElement);
        $tempElement.val($(this).prev('input').val()).trigger('select');
        document.execCommand('Copy');
        $tempElement.remove();

        $(this).attr('data-hint', 'Copied to clipboard!').addClass('hint--left');
    });
});
