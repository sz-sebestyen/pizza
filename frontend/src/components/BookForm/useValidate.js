import { useEffect, useState } from "react";

const useValidate = (inputId, formRef, dependency) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (formRef && dependency !== "") {
      const input = formRef.current.querySelector(`#${inputId}`);
      setIsValid(input.reportValidity());
    }
  }, [dependency]);

  return isValid;
};

export default useValidate;
