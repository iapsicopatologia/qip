## Alternativa: Python HTTP Server

Se você não quiser instalar o Node.js, pode usar o servidor embutido no Python. O Windows geralmente não inclui Python por padrão, então instale primeiro o [Python](https://www.python.org/).

### Passos:

1. **Verifique a instalação do Python**  
   Após instalar o Python, confirme que ele está funcionando corretamente executando o comando abaixo no terminal:
   
   ```bash
   python --version
   ```

2. **Navegue até o diretório do projeto**
   Use o terminal para acessar o diretório onde os arquivos do projeto estão localizados, por exemplo:
   
   ```bash
   cd caminho\para\build\web
   ```

3. **Navegue até o diretório do projeto**
   Para iniciar o servidor HTTP embutido no Python, use o comando abaixo:
   
   ```bash
   python -m http.server 8080
   ```
   Isso iniciará o servidor em http://127.0.0.1:8080. Abra esse endereço no navegador para visualizar o aplicativo.