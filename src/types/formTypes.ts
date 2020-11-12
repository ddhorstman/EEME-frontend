import { SyntheticEvent } from "react";

interface InputEventTarget extends EventTarget {
  value: any;
}

interface InputEvent extends SyntheticEvent<HTMLDivElement> {
  target: InputEventTarget;
}

export type InputHandler = (e: InputEvent) => void;
export type ButtonClickHandler = (e: SyntheticEvent<HTMLButtonElement>) => void;
