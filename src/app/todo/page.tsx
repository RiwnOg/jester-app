/* eslint-disable react-hooks/rules-of-hooks */

import { axiosClient, formatDate } from '@/lib/utils';
import { Example } from '@prisma/client';
// import axios from 'axios';

const page = async ({}) => {
  const response = await axiosClient.get('/api/example/');
  const examples: Example[] = response.data;

  return (
    <div>
      <div>
        {examples.map((example: Example) => (
          <li key={example.id}>
            <p>Post: {example.post}</p>
            <p>Created at: {formatDate(example.createdAt.toString())}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default page;
