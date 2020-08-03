import config from '../config'

const UrlCategories = `${config.UrlBackend}/categorias`

function getAll() {
  return fetch(`${UrlCategories}`)
    .then(async (respostaServidor) => {

      if (respostaServidor.ok) {
          const resposta = await respostaServidor.json();
          return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
    return fetch(`${UrlCategories}?_embed=videos`)
      .then(async (respostaServidor) => {

        if (respostaServidor.ok) {
            const resposta = await respostaServidor.json();
            return resposta;
        }

        throw new Error('Não foi possível pegar os dados :(');
      });
}

export default {
    getAllWithVideos,
    getAll
};