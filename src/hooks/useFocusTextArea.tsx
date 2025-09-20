import { useRef } from "react";
export const useFocusTextarea = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const focusAtEnd = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.focus();
      const length = textarea.value.length;
      textarea.setSelectionRange(length, length);
    }
  };

  return { textareaRef, focusAtEnd };
};
