# Qpraga-app

Este projeto foi desenvolvido com Expo, TypeScript, e Firebase e é voltado para ajudar produtores rurais a identificarem possíveis pragas em suas plantações e facilitar o acompanhamento por técnicos agrônomos.

Produtor:

   - Preenchimento de formulário com dados da cultura, características da planta, e localização.
   - Registro de fotos da área afetada utilizando a câmera do dispositivo.
   - Submissão de informações para análise.

Técnico Agrônomo:

   - Acesso a formulários submetidos pelos produtores.
   - Consultar histórico de pragas e relatórios.
   - Acompanhar localização e status das plantações.
   - Realizar visitas in loco, se necessário.

Tecnologias Utilizadas

   - Expo: Framework para desenvolvimento de aplicações React Native.
   - TypeScript: Linguagem que adiciona tipagem estática ao JavaScript.
   - Firebase: Utilizado para autenticação, armazenamento de dados (Firestore), e armazenamento de fotos (Firebase Storage).

## Como Executar o Projeto

   Pré-requisitos:
   - Node.js instalado
   - Expo CLI instalado globalmente (npm install -g expo-cli)
   - Conta no Firebase com um projeto configurado.

### Clonando o repositório:

    git clone https://github.com/KvWIlY/QPraga-app.git

### Instalando dependências:

    npm install

### Configuração do Firebase:
  1. Crie um Projeto no Firebase

      - Acesse o console do Firebase.
      - Clique em Adicionar projeto.
      - Dê um nome ao seu projeto e clique em Continuar.
      - (Opcional) Configure o Google Analytics e clique em Criar projeto.
      - Aguarde a criação e clique em Continuar.

  2. Adicione o App Android ao Firebase

      - No painel do Firebase, clique em Adicionar aplicativo Android.
      - Insira o Nome do pacote Android:
        - Você pode encontrar o nome do pacote no arquivo app.json, na chave expo.android.package.
            Exemplo: com.seuprojeto.app.
      - Preencha os campos opcionais:
        - Apelido do app (opcional): Nome descritivo para o app no Firebase.
        - Certificado de assinatura SHA-1 (opcional): Adicione caso precise de funcionalidades como autenticação por número de telefone.
      - Clique em Registrar aplicativo.

  4. Baixe o Arquivo google-services.json

      - Após registrar o app, baixe o arquivo google-services.json.
      - Coloque este arquivo na pasta do seu projeto Expo:
        - Em projetos Expo gerenciados, ele não será usado diretamente, mas o conteúdo pode ser necessário no app.json.
        - Para projetos bare workflow, insira o arquivo no diretório android/app.

  5. Configuração para Projetos Expo Gerenciados
      
      - Atualize o arquivo app.json

        Adicione a configuração do Firebase no objeto android.googleServicesFile:

            {
              "expo": {
                "android": {
                  "package": "com.seuprojeto.app",
                  "googleServicesFile": "./google-services.json"
                }
              }
            }
  6. Instale as Dependências

      - Execute os seguintes comandos para instalar as dependências:
        - Firebase:

              npm install firebase

        - Firebase App: Configuração inicial do Firebase:

              npm install firebase/app
          
        - Firestore: Para usar o banco de dados Firestore:
  
              npm install firebase/firestore
     
        - Firebase Storage: Para gerenciar o armazenamento de arquivos
       
              npm install firebase/storage
  
   7. Configuração para Projetos Expo Bare Workflow
    
      - Modifique o android/build.gradle
        No arquivo android/build.gradle, adicione o repositório do Google:

            buildscript {
                repositories {
                    google()
                    mavenCentral()
                }
                dependencies {
                    classpath 'com.google.gms:google-services:4.3.15' // Verifique a versão mais recente
                }
            }

      - Aplique o Plugin do Google Services
        No arquivo android/app/build.gradle, adicione a linha abaixo:

            apply plugin: 'com.google.gms.google-services'

      - Adicione o Arquivo google-services.json

            Coloque o arquivo google-services.json no diretório android/app.  
        
### Iniciando o projeto:

     npx expo run:android

