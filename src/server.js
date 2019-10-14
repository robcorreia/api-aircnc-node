//express é um microframork para não ter que recriar a roda
//exemplo: definição de rodas, 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express(); //criando aplicação

//conexão com o banco mongodb
//alterar login, senha e nome do banco
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-t9juu.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true, //retira os avisos e configura algumas coisas dentro do mongo
  useUnifiedTopology: true,
})
 
// METODOS GET, POST, PUT, DELETE
//get pega, post envia, put edita, delete deleta

//req.query = Acessar o Query Params (para filtros)
//req.params = Acessar route params (para edição/delete)
//req.body = Acessar corpo da requisição (para criação, edicação)

app.use(cors());
app.use(express.json()); //setando o express para usar o formato json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
//setando a rota do usuario
/* app.post('/users', (req, res) => {
  return res.json(req.body);
}) */

//req (requisicao - pega requisicao que o usuario envia)
//res (resposta - devolve a resposta pra requisição)
//res.send (envia uma mensagem de resposta)
//res.json (padrão mundial)
app.listen(3333); //para rodar a aplicação no browser na url localhost:3333


