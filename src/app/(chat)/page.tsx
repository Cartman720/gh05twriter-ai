"use client";

import clsx from "clsx";
import Image from "next/image";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useEffect, useState } from "react";
import { useCompletion } from "ai/react";
import { actions } from "./actions";
import styles from "./styles.module.scss";
import { Spinner } from "@/components/elements/spinner";

export default function Home() {
  const [selectedTone, setSelectedTone] = useState<any>();
  const [error, setErrorMessage] = useState<string>("");
  const { input, complete, completion, handleInputChange, isLoading } =
    useCompletion({
      api: "/api/chat",
    });

  const handleComplete = async (action: string, tone?: string) => {
    if (!input) {
      setErrorMessage("Please enter some text to continue.");
      return;
    }

    setErrorMessage("");

    await complete(`
      You are world class ghost writer.

      User has provided the following text, and you should improve it based on the action: 
      
      TEXT:
      ------
      ${input}

      Perform the following action: ${action}

      ${tone && `Additionally, adjust the tone to: ${tone}`}

      Make sure you generate the best content for your audience.

      IMPORTANT: 
      
      Make sure you don't change the meaning of the text. 
      You shouldn't generate illegal or harmful content.
      If user asks anything other than prompt you should answer "I am a ghost writer, I can only help you with writing.".
    `);
  };

  useEffect(() => {
    // clear error message after 5 seconds
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  }, [error]);

  return (
    <main className="bg-[#333233] pt-40 flex min-h-screen text-white font-sans">
      <div id="adamtab" class="adamtab">
        <div class="tab-head">Why did I build this?</div>
        <div class="tab-description">The short answer is something something or other here, I need to copy and paste the text in at some point but it's difficult with the hover feature on figma so making stuff up</div>
      <div
        className={clsx(
          "container mx-auto items-center",
          "w-full max-w-7xl",
          "p-12"
        )}
      >
        <div className="flex flex-wrap gap-x-10 mb-6">
          <div className="w-[550px] h-[150px] overflow-hidden flex items-center relative">
            <Image
              src="/images/GH05T-Writer-Lockup.png"
              alt="gh05t writer AI"
              className="object-contain"
              priority
              fill
            />
          </div>
          <div className="w-1/2 text-lg flex items-center">
            
          </div>
        </div>

        {isLoading && !completion && (
          <div className="animate-fade-in flex justify-center border-b pb-5 border-opacity-40 border-white">
            <Spinner size={50} color="white" />
          </div>
        )}

        {completion && (
          <div className="w-full text-xl min-h-[30px] pb-5 border-b border-opacity-40 border-white">
            {completion}
          </div>
        )}

        <form
          className="py-6"
          onSubmit={(e) => {
            e.preventDefault();
            setErrorMessage("Please choose one of below actions to continue.");
          }}
        >
          <input
            type="text"
            onChange={handleInputChange}
            value={input}
            className={styles.input}
            placeholder="Enter your text and hit the prompt to optimise:"
          />

          {error && (
            <div className="mt-2 animate-fade-in text-pink-400">{error}</div>
          )}
        </form>

        <div className={clsx("pt-6 pb-6", "border-t-2 border-[#ddd]")}>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xl font-light">Optimise:</span>
            {actions.map((action) => {
              if (action.options) {
                return (
                  <Listbox
                    key={action.value}
                    as="div"
                    onChange={(value) => handleComplete(action.value, value)}
                    className={clsx("relative", "z-10", "w-full sm:w-auto")}
                  >
                    <ListboxButton className={styles.button}>
                      {selectedTone?.label || "Change Tone:"}
                    </ListboxButton>
                    <ListboxOptions className="mt-2 w-full absolute flex flex-col gap-2">
                      {action.options.map((tone) => (
                        <ListboxOption
                          key={tone}
                          value={tone}
                          className={styles.button}
                        >
                          {tone}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Listbox>
                );
              }

              return (
                <div key={action.value} className="w-full sm:w-auto">
                  <button
                    onClick={() => handleComplete(action.value)}
                    className={styles.button}
                  >
                    {action.label}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
