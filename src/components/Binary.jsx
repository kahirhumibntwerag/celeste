import { useContext, createContext, useState, cloneElement, isValidElement } from "react";

const BinaryContext = createContext(null)


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

  console.log(open)

  return (
    <BinaryContext.Provider value={{ open, setOpen }}>
      {children}
    </BinaryContext.Provider>
  );
}


export function BinaryTrigger ({asChild=false, children}){
    const {setOpen} = useContext(BinaryContext)

    if (asChild && isValidElement(children)){
        return cloneElement(children, {
            onClick: (e)=>{
                children.props?.onClick?.(e);
                setOpen(true)
            }
        })
    }

    return (
        <button onClick={()=>setOpen(true)}>
            {children}
        </button>
    )
}

export function BinaryClose ({asChild=false, children}){
    const {setOpen} = useContext(BinaryContext)

    if (asChild && isValidElement(children)){
        return cloneElement(children, {
            onClick: (e)=>{
                children.props?.onClick?.(e);
                setOpen(false)

            }
        })
    }

    return (
        <button onClick={()=>setOpen(false)}>
            {children}
        </button>
    )
}


export function BinaryContent ({children}){
    const {open} = useContext(BinaryContext)
    if (!open) return null;

    return (
        <div>
            {children}
        </div>
    )
}