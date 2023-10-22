type GameBoardProps = {
  children: React.ReactNode;
  title: string;
};

const GameBoard = ({ title, children }: GameBoardProps): JSX.Element => {
  return (
    <main className="py-7 px-9 rounded-2xl bg-brown bg-opacity-75">
      <h1 className="text-center text-2xl mb-4">{title}</h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8  sm gap-4 place-items-center">
        {children}
      </div>
    </main>
  );
};

export default GameBoard;
