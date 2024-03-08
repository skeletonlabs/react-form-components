import { useEffect, useState } from "react";
import "./App.css";
import { Select } from "./components/Select.tsx";
import { SelectMulti } from "./components/SelectMulti.tsx";
import { Checkbox } from "./components/Checkbox.tsx";
import { Radio } from "./components/Radio.tsx";
import { FileInput } from "./components/FileInput.tsx";

function App() {
  // State
  const [selectState, setSelectState] = useState<string>("foo");
  const [selectMultiState, setSelectMultiState] = useState<string[]>([
    "foo",
    "bar",
  ]);
  const [checkboxState, setCheckboxState] = useState<boolean>(false);
  const [radioState, setRadioState] = useState<string>("foo");
  const [fileInputState, setFileIputState] = useState<File[]>([]);

  useEffect(() => {
    console.log(fileInputState);
  }, [fileInputState]);

  return (
    <main className="max-w-[600px] mx-auto space-y-4">
      <header className="space-y-2 mb-10">
        <h2 className="text-3xl font-bold">React Form Components</h2>
        <p className="opacity-60">
          Demonstrates how to handle form element state management within
          components.
        </p>
      </header>
      <form className="space-y-4">
        {/* Select - Single */}
        <label>
          <span>Select</span>
          <Select
            name="selectTest"
            id="selectTest"
            value={selectState}
            onChange={setSelectState}
          />
        </label>
        <pre>selectState: {JSON.stringify(selectState, null, 2)}</pre>

        {/* --- */}
        <hr />

        {/* Select - Multiple */}
        <label>
          <span>Select (multiple)</span>
          <SelectMulti
            name="selectTest"
            id="selectTest"
            value={selectMultiState}
            onChange={setSelectMultiState}
          />
        </label>
        <pre>selectMultiState: {JSON.stringify(selectMultiState, null, 2)}</pre>

        {/* --- */}
        <hr />

        {/* Checkbox */}
        <label>
          <span>Checkbox</span>
          <div className="flex items-center gap-4">
            <Checkbox
              name="checkboxText"
              id="checkboxText"
              checked={checkboxState}
              onChange={setCheckboxState}
            />
            <p>Checkbox</p>
          </div>
        </label>
        <pre>checkboxState: {JSON.stringify(checkboxState, null, 2)}</pre>

        {/* --- */}
        <hr />

        {/* Radio */}
        <div className="space-y-2">
          <span>Radio Group</span>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Radio
                group={radioState}
                name="radioTest"
                id="foo"
                value="foo"
                onChange={setRadioState}
              />
              <span>Foo</span>
            </li>
            <li className="flex items-center gap-2">
              <Radio
                group={radioState}
                name="radioTest"
                id="bar"
                value="bar"
                onChange={setRadioState}
              />
              <span>Bar</span>
            </li>
            <li className="flex items-center gap-2">
              <Radio
                group={radioState}
                name="radioTest"
                id="fizz"
                value="fizz"
                onChange={setRadioState}
              />
              <span>Fizz</span>
            </li>
          </ul>
        </div>
        <pre>radioState: {JSON.stringify(radioState, null, 2)}</pre>

        {/* --- */}
        <hr />

        {/* File Input */}
        {/* fileInputState | setFileIputState */}
        <label>
          <span>File Input</span>
          <FileInput
            name="fileTest"
            id="fileTest"
            onChange={setFileIputState}
          />
        </label>
        <pre>(see console log for updates)</pre>
      </form>
    </main>
  );
}

export default App;
