import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';

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

  useEffect(() => {

    const Url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://auroraflix.herokuapp.com/categorias';

    fetch(Url)
      .then(async (respostaServidor) => {
        const resposta = await respostaServidor.json();
        setCategorias([
          ...resposta
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front-End',
    //       descricao: 'Uma categoria front-end',
    //       cor: '#cbd1ff'
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back-End',
    //       descricao: 'Uma categoria back-end',
    //       cor: '#cbd1ff'
    //     }
    //   ]);
    // }, 4 * 1000);
  }, []);

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
            type="textarea"
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
          
          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
          <div>
            Carregando...
          </div>
        )}

        <ul>
          {categorias.map((categoria) => {
            return (
              <li key={`${categoria.nome}`}>
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