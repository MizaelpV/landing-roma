import { useState } from "react";
import romaLogo from "./assets/roma-logo.png";
import romaHeart from "./assets/heart.png";

import "./App.css";

function App() {
  const [email, setEmail] = useState<string>("");
  const [isNotified, setIsNotified] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(
    //   `Gracias por tu interes, nos pondremos en contacto contigo pronto en ${email}`
    // );
    setIsNotified(true);
  };

  // const validateEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const email = e.currentTarget.value;
  //   const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //   if (!emailPattern.test(email)) {
  //     console.log("Email no válido");
  //   }
  // };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.placeholder = "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.placeholder = "Deja tu email aquí";
  };

  return (
    <main className="max-w-[1280px] m-auto">
      <img src={romaLogo} alt="React Logo" className=" w-40 h-40" />

      <section className="flex flex-col justify-center items-center lg:mt-56 mt-48">
        {isNotified && (
          <div
            className="bg-[#3cbbb1] text-white p-2 rounded-lg"
            onClick={() => setIsNotified(false)}
          >
            Gracias por tu interés, te avisaremos pronto
          </div>
        )}

        {!isNotified && (
          <>
            <form
              className=" lg:w-[450px] w-96 text-center"
              onSubmit={onSubmit}
            >
              <h1 className="font-bold text-5xl">Proximamente</h1>
              <h3 className="text-center lg:mt-3 mt-1 text-2xl">
                Moda que crece contigo
              </h3>
              <div className="flex gap-5  mt-5 bg-white p-2 rounded-lg">
                <input
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Deja tu email aquí"
                  type="text"
                  className="p-2 w-3/4  h-12 outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className=" hover:bg-[#30958c] w-1/4 rounded-lg bg-[#3cbbb1] text-white font-semibold">
                  Avísame
                </button>
              </div>
            </form>

            <span className="lg:mt-5 mt-3 text-sm">
              Avísame cuando la tienda esté lista
              <img src={romaHeart} alt="heart" className="ml-1 w-8 inline" />
            </span>
          </>
        )}
      </section>

      {/* Section avisando que recibimos el email y avisaremos */}
    </main>
  );
}

export default App;
