import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <SearchForm />

      <CocktailList />
    </main>
  );
}
