!function(){var s=require("preload-store").default,e=document.getElementById("data-preloaded");if(e){var r=JSON.parse(e.dataset.preloaded);Object.keys(r).forEach(function(e){s.store(e,JSON.parse(r[e]))})}var o=document.getElementById("data-discourse-setup").dataset;window.Logster=window.Logster||{},window.Logster.enabled="true"===o.enableJsErrorReporting,Discourse.CDN=o.cdn,Discourse.BaseUrl=o.baseUrl,Discourse.BaseUri=o.baseUri,Discourse.Environment=o.environment,Discourse.SiteSettings=s.get("siteSettings"),Discourse.ThemeSettings=s.get("themeSettings"),Discourse.LetterAvatarVersion=o.letterAvatarVersion,Discourse.MarkdownItURL=o.markdownItUrl,Discourse.ServiceWorkerURL=o.serviceWorkerUrl,I18n.defaultLocale=o.defaultLocale,Discourse.start(),Discourse.set("assetVersion",o.assetVersion);var t=require("discourse/models/session").default;t.currentProp("disableCustomCSS","true"===o.disableCustomCss),o.safeMode&&t.currentProp("safe_mode",o.safeMode),Discourse.HighlightJSPath=o.highlightJsPath,Discourse.SvgSpritePath=o.svgSpritePath,"development"===Discourse.Environment&&(Discourse.SvgIconList=o.svgIconList),o.s3BaseUrl&&(Discourse.S3CDN=o.s3Cdn,Discourse.S3BaseUrl=o.s3BaseUrl),Ember.RSVP.configure("onerror",function(e){e&&"TransitionAborted"===e.message||("development"===Discourse.Environment&&(e?e.message||e.stack?(console.log(e.message),console.log(e.stack)):console.log("Uncaught promise: ",e):console.log("A promise failed but was not caught.")),window.onerror(e&&e.message,null,null,null,e))})}();
//# sourceMappingURL=https://sjc5.discourse-cdn.com/try/assets/preload-application-data-9cd6a7a2a8ad52cfc915d1666732ca9372606dd922cd5793c1358e9924c0103a.js.map