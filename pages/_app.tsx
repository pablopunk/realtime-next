import React, { FunctionComponent } from 'react'
import 'tailwindcss/tailwind.css'
import 'styles/global.css'
import { Page } from 'components/Layout'
import { NextSeo } from 'next-seo'
import { SITE_DESCRIPTION, SITE_NAME } from 'config'
import Head from 'next/head'
import { SupabaseProvider } from 'db/client'

const App: FunctionComponent<any> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <SupabaseProvider>
      <Page>
        <NextSeo title={SITE_NAME} description={SITE_DESCRIPTION} />
        <Component {...pageProps} />
      </Page>
    </SupabaseProvider>
  </>
)

export default App
