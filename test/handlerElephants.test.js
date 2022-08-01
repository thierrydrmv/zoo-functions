const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('se for passado um parâmetro diferente de string, deverá retornar parâmetro inválido', () => {
    const param = handlerElephants(1);
    const exp = 'Parâmetro inválido, é necessário uma string';
    expect(param).toEqual(exp);
  });
  it('se for passado um parâmetro undefined o retorno também será undefined', () => {
    const param = handlerElephants(undefined);
    const exp = undefined;
    expect(param).toEqual(exp);
  });
  it('se for passado um parâmetro que seja uma object key retorne o valor dessa key no objeto elefantes', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });
  it('se for passado um parâmetro count, retorne a quantidade de elefantes', () => {
    const param = handlerElephants('count');
    const exp = 4;
    expect(param).toEqual(exp);
  });
  it('se for passado um parâmetro names, retorne o nome dos elefantes', () => {
    const param = handlerElephants('names');
    const exp = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(param).toEqual(exp);
  });
  it('se for passado um parâmetro averageAge, retorne a idade media dos elefantes', () => {
    const param = handlerElephants('averageAge');
    const exp = 10.5;
    expect(param).toEqual(exp);
  });
  it('se for passado um parâmetro availability, retorne os dias que os elefantes estão disponiveis', () => {
    const param = handlerElephants('availability');
    const exp = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(param).toEqual(exp);
  });
  it('se for passado um parâmetro diferente, retorne null', () => {
    const param = handlerElephants('a');
    const exp = null;
    expect(param).toEqual(exp);
  });
});
