type GameBoardProps = {
  children: React.ReactNode;
  title: string;
};

const GameBoard = ({ title, children }: GameBoardProps): JSX.Element => {
  return (
    <main className="py-7 px-9 rounded-2xl bg-brown bg-opacity-75">
      <h1 className="text-center text-2xl mb-4">{title}</h1>
      <div className="w-full grid grid-cols-8 gap-4 place-content-center">
        {children}
      </div>
    </main>
  );
};

export default GameBoard;
