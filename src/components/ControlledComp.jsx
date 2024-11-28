import { useState } from "react";

function ControlledComp() {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (e) => {
    // setCheckedItems(e.target.value);
  const bob = e.target;
  
    if (bob.checked) {
      setCheckedItems([...checkedItems, bob.value]);
    } else {
      setCheckedItems(checkedItems.filter((item) => {
        item !== bob.value;
      }))
    }
  };

  return (
    <>
      <form>

        {/* TEXT */}
          {/* <label htmlFor="vehicle3"> I have a boat</label>
      <p>
          <input
            type="text"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
            onChange={handleChange}
            value={checkedItems}
          />
        </p>
        <p>{checkedItems}</p> */}

{/* RADIO */}
        <p>
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            onChange={handleChange}
          />
          <label htmlFor="vehicle1"> I have a bike</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="vehicle2"
            name="vehicle2"
            value="Car"
            onChange={handleChange}
          />
          <label htmlFor="vehicle2"> I have a car</label>
        </p>
        <p>
          <input
            type="checkbox"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
            onChange={handleChange}
          />
          <label htmlFor="vehicle3"> I have a boat</label>
        </p>

        {/* <input type="submit" value="Submit" /> */}
      </form>

      <div>
        {checkedItems.map((item, index) => {
          <p className="border bg-stone-400 p-2" key={index}>
            {item}
          </p>;
        })}
      </div>
    </>
  );
}

export default ControlledComp;
