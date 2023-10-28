const AddForm = () => {
  return (
    <div>
      <h1>Add Item</h1>
      <form>
        <label for="denumire">Denumire</label>
        <br />
        <input type="text" id="denumire" name="denumire" required></input>
        <br />
        <br />
        <label for="descriere">Descriere</label>
        <br />
        <input type="text" id="descriere" name="descriere" required></input>
        <br />
        <br />
        <label for="poza">Poza</label>
        <br />

        <input type="file" id="poza" name="poza" required></input>
        <br />
        <br />
        <label for="locatie">Locatie</label>
        <br />
        <input type="text" id="locatie" name="locatie" required></input>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddForm;
