import Info from "./components/Info/Info";

interface Gentleman {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

const App = () => {
  const gentlemenList: Gentleman[] = [
    {
      id: 1,
      name: "Bertin Osborne",
      status: "Alive",
      profession: "Youtuber",
      twitter: "@osbourne",
      picture: "bertin.jpg",
      alternativeText: "Osbourne pointing at you",
      selected: true,
    },
    {
      id: 2,
      name: "The Farytale",
      status: "RIP",
      profession: "Influencer",
      twitter: "pending",
      picture: "fary.jpg",
      alternativeText: "The Fary pointing at you",
      selected: false,
    },
    {
      id: 3,
      name: "Julius Churchs",
      status: "Alive",
      profession: "Java developer",
      twitter: "@julius_churchs",
      picture: "julio.jpg",
      alternativeText: "Churchs pointing at you",
      selected: true,
    },
  ];

  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls"></section>
      <Info
        numberOfPointingGentlemen={
          gentlemenList.filter(({ selected }) => selected).length
        }
      />
      <main className="main">
        <ul className="gentlemen"></ul>
      </main>
    </div>
  );
};

export default App;
