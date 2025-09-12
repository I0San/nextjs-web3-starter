export type OverridableQueryOptions = {
  enabled?: boolean
  staleTime?: number
  refetchInterval?: number | false
  refetchIntervalInBackground?: boolean
  refetchOnWindowFocus?: boolean
}
