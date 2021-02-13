import Head from 'next/head';
import banner from '../../assets/banner.jpg'
import logo from '../../assets/logo.png'

export default function PageInfo() {
    return (
        <Head>
            <title>Iara Hospedagem</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:locale" content="pt_BR" />

            <meta property="og:title" content="Iara Hospedagem" />
            <meta property="og:site_name" content="SidekickQuiz" />

            <meta property="og:description" content="Site sobre a hospedagem da dona Iara" />
            <meta property="og:image" content={banner} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image:width" content="1920" />
            <meta property="og:image:height" content="1080" />
            <meta property="og:type" content="website" />

            <link rel="icon" type="image/png" href={logo} />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet" />
        </Head>
    )
}