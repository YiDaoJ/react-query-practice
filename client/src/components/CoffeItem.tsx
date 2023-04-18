import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FC } from "react";
import { getCoffeeById } from "../api/coffee";
import { useParams } from "react-router-dom";
import "./style.scss";

export const CoffeeItem: FC = () => {
  // access client
  const queryClient = useQueryClient();

  const { coffeeId } = useParams();

  const query = useQuery({
    queryKey: ["coffee", coffeeId],
    queryFn: () => getCoffeeById(coffeeId),
  });

  if (query.isLoading) {
    return <h1>loading ...</h1>;
  }

  if (query.error) {
    return <div>{"An error has occured: " + error.message}</div>;
  }

  return (
    <>
      <h1>{query.data.title}</h1>
      <p>{query.data.description}</p>
      <div className="coffee-ingredient">
        <span>Ingredients:</span>
        <ul>
          {query.data.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
