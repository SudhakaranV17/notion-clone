import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import { CLIENTS } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="sm:flex sm:flex-col md:justify-center md:items-center mt-10 px-4 sm:px-6 overflow-hidden">
        <TitleSection
          pills="✨ Your workspace Perfected"
          title="All-in-one Collaboration and Productivity Platform"
        />
        <div className="bg-white bg-gradient-to-r from-primary to-brand-primaryBlue mt-6 p-[2px] rounded-xl sm:w-[300px]">
          <Button
            variant="btn-secondary"
            className="bg-background p-6 rounded-[10px] w-full text-white text-2xl"
          >
            Get Cypress Free
          </Button>
        </div>
        <div className="flex justify-center items-center mt-[-40px] md:mt-[-90px] ml-[-50px] sm:ml-0 w-[750px] sm:w-full">
          <Image
            src={"/appBanner.png"}
            alt="application banner"
            width={1000}
            height={1000}
          />
          <div className="top-[50%] right-0 bottom-0 left-0 z-10 absolute bg-gradient-to-t dark:from-background"></div>
        </div>
      </section>
      <section className="relative">
        <div className="before:top-0 after:right-0 before:bottom-0 after:bottom-0 before:left-0 before:z-10 after:z-20 before:absolute after:absolute flex before:bg-gradient-to-r after:bg-gradient-to-l before:dark:from-brand-dark before:from-background after:dark:from-brand-dark after:from-background before:to-transparent after:to-transparent before:w-20 after:w-20 overflow-hidden after:content[''] before:content['']">
          {[...Array(2)].map((arr, index) => (
            <div className="flex flex-nowrap animate-slide" key={index}>
              {CLIENTS.map((client) => (
                <div
                  className="relative flex items-center m-20 w-[200px] shrink-0"
                  key={client?.alt}
                >
                  <Image
                    src={client?.logo}
                    alt={client?.alt}
                    width={200}
                    className="max-w-none object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
