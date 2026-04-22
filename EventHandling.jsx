function EventExample() {
  const handleClick = () => {
    console.log("Button was clicked!");
  };

  const handleInput = (event) => {
    console.log("Input value:", event.target.value);
  };

  const handleItemClick = (itemId) => {
    console.log("Item was clicked:", itemId);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>

      <input onChange={handleInput} />

      <button onClick={() => handleItemClick(123)}>
        Item 123
      </button>

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted!");
      }}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}export default EventExample;
