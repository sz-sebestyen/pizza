import { useEffect, useState } from "react";

const useValidate = (inputId, formRef, dependency) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (formRef && dependency !== "") {
      const input = formRef.current.querySelector(`#${inputId}`);
      setIsValid(input.reportValidity());
    }
  }, [dependency]);

  /*   useEffect(() => {
    console.log(isValid);
  }, [isValid]); */

  return isValid;
};

export default useValidate;
