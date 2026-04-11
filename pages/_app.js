import "../styles/globals.css";

import Script from "next/script";
import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LanguageProvider } from "../app/contexts/LanguageContext";

const pageview = () => {
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
const event = (name, options = {}) => {
  window.fbq("track", name, options);
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    pageview();

    const handleRouteChange = () => {
      pageview();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Script
        defer
        id='gtm'
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K7TRS3D');`,
        }}
      ></Script>

      <Script
        defer
        id='snap'
        dangerouslySetInnerHTML={{
          __html: `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
    {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
    a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
    r.src=n;var u=t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r,u);})(window,document,
    'https://sc-static.net/scevent.min.js');
    
    snaptr('init', '61287e66-7b40-4b1f-893a-39ac637766b2', {
    'user_email': '_INSERT_USER_EMAIL_'
    });
    
    snaptr('track', 'PAGE_VIEW');`,
        }}
      ></Script>
      {/* <Script
        defer
        id='snap'
        dangerouslySetInnerHTML={{
          __html: `!function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
          
            ttq.load('CELH4BBC77UAS1JK6R4G');
            ttq.page();
          }(window, document, 'ttq');`,
        }}
      ></Script> */}
      <Script
        id='loadWidget'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
          app_id: "ak6c4ce2",
          name: "<%= current_user.name %>", // Full name
          email: "<%= current_user.email %>", // Email address
          created_at: "<%= current_user.created_at.to_i %>" // Signup date as a Unix timestamp
    };
          `,
        }}
      ></Script>

      <Script
        id='script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
          //Set your APP_ID
var APP_ID = "ak6c4ce2";

window.intercomSettings = {
    app_id: APP_ID
  };
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){
  ic('reattach_activator');ic('update',w.intercomSettings);
  }else{
    var d=document;var i=function(){i.c(arguments);
    };i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');
    s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + APP_ID;var x=d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}
    else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `,
        }}
      ></Script>

      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 4345958292176340);
          `,
        }}
      ></Script>

      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}

export default MyApp;
