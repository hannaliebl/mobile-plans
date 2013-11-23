<h1>Potential Plans Mobile Stylesheet</h1>

<a href="http://www.hannaliebl.com/lab/mobile-plans">Live version</a>.

This is a mobile-first, responsive stylesheet that could work as a starting point for a mobile version of Grinnellplans. I've tested it on mobile Safari on an iPhone running iOS 7. It also works on Chrome (v31), Safari (v6), and Firefox (v25) on a Mac, though the styles could be tweaked a bit to make it look a little better on a desktop view.

I used a dummy page, as it depends on things not yet present in the base Plans markup:

1. A <meta> tag to set the viewport to device-width

2. A script to handle the collapsible menus and autoread unread counts. Also, I wrote the script using jQuery 1.10.2, not the 1.4.X that Plans links to at present. The collapsible menus could probably be written entirely in CSS...but I'm not sure that would work within the existing markup Plans uses.

Some other notes...

3. The design/UI is pretty rough at present. It would be nice to include icons, for example, to make it clear the menus are collapsible.

4. I originally had the autoread menus stay with the user as they scrolled, but that didn't work in mobile Safari, because of some problem with window and height() calculations. Keeping the menus at the top makes everything a lot easier...but is maybe not as nice in terms of usability. The original JavaScript for this is commented out on the scripts page.