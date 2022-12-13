import { useHistory } from 'react-router-dom';

export default function useLogout() {
  const history = useHistory();

  return () => {
    localStorage.clear();
    history.push('/');
  };
}
