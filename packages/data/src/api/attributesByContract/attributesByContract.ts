import { META_SERVICE_HOST } from '../../constants';
import { ParsedDataReturn } from '../../types';
import { parseData } from '../../utils';
import { Attributes } from './attributesByContract.type';

export const attributesByContract = async (
  contractId: string,
): Promise<ParsedDataReturn<Attributes>> => {

  let data;
  let error: string;

  try {
    const res = await fetch(`${META_SERVICE_HOST}/${contractId}/attributes`);

    if (!res.ok) {
      error = 'Error fetching attributes data';
      throw new Error(error);
    }

    data = await res.json();
  } catch (err) {
    error = `Error fetching attributes data, ${err}`;
  }

  return parseData<Attributes>(
    data,
    error,
    error,
  );
};

export const attributesByContractThrowOnError = async (
  contractId: string,
): Promise<Attributes> => {
  const { data, error } = await attributesByContract(contractId);
  if (error) {
    console.error(error);
    throw new Error(error);
  }

  return data;
};