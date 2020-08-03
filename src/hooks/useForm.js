import { useState } from 'react';

function useForm(pValoresIniciais) {
    const [values, setValues] = useState(pValoresIniciais);
  
    function setValue(pChave, pValor) {
      setValues({
        ...values,
        [pChave]: pValor
      });
    }
  
    function handleChange(pInfoEvento) {
      setValue(
        pInfoEvento.target.getAttribute('name'),
        pInfoEvento.target.value
      );
    }
  
    function clearForm() {
      setValues(pValoresIniciais);
    }
  
    return {
      values,
      handleChange
    };
  }

  export default useForm;