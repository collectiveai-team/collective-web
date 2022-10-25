import NextHead from 'next/head';

const Head = (props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || ''}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="static/ant.png"></link>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
        />
    </NextHead>
);

export default Head;
