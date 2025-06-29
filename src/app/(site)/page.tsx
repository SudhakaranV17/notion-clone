import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Banner from "../../../public/appBanner.png";
import Cal from "../../../public/cal.png";
import Diamond from "../../../public/icons/diamond.svg";
import CheckIcon from "../../../public/icons/check.svg";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landing-page/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <>
      <section className="sm:flex sm:flex-col md:justify-center md:items-center gap-4 mt-10 px-4 sm:px-6 overflow-hidden">
        <TitleSection
          pills="✨ Your Workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div className="bg-white bg-gradient-to-r from-primary to-brand-primaryBlue mt-6 p-[2px] rounded-xl sm:w-[300px]">
          <Button
            variant="btn-secondary"
            className="bg-background p-6 rounded-[10px] w-full text-2xl"
          >
            Get Cypress Free
          </Button>
        </div>
        <div className="relative flex justify-center items-center mt-[-40px] md:mt-[-90px] ml-[-50px] sm:ml-0 w-[750px] sm:w-full">
          <Image src={Banner} alt="Application Banner" />
          <div className="top-[50%] right-0 bottom-0 left-0 z-10 absolute bg-gradient-to-t dark:from-background"></div>
        </div>
      </section>
      <section className="relative">
        <div className="before:top-0 after:top-0 after:right-0 before:bottom-0 after:bottom-0 before:left-0 before:z-10 after:z-10 before:absolute after:absolute flex before:bg-gradient-to-r after:bg-gradient-to-l before:dark:from-brand-dark before:from-background after:dark:from-brand-dark after:from-background before:to-transparent after:to-transparent before:w-20 after:w-20 overflow-hidden after:content[''] before:content['']">
          {[...Array(2)].map((arr) => (
            <div
              key={`${arr}-${randomUUID()}`}
              className="flex flex-nowrap animate-slide"
            >
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative flex items-center m-20 w-[200px] shrink-0"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="max-w-none object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="relative flex flex-col justify-center items-center px-4 sm:px-6">
        <div className="top-22 -z-10 absolute bg-brand-primaryPurple/50 blur-[120px] rounded-full w-[30%] h-32" />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Capture your ideas, thoughts, and meeting notes in a structured and organized manner."
          pills="Features"
        />
        <div className="relative flex justify-center items-center mt-10 sm:ml-0 border-8 border-washed-purple-300/10 border-opacity-10 rounded-2xl max-w-[450px]">
          <Image src={Cal} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
      <section className="relative">
        <div className="top-56 -z-100 absolute bg-brand-primaryPurple/50 blur-[120px] rounded-full w-full h-32" />
        <div className="flex flex-col mt-20 px-4 sm:px-6 overflow-visible overflow-x-hidden">
          <TitleSection
            title="Trusted by all"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
            pills="Testimonials"
          />
          {[...Array(2)].map((arr, index) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("flex flex-nowrap self-start gap-6 mt-10", {
                  "flex-row-reverse": index === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": index === 1,
                  "ml-[100vw]": index === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((testimonial, index) => (
                <CustomCard
                  key={testimonial.name}
                  className="dark:bg-gradient-to-t dark:to-background dark:from-border rounded-xl w-[500px] shrink-0s"
                  cardHeader={
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/avatars/${index + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {testimonial.name.toLocaleLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {testimonial.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 px-4 sm:px-6">
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pills="Pricing"
        />
        <div className="flex sm:flex-row flex-col-reverse justify-center items-center sm:items-stretch gap-4 mt-10">
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "relative dark:bg-black/40 background-blur-3xl rounded-2xl w-[300px]",
                {
                  "border-brand-primaryPurple/70":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle className="font-semibold text-2xl">
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div className="hidden dark:block top-0 -z-10 absolute bg-brand-primaryPurple/80 blur-[120px] rounded-full w-full h-32" />
                      <Image
                        src={Diamond}
                        alt="Pro Plan Icon"
                        className="top-6 right-6 absolute"
                      />
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span className="font-normal text-2xl">${card.price}</span>
                  {+card.price > 0 ? (
                    <span className="ml-1 dark:text-washed-purple-800">
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card.description}
                  </p>
                  <Button
                    variant="btn-primary"
                    className="mt-4 w-full whitespace-nowrap"
                  >
                    {card.planType === PRICING_PLANS.proplan
                      ? "Go Pro"
                      : "Get Started"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul className="flex flex-col gap-4 mb-2 font-normal">
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Image src={CheckIcon} alt="Check Icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
