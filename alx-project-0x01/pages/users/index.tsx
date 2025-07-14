// pages/users/index.tsx
import React, { useState } from 'react';
import UserCard from '../../components/common/UserCard';
import UserModal from '../../components/common/UserModal';
import { UserData } from '../../interfaces';

interface UsersPageProps {
  posts: UserData[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>(posts);

  const handleAddUser = (newUser: Omit<UserData, 'id'>) => {
    const userWithId: UserData = {
      ...newUser,
      id: Math.max(...users.map(u => u.id)) + 1
    };
    setUsers([...users, userWithId]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Users</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Users;