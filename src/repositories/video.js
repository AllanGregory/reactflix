import config from '../config'

const UrlVideos = `${config.UrlBackend}/videos`

function create(pObjetoVideo) {
    return fetch(`${UrlVideos}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(pObjetoVideo)
    })
      .then(async (respostaServidor) => {

        if (respostaServidor.ok) {
            const resposta = await respostaServidor.json();
            return resposta;
        }

        throw new Error('Não foi possível cadastrar os dados :(');
      });
}

export default {
    create
};