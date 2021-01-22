import { UnixTimeToDatetimePipe } from './unix-time-to-datetime.pipe';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);
describe('UnixTimeToDateTimePipe', () => {
  let pipe: UnixTimeToDatetimePipe;

  beforeEach(() => {
    pipe = new UnixTimeToDatetimePipe();
  });

  it('should return the 29th of January', () => {
    const result = pipe.transform(1611923547, 'short');
    expect(result).toEqual('29.01.21, 13:32');
  });

  it('should return an empty string if date is undefined', () => {
    const result = pipe.transform(undefined, 'short');
    expect(result).toEqual('');
  });
});
