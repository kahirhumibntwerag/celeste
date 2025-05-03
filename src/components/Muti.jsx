import {
    useContext,
    createContext,
    useState,
    cloneElement,
    isValidElement,
  } from "react";
  
  // 1. Create context
  const StateMachineContext = createContext(null);
  
  // 2. Hook to access context safely
  export function useStateMachineContext() {
    const ctx = useContext(StateMachineContext);
    if (!ctx) throw new Error("useStateMachineContext must be used within <StateMachine>");
    return ctx;
  }
  
  // 3. Custom hook for controllable state
  function useControllableState({ value, defaultValue, onChange }) {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = value !== undefined;
    const current = isControlled ? value : internalValue;
  
    const setValue = (next) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    };
  
    return [current, setValue];
  }
  
  // 4. Main state machine component
  export function StateMachine({ value: valueProp, defaultValue = "idle", onChange, children }) {
    const [state, setState] = useControllableState({
      value: valueProp,
      defaultValue,
      onChange,
    });
  
    return (
      <StateMachineContext.Provider value={{ state, setState }}>
        {children}
      </StateMachineContext.Provider>
    );
  }
  
  // 5. SetState trigger (like BinaryTrigger)
  export function StateTrigger({ to, asChild = false, children }) {
    const { setState } = useStateMachineContext();
  
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        onClick: (e) => {
          children.props?.onClick?.(e);
          setState(to);
        },
      });
    }
  
    return <button onClick={() => setState(to)}>{children}</button>;
  }
  
  // 6. State-based conditional content
  export function StateContent({ when, forceMount = false, asChild = false, children }) {
    const { state } = useStateMachineContext();
    const shouldRender = forceMount || state === when;
  
    if (!shouldRender) return null;
  
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        "data-state": state,
      });
    }
  
    return <div data-state={state}>{children}</div>;
  }
  