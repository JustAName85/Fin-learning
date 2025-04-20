export const validateByRegex = (value: string, regex: RegExp): boolean => {
  return regex.test(value);
};
