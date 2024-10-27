import { renderHook, act } from '@testing-library/react'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
  })

  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initialValue', 500))

    expect(result.current).toBe('initialValue')
  })

  it('should debounce the value update', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initialValue', delay: 500 },
    })

    act(() => {
      rerender({ value: 'updatedValue', delay: 500 })
    })

    expect(result.current).toBe('initialValue')

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current).toBe('updatedValue')
  })

  it('should debounce the value update with custom delay', () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'initialValue', delay: 1000 },
    })

    act(() => {
      rerender({ value: 'updatedValue', delay: 1000 })
    })

    expect(result.current).toBe('initialValue')

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current).toBe('initialValue')

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current).toBe('updatedValue')
  })
})

it('should debounce the value update with default delay', () => {
  const { result, rerender } = renderHook(({ value, delay }: any) => useDebounce(value, delay), {
    initialProps: { value: 'initialValue' },
  })

  act(() => {
    rerender({ value: 'updatedValue' })
  })

  expect(result.current).toBe('initialValue')

  act(() => {
    jest.advanceTimersByTime(500)
  })
})