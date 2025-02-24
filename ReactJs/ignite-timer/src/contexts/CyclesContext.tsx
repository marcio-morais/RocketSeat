import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addNewCycleAction,
  iterruptCurrentCycloAction,
  markCurrentCycleFinishedAction,
} from '../pages/reducers/cycles/actions'
import { Cycle, cyclesReducer } from '../pages/reducers/cycles/reducer'

interface createCycloDate {
  task: string
  minutesAmount: number
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleFinished: () => void
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  newCycle: (data: createCycloDate) => void
  iterruptCurrentCyclo: () => void
}

interface CyclesContextProviderProps {
  children: ReactNode
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cycleStates, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

      return initialState
    },
  )

  const { cycles, activeCycleId } = cycleStates
  const activeCycle = cycles.find((cycle: Cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cycleStates)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cycleStates])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function newCycle(data: createCycloDate) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))
    setAmountSecondsPassed(0)
    /* reset() */
  }

  function markCurrentCycleFinished() {
    dispatch(markCurrentCycleFinishedAction())
  }

  function iterruptCurrentCyclo() {
    dispatch(iterruptCurrentCycloAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleFinished,
        amountSecondsPassed,
        setSecondsPassed,
        newCycle,
        iterruptCurrentCyclo,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
