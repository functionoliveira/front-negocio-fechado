import authConfig from '../config/auth.config';
const jwt = require('jsonwebtoken');


export function validateToken(token) {
    return jwt.verify(token, authConfig.secretKey, function(err, decoded) {
        if(decoded) {
            return { ok: true, body: decoded };
        }else {
            return { ok: false, body: err };
        }
    });
}

export const FEEDBACK_MESSAGES = {
    CREATE_CONTRACT_OK : 'Contrato cadastrado com sucesso! Agora só falta assinar.',
    CREATE_NEEDS_OK    : 'Sua necessidade foi cadastrada. Aguarde que logo logo alguém aparece para resolver seu problema :)',
    CREATE_OFFER_OK    : 'Sua oferta foi cadastrada. Certamenta temos muitas pessoas precisando de você.',
    CREATE_TENDER_OK   : 'Sua proposta foi cadastrada. Estamos cruzando os dedos para que seja aceita.',
    PAYMENT_OK         : 'Recebemos seu pagamento, agora é aguardar a realização do seu serviço.',
    REGISTER_OK        : 'Bem vindo a plataforma negócio fechado, seu cadastro foi efetuado com sucesso. Agora é só logar-se e resolver todos seus problemas com a ajuda dos excelentes profissionais que temos aqui.',

    // Errors
    CREATE_CONTRACT_FAIL : 'Ops! Parece que algo deu errado no cadastro do contrato.',
    CREATE_NEEDS_FAIL    : 'Ops! Parece que algo deu errado no cadastro da sua necessidade.',
    CREATE_OFFER_FAIL    : 'Ops! Parece que algo deu errado no cadastro da sua oferta.',
    CREATE_TENDER_FAIL   : 'Ops! Parece que algo deu errado no cadastro da sua proposta.',
    REGISTER_FAIL        : 'Ops! Parece que algo deu errado enquanto tentávamos cadastrá-lo, volte em alguns minutinhos que tudo estará resolvido.',
}