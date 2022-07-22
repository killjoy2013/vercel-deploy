import app from "next/app";

export default class MyApp extends app {
  static getInitialProps({ Component, router, ctx }) {
    let pageProps = app.getInitialProps({ Component, router, ctx });

    //if (ctx.req.headers.host.match(/localhost/)) {
    pageProps = {
      ...pageProps,
      host: ctx.req.headers.host,
    };
    //}

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <section id="app">
        <Component {...pageProps} />
      </section>
    );
  }
}
