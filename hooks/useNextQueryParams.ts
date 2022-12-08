import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const useNextQueryParams = () => {
  const router = useRouter()

  const { query: params, isReady: paramsLoaded } = router

  const updateParams = useCallback(
    (newParams: object) => {
      const updated = { ...(router.query as object), ...newParams }
      const params = new URLSearchParams(updated).toString()
      console.log('params', params)
      router.push(`?${params}`, undefined, { shallow: true })
    },
    [router]
  )

  return { params, updateParams, paramsLoaded }
}
