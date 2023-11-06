import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0" />
                    <link rel="icon" href="/favicon8.ico"></link>
                    <title>Espello</title>
                    <script src="https://cdn.jsdelivr.net/gh/gijsroge/tilt.js@1.2.1/dist/tilt.jquery.min.js"></script>
                    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.global.min.js"></script>
                </Head>
                <body id="root">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
