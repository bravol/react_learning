import { concepts } from "../../data/data";
import Concept from "./concept/Concept";
import Header from "./header/Header";

function Todos() {
  return (
    <div>
      {/* importing header */}
      <Header />
      <ul id="concepts">
        <Concept
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <Concept
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Concept
          image={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
      </ul>
    </div>
  );
}

export default Todos;
