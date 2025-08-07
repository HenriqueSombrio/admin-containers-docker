import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ListaContainers from './components/lista-containers';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ListaContainers />
    </QueryClientProvider>
  );
}

export default App;
