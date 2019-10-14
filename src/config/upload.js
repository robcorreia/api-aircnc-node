const multer = require('multer'); //biblioteca que aceita carregar imagem do banco (foi instalada via yarn/npm)
const path = require('path'); //caminho do node

module.exports = {
  //aonde irar salvar
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    }
  })
};




//multer tem varias formas de salvar
//diskStorage salvará nos arquivos da aplicação 

//path.resolve resolve a / que o windowns nao reconhece
//__dirname é uma variavel global que informa o diretorio do arquivo atual, ela garente que o caminho esta certo
//file.fieldname é o nome do arquivo que foi inserido
//date.now retorna o time stemp da data atual para garantir que cada imagem será unica
//path.extname(file.originalname) para retornar o nome original da extenção do arquivo