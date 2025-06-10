
import React, { useState } from "react";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

const Users: React.FC<{ posts: any[] }> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sampleUser: UserData = {
    id: 999,
    name: "New User",
    username: "newbie",
    email: "new@user.com",
    address: {
      street: "New Street",
      suite: "Suite 101",
      city: "Newville",
      zipcode: "12345",
      geo: {
        lat: "0.0000",
        lng: "0.0000"
      }
    },
    phone: "000-000-0000",
    website: "newuser.org",
    company: {
      name: "NewCorp Inc.",
      catchPhrase: "Innovating the future",
      bs: "scaling new heights"
    }
  };

  return (
    <div>
      <Header />
      <h1>Users</h1>
      <p>This is the users page.</p>

      {/* Add User Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add User
      </button>

      {/* Existing User List */}
      <div>
        {posts.map((post) => (
          <UserCard
            key={post.id}
            name={post.name}
            address={post.address}
            company={post.company}
            id={0}
            username={""}
            email={""}
            phone={""}
            website={""}
          />
        ))}
      </div>

      {/* User Modal */}
      <UserModal
        user={sampleUser}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
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