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
  it('se for passado dois parâmetros (thu e nove da manhã) lança exceção', () => {
    const param = () => getOpeningHours('Thu', '09:00-AM');
    expect(param).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('se for passado dois parâmetros (Friday e 09:00-ZM) lança exceção', () => {
    const param = () => getOpeningHours('Friday', '09:00-ZM');
    expect(param).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('se for passado dois parâmetros (Saturday e C9:00-AM) lança exceção', () => {
    const param = () => getOpeningHours('Saturday', 'C9:00-AM');
    expect(param).toThrow(new Error('The hour should represent a number'));
  });
  it('se for passado dois parâmetros (Sunday e 09:c0-AM) lança exceção', () => {
    const param = () => getOpeningHours('Sunday', '09:c0-aM');
    expect(param).toThrow(new Error('The minutes should represent a number'));
  });
  it('se for passado dois parâmetros (Sunday e 33:00-AM) lança exceção', () => {
    const param = () => getOpeningHours('Sunday', '33:00-AM');
    expect(param).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('se for passado dois parâmetros (Sunday e 09:66-AM) lança exceção', () => {
    const param = () => getOpeningHours('Sunday', '09:66-AM');
    expect(param).toThrow(new Error('The minutes must be between 0 and 59'));
  });
  it('se for passado dois parâmetros (Saturday e 09:66-AM) lança exceção', () => {
    const param = getOpeningHours('Saturday', '09:00-PM');
    expect(param).toEqual('The zoo is open');
  });
});
