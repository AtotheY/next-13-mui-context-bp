import { apiUrl } from 'constants/api';

export async function getTestData() {
  const response = await fetch(`${apiUrl}/api/test`);
  if (!response.ok) {
    throw new Error('Failed to fetch test data');
  }
  const data = await response.json();
  return { testData: data };
}
