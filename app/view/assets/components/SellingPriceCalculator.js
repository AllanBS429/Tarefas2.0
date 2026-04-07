//Calcula o preço de venda do produto com base no preço de custo e na margem de lucro desejada.
//margem de lucro
class SellingPriceCalculator {
    #puschasePrice = 0;   //Preço da compra do Produto(Valor absoluto)
    #totalTax = 0;        //Percentual total de impostos sobre o produto(Valor percentual)
    #profitMargin = 0;    //Margem de lucro desejada(Valor percentual)
    #operationCost = 0;   //Custo operacional do produto(Valor absoluto)

    //Instancia a classe via método estático (padrão Factory)
    static create() {
        return new SellingPriceCalculator();
    }

    //Define o preço de compra e retorna a instância para encadeamento de métodos
    addPurchasePrice(puchasePrice) {
    }