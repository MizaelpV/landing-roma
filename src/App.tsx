import { useState } from "react";
import romaLogo from "./assets/roma-logo.png";
import romaHeart from "./assets/heart.png";

import "./App.css";

type FormProps = {
  onSubmit: (email: string) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [email, setEmail] = useState<string>("");

  //   // const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   //   const email = e.currentTarget.value;
  //   //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //   //   if (!emailPattern.test(email)) {
  //   //     console.log("Email no válido");
  //   //   }
  //   // };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.placeholder = "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.placeholder = "Deja tu email aquí";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form className="lg:w-[450px] w-96 text-center" onSubmit={handleSubmit}>
      <h1 className="font-bold text-5xl">Proximamente</h1>
      <h3 className="text-center lg:mt-3 mt-1 text-2xl">
        Moda que crece contigo
      </h3>
      <div className="flex gap-5 mt-5 bg-white p-2 rounded-lg">
        <input
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Deja tu email aquí"
          type="text"
          className="p-2 w-3/4 h-12 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="hover:bg-[#30958c] w-1/4 rounded-lg bg-[#3cbbb1] text-white font-semibold">
          Avísame
        </button>
      </div>
    </form>
  );
};

type ConfirmationMessageProps = {
  onClose: () => void;
};

const ConfirmationMessage = ({ onClose }: ConfirmationMessageProps) => (
  <div className="bg-[#3cbbb1] text-white p-2 rounded-lg" onClick={onClose}>
    Gracias por tu interés, te avisaremos pronto
  </div>
);

function App() {
  const [isNotified, setIsNotified] = useState(false);

  const handleSubmit = (email: string) => {
    console.log(email);
    setIsNotified(true);
  };

  const handleCloseConfirmation = () => {
    setIsNotified(false);
  };

  return (
    <main className="max-w-[1280px] m-auto">
      <img src={romaLogo} alt="React Logo" className="w-40 h-40" />

      <section className="flex flex-col justify-center items-center lg:mt-56 mt-48">
        {isNotified ? (
          <ConfirmationMessage onClose={handleCloseConfirmation} />
        ) : (
          <>
            <Form onSubmit={handleSubmit} />

            <div className="flex gap-2 p-3">
              <span className="lg:mt-5 mt-3 text-sm hover:underline">
                Avísame cuando la tienda esté lista
              </span>

              <img src={romaHeart} alt="heart" className="w-8 inline " />
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App;
