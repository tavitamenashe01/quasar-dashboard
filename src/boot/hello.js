import hello from "hellojs";

export default async ({ Vue }) => {
  hello.init({
    facebook: "592274084715869"
  });
  Vue.prototype.$hello = hello;

  window.fbAsyncInit = function() {
    FB.init({
      appId: "{592274084715869}",
      cookie: true,
      xfbml: true,
      version: "{v6.0}"
    });

    FB.AppEvents.logPageView();
  };

  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
};
