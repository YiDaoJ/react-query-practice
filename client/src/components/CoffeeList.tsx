import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { getCoffeeList } from "../api/coffee";
import "./style.scss";
import { Link } from "react-router-dom";

export const CoffeeList = () => {
  // access client
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["coffee"],
    queryFn: getCoffeeList,
  });

  if (isLoading) {
    return <h1>loading ...</h1>;
  }

  if (error) {
    return <div>{"An error has occured: " + error.message}</div>;
  }

  return (
    <div>
      <ul className="coffee-list">
        {data.map((coffee) => (
          <li key={coffee.id}>
            <Link to={`coffee/${coffee.id}`}>{coffee.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
