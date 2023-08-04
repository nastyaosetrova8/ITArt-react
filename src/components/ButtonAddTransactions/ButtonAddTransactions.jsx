import { useState } from "react";

export const ButtonAddTransactions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    console.log('axaxax');
    setModalOpen(true);
  };
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Add transaction
      </button>
      {modalOpen && '</>'}
    </div>
  );
};
