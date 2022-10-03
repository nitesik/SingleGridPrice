import "./styles.css"

function Home() {

  const handleSubmit = (e) => {
    console.log("Signed Up");
    e.preventDefault();
  }

  return (
    <div className="container">
      <div className="upper">
        <div className="title bold">Join our community</div>
        <div className="subtitle bold">30-day, hassle-free money back guarantee</div>        
        <div className="description gray">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</div>
      </div>
      <div className="lower">
        <div className="left">
          <div className="monthly bold">Monthly Subscription</div>
          <div className="cash">
            <div className="dollar">$29</div>
            <div className="gray">per month</div>
          </div>
            <div>Full access for less than $1 a day</div>
            <div className="button">
              <form onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">Sign Up</button>
              </form>
            </div>
        </div>
        <div className="right">
          <div className="bold">Why Us</div>
          <div className="right-description">
            <div>Tutorials by industry experts</div>
            <div>Peer & expert code review</div>
            <div>Coding exercises</div>
            <div>Access to our GitHub repos</div>
            <div>Community forum</div>
            <div>Flashcard decks</div>
            <div>New videos every week</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;