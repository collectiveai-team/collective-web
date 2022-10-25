import dynamic from 'next/dynamic';

const Home = dynamic(
    () => {
        return import('../components/home');
    },
    { ssr: false }
);

class App extends React.Component {
    render() {
        return <Home></Home>;
    }
}

export default App;
