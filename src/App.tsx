import { QueryClient, QueryClientProvider } from 'react-query';
import MarketPlace from './components/MarketPlace';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MarketPlace />
  </QueryClientProvider>
);

export default App;
