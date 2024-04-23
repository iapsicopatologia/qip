abstract class AssistidoRemoteStorageInterface {
  Future<dynamic> addData(String value,
      {String table}); //Adiciona varias linhas no final da Base de Dados
  Future<dynamic> sendEmail(String value);
  Future<List<dynamic>?> getChanges(
      {String table}); //Lê todas as linhas apartir da primeira linha
  Future<List<dynamic>?> getRow(String rowId,
      {String table}); //Retorna o valor das linhas solicitadas
  Future<dynamic> appendData(String value, int rowId,
      {String table}); //Append os dados em uma dada linha
  Future<dynamic> setData(String value, int rowId, int colId,
      {String table}); //Append os dados em uma dada linha      
  Future<dynamic> deleteData(String row, {String table}); //Deleta um Linha
}
