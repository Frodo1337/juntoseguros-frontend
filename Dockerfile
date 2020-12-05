FROM node:latest

#Define o diretório que estamos
WORKDIR /usr/src/app

#Copia os arquivos do frontend para onde estamos
COPY . .

#Instala as dependências do projeto
RUN npm install

#Abre a porta 3000
EXPOSE 3000

#Define como motivo de vida do container o npm
ENTRYPOINT ["npm", "start"]
