import makeSort from '../app';

test('should sort', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const received = makeSort(data);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(received).toEqual(expected);
});

test('should sort', () => {
  const data = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
  ];

  const received = makeSort(data);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 100 },
    { name: 'мечник', health: 50 },
  ];

  expect(received).toEqual(expected);
});

test('should sort', () => {
  const data = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 50 },
    { name: 'лучник', health: 80 },
  ];

  const received = makeSort(data);
  const expected = [
    { name: 'лучник', health: 80 },
    { name: 'маг', health: 50 },
    { name: 'мечник', health: 10 },
  ];

  expect(received).toEqual(expected);
});

test('should sort', () => {
  const data = [
    { name: 'мечник', health: 0 },
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 0 },
  ];

  const received = makeSort(data);
  const expected = [
    { name: 'мечник', health: 0 },
    { name: 'маг', health: 0 },
    { name: 'лучник', health: 0 },
  ];

  expect(received).toEqual(expected);
});
