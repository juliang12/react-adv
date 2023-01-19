import React, { ReactElement } from "react";

export interface Props {
  product: Product;
  children: (args: ProductCardHandler) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: initialValues;
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductButtonsProps {
  increaseBy: (arg: number) => void;
  counter: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHocProps {
  ({ children, product }: Props): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Button: () => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface initialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandler {
  counter: number;
  isMaxCounterReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
