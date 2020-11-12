import { FormEvent, SyntheticEvent } from "react";

/**
 * Extended EventTarget which includes 'name' and 'value' fields.
 */
interface CustomEventTarget extends EventTarget {
  name?: any;
  value?: any;
  focus: () => void;
}
/**
 * Extended React.SyntheticEvent whose target can have 'name' and 'value' fields.
 */
interface InputEvent extends SyntheticEvent<HTMLDivElement> {
  target: CustomEventTarget;
}

interface ButtonClickEvent
  extends React.MouseEvent<HTMLButtonElement, MouseEvent> {
  target: CustomEventTarget;
}

/**
 * Custom Input event handler with name and value fields on the event target.
 */
export type InputHandler = (e: InputEvent) => void;
export type ButtonClickHandler = (e: ButtonClickEvent) => void;

/**
 * Custom Submission handler which can be called programmatically without supplying an event.
 */
export type FormSubmissionHandler = (e?: FormEvent<HTMLFormElement>) => void;
