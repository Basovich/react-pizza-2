import { Container } from "./globalStyle/layout";
import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filters/Filters";
import { Title } from "./components/Title/Title";
import { Pizzas } from "./components/Pizzas/Pizzas";

function App() {
  return (
    <Container>
      <Header />
      <Filters />
      <Title>
        All pizzas
      </Title>
      <Pizzas />
    </Container>
  );
}

export default App;
