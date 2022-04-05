// Para maiores detalhes ver documentação em: https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/index.html
//                                            https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/examples.html  

const { Client } = require('@elastic/elasticsearch')

const client = new Client({
  node: 'http://localhost:9200'
})




async function run () {
    await client.index({
        index: 'produtos',
        id: '1',
        body: {
          descricao: 'Caneta',
          preco: 22.22,
          quantidade: 177
        }
    })


    const { body } = await client.get({
      index: 'produtos',
      id: '1'
    })
    console.log(body._source.descricao)
    console.log(body._source.preco)
    console.log(body._source.quantidade)
}
  
run().catch(console.log)