import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = 'f9fee3654b73f4a4a8e21871b80807';
    const client = new SiteClient(TOKEN);

    //Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "976911", //ID do Modelo de Communities craido pelo Dato
      ...request.body,
      // title: "Comunidade de Teste",
      // imageUrl: "https://github.com/rodrigomotamendes.png",
      // creatorSlug: "rodrigomotamendes"
    })

    console.log(registroCriado);

    console.log(TOKEN);
    response.json({
      dados: 'Algum dado Qualuqer',
      registroCriado: registroCriado,
    })
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem'
  })
}