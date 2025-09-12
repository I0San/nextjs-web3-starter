'use client'

import { ErrorManager } from './error/error-manager'
import { QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
    mutations: {
      onError: (err) => {
        toast("Error", {
          description: new ErrorManager(err).getErrorMessage()
        })

        console.log(err)
      },
      onSuccess: () => {}
    }
  },
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(`❌ Query error [${query.queryKey.join(', ')}]:`, error)
    }
  })
})
