# Docker — Site DOMO

Esta configuração executa a versão de produção do site em um container
isolado. O build usa a saída `standalone` do Next.js para manter a imagem
final menor e sem as dependências usadas apenas no desenvolvimento.

## Pré-requisitos

- Docker Desktop instalado e em execução.
- Docker Desktop configurado para usar containers Linux.

## Configuração do WhatsApp

O `docker-compose.yml` já usa o número público confirmado do DOMO como valor
padrão. Para testar outro número sem alterar arquivos versionados, defina a
variável antes do build:

```powershell
$env:NEXT_PUBLIC_WHATSAPP_NUMBER="5583986153667"
```

Variáveis iniciadas por `NEXT_PUBLIC_` são incorporadas ao JavaScript durante
o build e ficam visíveis no navegador. Portanto, elas nunca devem armazenar
senhas, tokens ou outras credenciais.

## Comandos do dia a dia

Execute os comandos abaixo na pasta do projeto.

```powershell
docker compose build
```

Cria a imagem de produção. Use novamente quando mudar o código ou uma variável
pública usada no build.

```powershell
docker compose up -d
```

Inicia o site em segundo plano. Depois, acesse
[http://localhost:3000](http://localhost:3000).

```powershell
docker compose ps
```

Mostra se o container está em execução e se passou na verificação de saúde.

```powershell
docker compose logs -f
```

Exibe os logs continuamente. Pressione `Ctrl+C` para sair dos logs sem parar o
site.

```powershell
docker compose down
```

Para e remove o container e a rede criada pelo Compose. A imagem permanece
salva para o próximo uso.

```powershell
docker compose up -d --build
```

Reconstrói a imagem e reinicia o site em um único comando.

## Usar outra porta

Se a porta 3000 já estiver ocupada, escolha outra antes de iniciar:

```powershell
$env:DOMO_PORT="8080"
docker compose up -d
```

Nesse exemplo, o site ficará disponível em
[http://localhost:8080](http://localhost:8080).

## Limpeza opcional

```powershell
docker compose down --rmi local
```

Para o ambiente e também remove a imagem criada localmente. No próximo uso,
será necessário executar o build novamente.
