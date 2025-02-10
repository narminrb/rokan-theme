import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import './style.css'
import {Toaster} from 'sonner'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})
const ShowDevToolsInDevelopment = import.meta.env.MODE === "development" && <ReactQueryDevtools initialIsOpen={false}/>

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster richColors/>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
      {ShowDevToolsInDevelopment}
    </QueryClientProvider>
  </StrictMode>,
)
