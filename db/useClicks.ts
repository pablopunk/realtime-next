import { useRealtime } from 'react-supabase'

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
