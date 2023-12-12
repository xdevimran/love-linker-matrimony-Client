import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import PrimaryTitle from "../../utils/Titles/PrimaryTitle";

const ProUsers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rb8a12.onrender.com/biodata/?role=premium"
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <PrimaryTitle>Featured Premium Members</PrimaryTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.slice(0, 6).map((user) => (
          <UserCard key={user.biodataId} user={user} />
        ))}
      </div>
    </div>
  );
};

export default ProUsers;
