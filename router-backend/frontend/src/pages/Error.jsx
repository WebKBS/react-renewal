import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import PageContent from './PageContent';

export default function Error() {
  const error = useRouteError();
  console.log(error);
  let message = 'Something went wrong!';
  let title = 'An error occured!';
  if (error.status === 500) {
    message = JSON.parse(error.data.message);
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = error.data.message;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
