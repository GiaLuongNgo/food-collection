import { FoodsCollectionProvider } from "@/contexts/FoodsCollectionContext";
import SearchInput from "@/components/SearchInput";
import FoodTab from "@/components/FoodTab";
import FoodList from "@/components/FoodList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Container from "@/components/Container";
import "./page.scss"

const Home: React.FC = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            networkMode: "always",
          },
        },
      })
  );
  return (
    <div data-testid="food_collection-page" className="food-collection-page">
      <QueryClientProvider client={queryClient}>
        <FoodsCollectionProvider >
          <Container className="food-container">
            <SearchInput />
            <FoodTab />
            <FoodList />
          </Container>
        </FoodsCollectionProvider>
      </QueryClientProvider>
    </div>
  );
}

export default Home;
