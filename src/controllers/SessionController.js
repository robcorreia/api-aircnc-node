const User = require('../models/User');

//index, show, store, update, destroy

//index (listagem de sessoes)
//show lista uma unica sessão
//store criar uma sessão
//update altera uma sessao
//destroy remover uma sessão

module.exports = {
  async store(req, res) {
    //pega o email do body que foi enviado
    // const email = req.body.email;
    const { email } = req.body;
    
    let user = await User.findOne({ email: email});
    //verifica se o usuario existe, caso não exista, ele irá criar
    if(!user) {
      const user = await User.create({ email });
    }

    return res.json(user);
    //retorna o usuario que foi criado
  }  
};


//await serve para dizer que a função está aguardando alguma informação
//porem quando usar dentro de uma função, tem que setar que ela é assincrona
