import { programPrepared } from '../src';

test('is Jest working', () => {
  const isTrue = true;
  expect(isTrue).toBeTruthy();
});

beforeAll(() => {});

beforeEach(() => {});

test('help output test', () => {
  const mock = jest.spyOn(console, 'log');

  mock.mockImplementation(() => {});

  programPrepared.parse().help();
});

afterEach(() => {});
