import React, { ReactElement } from "react";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
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
