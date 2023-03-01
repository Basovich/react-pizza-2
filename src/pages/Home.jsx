import {Filters} from "../components/Filters/Filters";
import {Title} from "../components/Title/Title";
import {Pizzas} from "../components/Pizzas/Pizzas";
import {Header} from "../components/Header/Header";

export function Home() {
  return (
    <>
      <Header isNeedSearch={true}/>
      <Filters />
      <Title>All pizzas</Title>
      <Pizzas />
    </>
  )
}