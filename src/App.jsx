// Import necessary modules and components
import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

// Define the main App component
function App() {
  // Declare state variables
  const [selectedTopic, setSelectedTopic] = useState();
  // Define the list of topics
  const topics = ["components", "jsx", "props", "state"];

  // Define a function to handle the selection of a topic
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  // Render the App component
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* Map over the CORE_CONCEPTS array and render a CoreConcept component for each concept */}
            {CORE_CONCEPTS.map((concept) => {
              return <CoreConcept key={concept.title} {...concept} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* Map over the topics array and render a TabButton component for each topic */}
            {topics.map((topic) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                onSelect={() => handleSelect(topic)}
              >
                {/* Capitalize the first letter of the topic */}
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
            ))}
          </menu>
          {/* If no topic is selected, prompt the user to select a topic. Otherwise, display the content of the selected topic. */}
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

// Export the App component as the default export
export default App;
