/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios';
import { Suggestion, SuggestionPayload } from '@/types/Suggestion';
import DadataSuggestion from '@/types/DadataSuggestion';

const DEFAULT_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
async function getSuggestions({
  token,
  query,
  url,
  count,
  toBound,
  fromBound,
  locationOptions,
  metro
}: Suggestion): Promise<DadataSuggestion[]> {
  url = url || DEFAULT_URL;
  count = count || 10;

  const payload: SuggestionPayload = {
    query,
    count,
    to_bound: { value: toBound },
    from_bound: { value: fromBound },
    language: locationOptions.language,
    locations: locationOptions.locations,
    locations_boost: locationOptions.locationsBoost,
  };
  try {
    const {
      data: { suggestions },
    } = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${token}`,
      },
    });
    if (metro){
      return suggestions.filter(function(suggestion:any) {
        return suggestion.data.street_type_full !== "метро";
      });;
    }
    else return suggestions;
  } catch (error) {
    throw new Error(error);
  }
}

export default getSuggestions;
