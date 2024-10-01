import { useState } from "react";
import { usePostPuppyMutation } from "./puppySlice"

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted
  const [postPuppy, {isLoading, error} ] = usePostPuppyMutation();

  function postPuppyPayload(event) {
    event.preventDefault();
    // Placeholder image w/ random photos of dogs
    const imageUrl = "https://loremflickr.com/200/300/dog";
    postPuppy({ name, breed, imageUrl });
    setName('');
    setBreed('');
  }

  return (
    <>
      <h2>Add a Puppy</h2>
      <form onSubmit={postPuppyPayload}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button>Add to Roster</button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </>
  );
}
