export async function getTestData() {
  const response = await fetch(`/api/test`);
  if (!response.ok) {
    throw new Error('Failed to fetch test data');
  }
  const data = await response.json();
  return { testData: data };
}
