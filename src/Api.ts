const MONO_api = 'https://api.monobank.ua/bank/currency';

export async function getRate():Promise<Mono[]> {
  const response = await fetch(MONO_api)
  
  if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
 
  return response ? response.json() : null;
}
