import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['nl', 'en'],

    // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
    defaultLocale: 'nl',

    // localeDetection: false,

    pathnames: {
        // If all locales use the same pathname, a single
        // external path can be used for all locales.
        '/': '/',
        '/blog': '/blog',
     
        // If locales use different paths, you can
        // specify each external path per locale.
        '/over-ons': {
            nl: '/over-ons',
          en: '/about-us'
        },
     
        // Dynamic params are supported via square brackets
        '/nieuws/[articleSlug]-[articleId]': {
          en: '/news/[articleSlug]-[articleId]'
        },
}});

export const config = {
    // Skip all paths that should not be internationalized. This example skips
    // certain folders and all pathnames with a dot (e.g. favicon.ico)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};