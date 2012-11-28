# Mouse gesture shortcuts

Allows you to jump to Facebook, Flickr, Wikipedia etc., using just a mouse
gesture.

The current gestures are:

  F = Facebook
  L = Flickr
  T = Twitter
  W = Wikipedia

You can see the images for these letters at the jquery Fancy Gestures web site:
http://anantgarg.com/2009/05/21/jquery-fancy-gestures/

You can also use a more natural top, down, right gesture to do an L.

## Installation from a bundled .crx file

You should be able to easily install the extension by visting
https://fluiddb.fluidinfo.com/about/maxtabs/fluidinfo.com/chrome.crx

## Installation from source

* Download the repo: `git clone http://github.com/terrycojones/mouse-gesture-shortcuts`
* In chrome, go to `chrome://extensions`
* Click on `Developer mode`
* Click on `Load Unpacked Extension...`
* Navigate to the directory where you cloned the repo and click `Open`

## Internals

Look at the console log for a page to see information about what's going
on when letters are not recognized.
