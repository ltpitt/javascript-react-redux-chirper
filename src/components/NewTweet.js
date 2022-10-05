import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add Tweet to the store
    console.log("New Tweet: ", text);
    setText("");
  };

  const tweetLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {/* TODO: Redirect to the root route if successfully submitted */}
        <textarea
          maxLength={280}
          className="textarea"
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
        />
        {tweetLeft <= 100 ? (
          <div className="tweet-length">{tweetLeft}</div>
        ) : null}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewTweet;
