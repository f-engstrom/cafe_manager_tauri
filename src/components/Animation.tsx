import { createEffect, createSignal, onCleanup } from "solid-js";
import { Transition } from "solid-transition-group";
import { TransitionOptions } from "solid-transition-group/dist/types";

interface Props {
  children: JSX.Element;
  show: boolean;
  duration?: number;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
  transitionOptions?: TransitionOptions;
}

function Animation(props: Props) {
  const {
    children,
    show,
    duration = 200,
    enter = "",
    enterFrom = "",
    enterTo = "",
    leave = "",
    leaveFrom = "",
    leaveTo = "",
    transitionOptions = {},
  } = props;

  const [showChild, setShowChild] = createSignal(show);
  let timeout: number;

  createEffect(() => {
    if (show) {
      setShowChild(true);
    } else {
      timeout = window.setTimeout(() => {
        setShowChild(false);
      }, duration);
    }
    return () => {
      window.clearTimeout(timeout);
    };
  });

  return (
    <Transition
      show={showChild()}
      enter={enter}
      enterFrom={enterFrom}
      enterTo={enterTo}
      leave={leave}
      leaveFrom={leaveFrom}
      leaveTo={leaveTo}
      transitionOptions={transitionOptions}
    >
      {children}
    </Transition>
  );
}

export default Animation;
