import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const monthlyPlans = [
    {
      title: "Starter",
      //   yearlyPrice: "$134",
      monthlyPrice: "11",
      features: [
        "300 Credits",
        "(10 Credits Equal to 1 Standard Video)",
        "Standard Mode",
        "Watermark Outputs",
        "Normal Support",
      ],
    },
    {
      title: "Lite",
      //   yearlyPrice: "$278",
      monthlyPrice: "23",
      features: [
        "800 Credits",
        "(10 Credits Equal to 1 Standard Video)",
        "Standard Mode",
        "Professional Mode",
        "No-Watermark Outputs",
        "More Camera Movement Option",
        "Priorty Support",
      ],
      isRecommended: true,
    },
    {
      title: "Pro",
      //   yearlyPrice: "$854",
      monthlyPrice: "71",
      features: [
        "3000 Credits",
        "(10 Credits Equal to 1 Standard Video)",
        "Standard Mode",
        "Professional Mode",
        "No-Watermark Outputs",
        "More Camera Movement Option",
        "Priorty Support",
      ],
    },
  ];

  const yearlyPlans = [
    {
      title: "Starter",
      yearlyPrice: "$168 Yearly",
      monthlyPrice: "14",
      features: [
        "300 Credits",
        "(10 Credits Equal to 1 Standard Video)",
        "Standard Mode",
        "Watermark Outputs",
        "Normal Support",
      ],
    },
    {
      title: "Lite",
      yearlyPrice: "$348 Yearly",
      monthlyPrice: "29",
      features: [
        "800 Credits",
        "(10 Credits Equal to 1 Standard Video)",
        "Standard Mode",
        "Professional Mode",
        "No-Watermark Outputs",
        "More Camera Movement Option",
        "Priorty Support",
      ],
      isRecommended: true,
    },
    {
      title: "Pro",
      yearlyPrice: "$1068 Yearly",
      monthlyPrice: "89",
      features: [
        "3000 Credits",
        "(10 Credits Equal to 1 Standard Video)",
        "Standard Mode",
        "Professional Mode",
        "No-Watermark Outputs",
        "More Camera Movement Option",
        "Priorty Support",
      ],
    },
  ];
  return (
    <Tabs className="flex flex-col justify-center items-center gap-10 ">
      <TabList className="flex items-center gap-3 pricing relative border border-border-secondary bg-primary rounded-xl py-2 px-3 w-fit">
        <Tab
          active
          className="px-3 py-2 font-semibold inline-flex border-0 text-xs sm:text-sm rounded-xl cursor-pointer text-gray-500"
        >
          Monthly
        </Tab>
        <Tab className="px-3 py-2 font-semibold inline-flex border-0 text-xs sm:text-sm rounded-xl cursor-pointer text-gray-500">
          Yearly
        </Tab>
        <div
          disabled
          className="px-3 py-2 font-semibold inline-flex border-0 text-xs sm:text-sm rounded-xl bg-secondary cursor-not-allowed"
        >
          Yearly 30% off
        </div>
      </TabList>
      <div className="flex justify-center w-full">
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            {monthlyPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                yearlyPrice={plan.yearlyPrice}
                monthlyPrice={plan.monthlyPrice}
                features={plan.features}
                isRecommended={plan.isRecommended}
                isActive={index === 1}
              />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
            {yearlyPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                yearlyPrice={plan.yearlyPrice}
                monthlyPrice={plan.monthlyPrice}
                features={plan.features}
                isRecommended={plan.isRecommended}
                isActive={index === 1}
              />
            ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default PricingSection;
