import { FormEvent, SyntheticEvent } from "react";

/**
 * Extended EventTarget which includes 'name' and 'value' fields.
 */
interface InputEventTarget extends EventTarget {
  name?: any;
  value?: any;
}
/**
 * Extended React.SyntheticEvent whose target can have 'name' and 'value' fields.
 */
interface InputEvent extends SyntheticEvent<HTMLDivElement> {
  target: InputEventTarget;
}

/**
 * Custom Input event handler with name and value fields on the event target.
 */
export type InputHandler = (e: InputEvent) => void;
/**
 * Custom Submission handler which can be called programmatically without supplying an event.
 */
export type FormSubmissionHandler = (e?: FormEvent<HTMLFormElement>) => void;
