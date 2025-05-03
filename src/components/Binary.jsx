import { useContext, createContext, useState, cloneElement, isValidElement } from "react";

const BinaryContext = createContext(null);

export function useBinaryContext() {
  const ctx = useContext(BinaryContext);
  if (!ctx) throw new Error("useBinaryContext must be used within <Binary>");
  return ctx;
}

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

export function Binary({ children, open: openProp, onOpenChange, defaultOpen = false }) {
  const [open, setOpen] = useControllableState({
    value: openProp,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  return (
    <BinaryContext.Provider value={{ open, setOpen }}>
      {children}
    </BinaryContext.Provider>
  );
}

export function BinaryTrigger({ asChild = false, children }) {
  const { setOpen } = useBinaryContext();

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      onClick: (e) => {
        children.props?.onClick?.(e);
        setOpen(true);
      },
    });
  }

  return <button onClick={() => setOpen(true)}>{children}</button>;
}

export function BinaryClose({ asChild = false, children }) {
  const { setOpen } = useBinaryContext();

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      onClick: (e) => {
        children.props?.onClick?.(e);
        setOpen(false);
      },
    });
  }

  return <button onClick={() => setOpen(false)}>{children}</button>;
}

// ✅ Radix-style BinaryContent
export function BinaryContent({ forceMount = false, asChild = false, children }) {
  const { open } = useBinaryContext();

  const shouldRender = forceMount || open;

  if (!shouldRender) return null;

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      'data-state': open ? 'open' : 'closed',
    });
  }

  return (
    <div data-state={open ? 'open' : 'closed'}>
      {children}
    </div>
  );
}
