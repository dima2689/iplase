import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="scroll-smooth">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Mr+De+Haviland&family=Prata&family=Roboto:wght@100;300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="quickview-root" />
                    <div id="notification-root" />
                    {/*      yandex metrika */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                            
                                ym(30063649, "init", {
                                    clickmap:true,
                                    trackLinks:true,
                                    accurateTrackBounce:true,
                                    webvisor:true,
                                    ecommerce:"dataLayer"
                                });
                            `,
                        }}
                    />
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/30063649"
                            style={{
                                position: 'absolute',
                                left: '-9999px',
                            }}
                            alt=""
                        />
                    </div>
                    {/*      yandex metrika */}
                </body>
            </Html>
        );
    }
}

export default MyDocument;
