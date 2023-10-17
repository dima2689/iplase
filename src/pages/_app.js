import Head from 'next/head';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from '../store/index';

import Layout from '../components/Layout';
import '../styles/globals.css';
import { ScrollToTop } from '../components/ScrollComps';

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
    const title = pageProps?.product?.title
        ? pageProps.product.title
        : 'магазин iPhone / ремонт iPhone, Xiaomi';
    return (
        <Layout>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>iPlace Самара - {title}</title>
                <meta name="yandex-verification" content="4d594eda9aa50e3a" />
                <meta
                    name="description"
                    content="iPlace - магазин iPhone / ремонт iPhone, Xiaomi"
                />
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
            <ScrollToTop />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.instanceOf(Object).isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
