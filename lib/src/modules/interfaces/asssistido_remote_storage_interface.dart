abstract class AssistidoRemoteStorageInterface {
  Future<dynamic> addData(String value,
      {String table}); //Adiciona varias linhas no final da Base de Dados
  Future<dynamic> sendEmail(String value);
  Future<List<dynamic>?> getChanges(
      {String table}); //Lê todas as linhas apartir da primeira linha
  Future<List<dynamic>?> getRow(String rowId,
      {String table}); //Retorna o valor das linhas solicitadas
  Future<String?> setData(String rowsId, List<dynamic> data,
      {String table}); //Reescreve todas as linhas apartir da primeira linha
  Future<dynamic> insertData(String value, int rowId,
      {String table}); //Append os dados em uma dada linha
  Future<dynamic> deleteData(String row, {String table}); //Deleta um Linha
}
