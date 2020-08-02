import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

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

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(pInfoEvento) {
          pInfoEvento.preventDefault();

          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="????"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
          
          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Ir para o início
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;