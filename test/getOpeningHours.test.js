const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('se for passado dois parâmetros (Monday e nove da manhã)', () => {
    const param = getOpeningHours('Monday', '09:00-AM');
    const exp = 'The zoo is closed';
    expect(param).toEqual(exp);
  });
  it('se for passado dois parâmetros (Tuesday e nove da manhã)', () => {
    const param = getOpeningHours('Tuesday', '09:00-AM');
    const exp = 'The zoo is open';
    expect(param).toEqual(exp);
  });
  it('se for passado dois parâmetros (Wednesday e nove da manhã)', () => {
    const param = getOpeningHours('Wednesday', '09:00-PM');
    const exp = 'The zoo is closed';
    expect(param).toEqual(exp);
  });
  // it('se for passado dois parâmetros (thu e nove da manhã) lança exceção', () => {
  //   const param = getOpeningHours('Thu', '09:00-AM');
  //   const exp = 'The day must be valid. Example: Monday';
  //   expect(param).toThrow(exp);
  // });
});
