import {
  InputHTMLAttributes,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const AdjustableInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const [inputWidth, setInputWidth] = useState<number>(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  useEffect(() => {
    if (spanRef.current) {
      setInputWidth(spanRef.current.offsetWidth);
    }
  }, [props.value]);

  return (
    <>
      <span className="absolute invisible opacity-0" ref={spanRef}>
        {props.value}
      </span>
      <input
        {...props}
        type="text"
        ref={inputRef}
        style={{ width: inputWidth }}
      />
    </>
  );
});

export default AdjustableInput;
