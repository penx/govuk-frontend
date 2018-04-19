# Global Styles

In GOV.UK Frontend we want to provide a convenient way to have correct styles applied to your links (`<a>`) and paragraphs (`<p>`) without having to set required classes for each instance of an element.

We have chosen 'Opted-in' as the default behaviour.

If you have downloaded the compiled minified CSS file from [the `dist/ `folder](../dist/css), gloabl styles will be set.

If you're importing our Sass files, we have provide a way to opt-out of our global styles in your application.

You can set the `$govuk-global-styles` variable to `false` in your application Sass file.
```
// application.scss

$govuk-global-styles: false;

@import "govuk-frontend/all/all";
```
If you choose this option, you will need to either use classes on links (`<a>`) and paragraphs (`<p>`) or have a different way to apply correct styles.

