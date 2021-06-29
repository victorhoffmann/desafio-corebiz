import axios from 'axios'

const base_url = 'https://corebiz-test.herokuapp.com/api/v1/'
const getProdutos = `${base_url}/products`

export const produtos = async () => {
    try {
        const { data } = await axios.get(`${getProdutos}`);
        const tratados = data.map((produto) => ({
            foto: produto['imageUrl'],
            nome: produto['productName'],
            nota: produto['stars'],
            antigoPreco: produto['listPrice'],
            preco: produto['price'],
            parcela_vezes: produto['installments'].length > 0 ? produto['installments'][0]['quantity'] : 0,
            parcela_valor: produto['installments'].length > 0 ? ['installments'][0]['value'] : 0
        }))
        return tratados
    } catch (error) {
        
    }
}
