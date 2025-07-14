// pages/users/index.tsx
import React from 'react';
import UserCard from '../../components/common/UserCard';
import { UserProps } from '../../interfaces';

interface UsersPageProps {
  posts: UserProps[]; // Using 'posts' instead of 'users' to match requirement
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((user) => ( 
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json(); // Keeping as 'posts' to match requirement

  return {
    props: {
      posts // Using 'posts' as required
    }
  };
}

export default Users;