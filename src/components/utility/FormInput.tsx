import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useId, forwardRef } from "react";

type FormInputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  textarea?: boolean;
};

const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormInputProps
>(
  (
    {
      label,
      type = "text",
      placeholder,
      className = "",
      textarea = false,
      ...props
    },
    ref
  ) => {
    const id = useId();
    return (
      <div className="w-full space-y-1">
        {label && (
          <Label htmlFor={id} className="text-md">
            {label}
          </Label>
        )}
        {textarea ? (
          <Textarea
            id={id}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            placeholder={placeholder}
            className={className}
            {...props}
          />
        ) : (
          <Input
            type={type}
            id={id}
            placeholder={placeholder}
            className={className}
            ref={ref as React.Ref<HTMLInputElement>}
            {...props}
          />
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
export default FormInput;
