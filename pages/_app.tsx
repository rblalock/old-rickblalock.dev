import { AppProps } from 'next/app';

import '../styles/index.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Component { ...pageProps } />
  );

}

export default App;

// FOR CHECKING PERFORMANCE:
// export function reportWebVitals(metric: unknown) {
// 	console.log(metric)
// }
