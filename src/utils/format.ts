import { IBAN } from '../types/iban';

export const format = (iban: IBAN): IBAN => iban.substring(0, 27).toUpperCase();

export const removeSpaces = (iban: IBAN): IBAN => iban.replace(/\s+/g, '');

export const addSpaces = (iban: IBAN): IBAN => format(removeSpaces(iban).replace(/(.{4})/g, '$1 '));
