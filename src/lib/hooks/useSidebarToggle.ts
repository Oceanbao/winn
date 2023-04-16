import { useCallback, useState } from "react"

const useSidebarToggle = (initialState = false) => {
  const [state, setState] = useState(initialState)

  // Memorise toggle function in case passing down component
  const toggleSidebar = useCallback(() => setState((state) => !state), [])

  return [state, toggleSidebar] as const
}

export default useSidebarToggle
