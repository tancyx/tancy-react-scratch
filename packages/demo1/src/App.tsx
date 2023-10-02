import React from 'react'
import MyComp from './components/MyComponent'

export function _App(): JSX.Element | null {
  return (
    <div>
      <MyComp />
    </div>
  )
}

export const App = _App
