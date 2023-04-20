'use client';

// import { baseURL } from '@/lib/utils';

interface deleteExampleProps {
  baseUrl?: String;
}

const DeleteExample: React.FC<deleteExampleProps> = ({ baseUrl }) => {
  const delExample = () => {
    console.log('Deleting...', baseUrl);

    fetch(`${baseUrl}/api/example`, {
      method: 'DELETE',
    });
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
