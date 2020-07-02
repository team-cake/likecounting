import React from "react";

export default function animals({ awesome, name }) {
  return (
    <div>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <ul key={animal}>
              <li>
                Awesomeness Level {index + 1}: {animal}
              </li>
            </ul>
          );
        }
      )}
    </div>
  );
}
