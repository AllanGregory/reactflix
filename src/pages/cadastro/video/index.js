import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/pageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import videosRepository from '../../../repositories/video';
import categoriasRepository from '../../../repositories/categoria';

function CadastroVideo() {

  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=24Q670UxPGc',
    categoria: 'Front End'
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>

        <form onSubmit={(event) => {
          event.preventDefault();
          //alert('Vídeo cadastrado com sucesso!');

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id
          })
            .then(() => {
              console.log('Cadastrou vídeo com sucesso!');
              history.push('/');
            });
        }}>
          <FormField
              label="Título"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />

            <FormField
              label="URL"
              name="url"
              value={values.url}
              onChange={handleChange}
            />

            <FormField
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;