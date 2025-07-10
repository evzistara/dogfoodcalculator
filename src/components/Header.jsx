import Bonnie from "../assets/Bonnie.svg";

function Header() {
  return (
    <>
      <header className="">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src={Bonnie} alt="Dog Food Logo" />
          <h1 className="text-2xl font-bold">Dog Food Calculator</h1>
        </div>

        <p>
          Not sure how much to feed your dog? This tool helps you calculate your
          dog's daily food needs based on their age, weight, and activity level.
          Whether you're feeding dry food, raw food, or a mix of both — we've
          got you covered. You'll also get a personalized feeding recommendation
          at the end!
        </p>
      </header>
    </>
  );
}

export default Header;
