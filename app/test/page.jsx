import { loadPageContent } from 'helpers/api';
import { getTestData } from 'services/test';
import TestPage from './Test';

export default async function Page() {
  const { testData } = await loadPageContent([getTestData()]);

  return <TestPage data={testData} />;
}
