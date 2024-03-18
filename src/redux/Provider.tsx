"use client"
import { Provider } from "react-redux"
import store from "./store"
import React from "react"

/**
 * Wraps the application with the Redux Provider component.
 * @param children - The child components to be rendered inside the Provider.
 * @returns The Provider component with the store prop set to the Redux store and the child components rendered inside it.
 */
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}