import 'react-native-gesture-handler'
import ApplicationNavigator from '@/Navigators/Application'
import { persistor, store } from '@/Stores'
import React from 'react'
import Toast from 'react-native-toast-message'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: 'always', retry: false },
    mutations: {},
  },
})

const App = () => (
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <QueryClientProvider client={queryClient}>
          <ApplicationNavigator />
          <Toast />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </>
)

export default App
