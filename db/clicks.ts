import { useInsert, useRealtime } from 'react-supabase'

export function useClicks() {
  const [{ data, error }] = useRealtime('clicks', {
    select: {
      columns: 'id,type',
    },
  })

  if (error) {
    console.error(error)
  }

  return data
}

export function useInsertClicks() {
  // eslint-disable-next-line no-unused-vars
  const [_data, execute] = useInsert('clicks')

  return execute
}
