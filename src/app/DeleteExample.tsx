'use client';

import { useRouter } from 'next/navigation';

interface deleteExampleProps {
  baseUrl?: String;
}

const DeleteExample: React.FC<deleteExampleProps> = ({ baseUrl }) => {
  const router = useRouter();

  const delExample = () => {
    fetch(`${baseUrl}/api/example`, {
      method: 'DELETE',
    });
    router.refresh();
  };

  return (
    <button
      onClick={delExample}
      className='bg-slate-500 rounded-md p-1'
    >
      DELETE SECRETS
    </button>
  );
};

export default DeleteExample;
