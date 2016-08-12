(function ($) {
  Drupal.behaviors.social_sharing = {
    attach: function (context, settings) {
      $('.social-sharing-buttons', context).once('social-sharing', function () {
        var $socialSharingContainer = $(this);
        $('a', this).click(function (e) {
          e.preventDefault();
          var loc = window.location;
          var currentPageUrl = loc.protocol + '//' + loc.host + loc.pathname + loc.search;

          if ($(this).hasClass('social-sharing-button-facebook')) {
            var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(currentPageUrl);
            var sharePopupName = 'facebookshare';
          } else if ($(this).hasClass('social-sharing-button-twitter')) {
            var shareUrl = 'https://www.twitter.com/intent/tweet?url=' + encodeURI(currentPageUrl);
            var sharePopupName = 'twittershare';

            // Include article title as part of the share text.
            if ($socialSharingContainer.data('article-title')) {
              shareUrl += '&text=' + encodeURIComponent($socialSharingContainer.data('article-title'));
            }
          } else {
            return;
          }

          window.open(shareUrl, sharePopupName, 'width=600, height=400, scrollbars=no');
        })
      })
    }
  }
})(jQuery);
