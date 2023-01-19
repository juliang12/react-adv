import { useEffect, useRef, useState } from "react";
import { initialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductProps {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: initialValues;
}

const useCounter = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductProps) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    increaseBy,
    isMaxCounterReached:
      !!initialValues?.count && initialValues.count === counter,
    maxCount: initialValues?.maxCount,
    reset,
  };
};

export default useCounter;
