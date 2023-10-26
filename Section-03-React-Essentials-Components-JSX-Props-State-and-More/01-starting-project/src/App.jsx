import { useState } from "react";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";

import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept) => (
              <TabButton
                key={Math.random()}
                isSelected={
                  selectedTopic === `${concept.title.toLocaleLowerCase()}`
                }
                onSelect={() => handleSelect(concept.title.toLocaleLowerCase())}
              >
                {concept.title}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
