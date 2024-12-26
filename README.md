# Sistema de Caronas Universitárias
## Problema
Muitos estudantes têm dificuldade em chegar à universidade devido a transporte público limitado ou custos elevados com transporte privado. Ao mesmo tempo, muitos estudantes com veículos particulares têm assentos disponíveis. Um sistema de caronas pode conectar essas pessoas de forma eficiente.
## Solução Proposta
Um sistema de caronas universitárias que permita aos usuários:
- Oferecer e buscar caronas.
- Filtrar por horários e locais de partida/destino.
- Garantir um ambiente seguro com autenticação de usuários e avaliações.
## Microsserviços no Sistema
### 1. Serviço de Gerenciamento de Usuários
Cadastro e gerenciamento de perfis de usuários (ex.: estudantes, professores, funcionários).
Campos para:
- Nome, matrícula (ou outro ID universitário), email.
- Preferências de caronas (ex.: fumante, música no carro).
### 2. Autenticação e autorização:
Login com email institucional ou outro método confiável.
Geração de tokens para verificar autorização de usuários.
### 3. Serviço de Ofertas de Caronas
Permite que motoristas:
- Cadastrem caronas, especificando:
  - Local de partida e destino.
  - Data e horário.
  - Número de vagas disponíveis.
  - Editem ou cancelem caronas.
Armazena as informações em um banco de dados e disponibiliza via API.
### 4. Serviço de Busca de Caronas
Permite que passageiros:
- Busquem caronas com filtros (data, local de partida/destino, preferências).
- Oferece recomendações com base em histórico ou proximidade geográfica.
### 5. Serviço de Match
Gera combinações entre passageiros e motoristas com base em critérios como:
- Rotas e horários semelhantes.
- Compatibilidade de preferências.
Notifica motoristas sobre solicitações de carona.
### 6. Serviço de Notificação
Envia mensagens via email para:
- Confirmar solicitações e aceitar ou recusar caronas.
- Lembrar motoristas e passageiros sobre caronas agendadas.
- Informar mudanças ou cancelamentos.
### 7. Serviço de Avaliação
- Permite que passageiros e motoristas avaliem uns aos outros após a carona.
- Registra feedback e calcula uma nota de reputação.
- Ajuda a manter um ambiente seguro e confiável.
### 8. Serviço de Segurança
- Verifica a autenticidade de usuários (ex.: apenas emails institucionais podem ser cadastrados).
- Possibilidade de bloquear ou denunciar usuários problemáticos.
### 9. Serviço de Rastreamento
- Integração com APIs de mapas (ex.: Google Maps).
- Permite que passageiros acompanhem a localização do motorista em tempo real.
