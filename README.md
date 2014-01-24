#Touchy SDK Instructions#

NOTE: This SDK is for the stamp screen ONLY! You will need to download one of our server-side
SDKs to implement on your callback page in order to use our API. See beta.snowshoestamp.com/docs/ for
more information.

TO IMPLEMENT:

This stamp screen takes only a few moments to implement. 

1. Put all the files included in this directory
in the directory in your web root that will be accessed when you want the user to stamp. 

2. Open index.html. There are three comments in this file. The first is at line 9, next to a div tag.
This div is the background image you want displayed on your page. Change it to whatever you want, currently
it is just a blue div. NOTE: This stampscreen has error-checking in place that prevents you from including
active HTML elements on the page. However, we have an alternate version without error checking that can allow you
to place HTML elements such as buttons on the page. Contact us at snowshoe@snowshoestamp.com for more info.

3. The second and third comments are at line 23 and 25. These indicate where to place your callback and error URLS.
These can be local, relative URLs, or public URLs. The error URL should be a page that alerts your user that they may
not be able to use the stamp screen due to limitations of their phone. The stamp works on 90% of smartphones being sold
today, but occasionally some phones will have issues. See our own error page (http://beta.snowshoestamp.com/api/v2/uasubmit)
for an example. The callback URL is where you want the stamp screen to send the stamp data. This URL needs to be
running one of Snowshoe's server-side SDKs (available at beta.snowshoestamp.com/get_started/). See the documentation
on how to set up one of these SDKs at beta.snowshoestamp.com/docs/

IMPORTANT NOTE: When using this stamp screen SDK, the callback URL you register with your app on our site is not used!
Only the callback URL that you enter in line 25 will be used.

Questions? Contact snowshoe@snowshoestamp.com for help.