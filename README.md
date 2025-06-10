
# loadteste-playground

Bem-vindo ao **loadteste-playground**, um repositório para aprendizado e experimentação com testes de carga e performance utilizando 
a ferramenta [k6](https://k6.io/). Este projeto contém exemplos de diferentes tipos de testes de performance, organizados na pasta `tests`, 
para ajudar você a entender como realizar testes de carga, fumo, pico e estresse.

## Sobre o Projeto

O `loadteste-playground` é um ambiente de aprendizado para explorar testes de performance com o k6. Ele inclui scripts de teste que demonstram diferentes cenários, como:

- **Teste de Fumaça (Smoke Test)**: Verifica se o sistema funciona sob carga mínima.
- **Teste de Carga (Load Test)**: Avalia o comportamento do sistema sob uma carga esperada.
- **Teste de Pico (Spike Test)**: Testa a resposta do sistema a picos repentinos de tráfego.
- **Teste de Estresse (Stress Test)**: Avalia o limite do sistema sob condições extremas.

Os scripts estão localizados na pasta `tests` e são escritos em JavaScript, utilizando a API do k6.

## Estrutura do Projeto

```
loadteste-playground/
├── tests/
│   ├── load.js     # Script para teste de carga
│   ├── smoke.js    # Script para teste de fumaça
│   ├── spike.js    # Script para teste de pico
│   ├── stress.js   # Script para teste de estresse
├── README.md       # Este arquivo
```

## Pré-requisitos

Para executar os testes, você precisará ter o seguinte instalado:

- [k6](https://k6.io/docs/getting-started/installation/) (versão mais recente recomendada)
- [Node.js](https://nodejs.org/) (opcional, para gerenciar dependências ou scripts adicionais)
- Um ambiente com acesso à API ou sistema que você deseja testar

## Como Usar

1. **Clone o repositório**:
   ```
   git clone https://github.com/clessio35/loadteste-playground.git
   cd loadteste-playground
   ```

2. **Instale o k6**:
   Siga as instruções de instalação no [site oficial do k6](https://k6.io/docs/getting-started/installation/) para o seu sistema operacional.

3. **Execute os testes**:
   Navegue até a pasta `tests` e execute os scripts com o comando `k6 run`. Por exemplo:
   ```
   k6 run tests/smoke.js
   ```
   Repita o comando para os outros scripts (`load.js`, `spike.js`, `stress.js`) conforme necessário.

4. **Personalize os testes**:
   - Edite os arquivos na pasta `tests` para configurar a URL do sistema alvo, número de usuários virtuais (VUs), duração dos testes, ou outros parâmetros.
   - Consulte a [documentação do k6](https://k6.io/docs/) para aprender sobre opções avançadas, como thresholds, cenários e métricas.

## Descrição dos Testes

- **`smoke.js`**: Teste de fumaça para verificar se o sistema responde corretamente com uma carga mínima (ex.: 1-5 usuários virtuais). Ideal para validar a configuração inicial.
- **`load.js`**: Teste de carga para simular um número típico de usuários acessando o sistema (ex.: 50-100 usuários). Útil para avaliar o desempenho em condições normais.
- **`spike.js`**: Teste de pico que simula um aumento repentino e intenso de tráfego (ex.: de 0 a 1000 usuários em poucos segundos). Testa a resiliência do sistema a picos.
- **`stress.js`**: Teste de estresse que aumenta gradualmente a carga até o limite do sistema, buscando identificar o ponto de falha ou degradação.

## Exemplo de Execução

Para rodar o teste de fumaça:
```
k6 run tests/smoke.js
```

Saída esperada (exemplo):
```
          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \  \    \
  /___________\   |__| \__\  \    \
INFO[0000] Iniciando teste de fumo...
✓ Sistema respondeu com status 200

    checks................: 100.00% ✓ 10 ✗ 0
    duration..............: 2.34s
    vus...................: 5
```

## Contribuindo

Contribuições são bem-vindas! Se você deseja adicionar novos scripts, melhorar os existentes ou corrigir problemas, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Faça suas alterações e commit:
   ```bash
   git commit -m "Adiciona novo teste de performance"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request no GitHub.

## Recursos Adicionais

- [Documentação oficial do k6](https://k6.io/docs/)
- [Exemplos de scripts k6](https://k6.io/docs/examples/)
- [Comunidade k6 no Slack](https://k6.io/slack/)

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
 

Este é o conteúdo completo do README em Markdown, exatamente como será renderizado no GitHub. Você pode copiar e colar diretamente no arquivo `README.md` do repositório `loadteste-playground`. Se precisar de ajustes, como adicionar mais detalhes, exemplos de código para os scripts, ou alterar o formato, é só avisar!
