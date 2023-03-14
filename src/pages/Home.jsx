import {Filters} from "../components/Filters/Filters";
import {Title} from "../components/Title/Title";
import {Pizzas} from "../components/Pizzas/Pizzas";
import {Header} from "../components/Header/Header";

export function Home() {
  return (
    <>
      <Header />
      <Filters />
      <Title>All pizzas</Title>
      <Pizzas />
    </>
  )
}