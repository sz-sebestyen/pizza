import { useEffect } from "react";

const useValidate = (inputId, formRef, dependency) => {
  useEffect(() => {
    if (formRef && dependency !== "") {
      const input = formRef.current.querySelector(`#${inputId}`);
      input.reportValidity();
    }
  }, [dependency]);
};

export default useValidate;
