const key = "carrinho";

if (!localStorage.getItem(key)){
    localStorage.setItem(key, 0)
}

export const getCarrinho = localStorage.getItem(key);
export const setCarrinho = (qtn) => localStorage.setItem(key, qtn);
export const removeCarrinho = () => localStorage.removeItem(key);

