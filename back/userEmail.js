const mailer = require("nodemailer");

module.exports = {
    async index(req,res,next){
        try{
            const nome = req.body.nome;
            const email = req.body.email;
            const mensagem = req.body.mensagem;
           /* const anexo = req.file;
            require("./nodemail")(email, nome, mensagem)
                .then(response => res.json(response))
                .catch(error => res.json(error));*/
            console.log(nome,email,mensagem)
            const smtpTransport = mailer.createTransport({
                host: 'smtp.umbler.com',
                port: 587,
                secure: false //SSL/TLS   
            })
            
            const mail = {
                from: "<quirinoc4hotmail.com>",
                to: "matheusc4@hotmail.com",
                subject: `${nome} te enviou uma mensagem`,
                text: mensagem
                //html: "<b>Opcionalmente, pode enviar como HTML</b>"
            }
            
           /* if(anexo){
                console.log(anexo);
                mail.attachments = [];
                mail.attachments.push({
                    filename: anexo.originalname,
                    content: anexo.buffer
                })
            }*/
        
            return new Promise((resolve, reject) => {
                smtpTransport.sendMail(mail)
                    .then(response => {
                        smtpTransport.close();
                        return resolve(response);
                    })
                    .catch(error => {
                        smtpTransport.close();
                        return reject(error);
                    });
            })   
          
        }catch(e){
            res.status(400).send("Erro")
            console.log(e)
        }
      
    }
   
}