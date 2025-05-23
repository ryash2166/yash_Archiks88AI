import { Accordion, AccordionItem } from "@nextui-org/react";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";

export default function AccordionData() {
  const [expandedKeys, setExpandedKeys] = useState([
    "Do you offer free trials for Archiks88 AI?",
    "What is Archiks88 AI, and how does it work?",
  ]);

  const defaultContent1 = {
    "Do you offer free trials for Archiks88 AI?":
      "No, we currently do not offer free trials. However, you can choose one of our affordable plans to get started and explore the full capabilities of Archiks88 AI. Flexible pricing plans for all content creators, Access to AI-powered video generation features, Affordable monthly and annual options.",
    "What happens if I cancel my subscription?":
      "If you cancel your subscription, you will retain access to Archiks88 AI features until the end of your current billing cycle. After that, your account will be downgraded to the free plan. Access remains active until the billing cycle ends, Your generated videos will still be available for download, Downgrade to free plan upon cancellation",
    "What payment methods do you accept?":
      "We accept all major credit and debit cards, as well as PayPal for payments. For enterprise clients, we also offer custom invoicing solutions. Visa, Mastercard, and American Express supported, PayPal payments for added flexibility, Custom invoicing available for Enterprise plans ",
    "Can I upgrade or downgrade my plan at any time?":
      "Yes, you can easily upgrade or downgrade your plan from your account dashboard. Changes to your plan will take effect immediately, and any price difference will be adjusted on your next billing cycle. Upgrade to unlock additional video generation credits. Downgrade anytime to adjust to your needs. Immediate changes with pro-rated billing",
    "Do you offer refunds if I am not satisfied with the service?":
      "No, currently we do not offer refunds.",
    "How does billing work for Enterprise plans?":
      "Our Enterprise plans are billed annually and include customized features and priority support. Contact our sales team to get a tailored quote. Annual billing for Enterprise solutions, Tailored packages based on your business needs, Dedicated account manager and priority support",
    "Will my subscription renew automatically?":
      "Yes, your subscription will automatically renew at the end of each billing cycle unless you cancel it before the renewal date. You will receive a reminder email before the renewal. Automatic renewal for uninterrupted service, Cancel anytime before the renewal date, Billing reminders sent via email ",
    "What happens if my payment fails?":
      "If your payment fails, we will notify you via email and attempt to process the payment again. Your account will remain active for a short grace period to allow you to update your payment details.Payment failure notifications sent immediately, Grace period to update payment information, Account access may be suspended after multiple failed attempts",
  };

  const defaultContent2 = {
    "What is Archiks88 AI, and how does it work?":
      "Archiks88 AI is an AI-powered tool designed to automate video content creation. It generates scripts, images, subtitles, and videos that can be directly published on platforms like Shorts, Reels, and Stories.",
    "Which social media platoforms are supported by Archiks88 AI?":
      "Archiks88 AI supports popular short-form video platforms like YouTube Shorts, Instagram Reels, TikTok, and Facebook Stories, ensuring that your content fits each platform's specifications.",
    "Can I customize videos generated by Archiks88 AI?":
      "Yes, Archiks88 AI allows you to customize scripts, images, subtitles, and video length. You can edit generated content to align with your branding and preferences.",
    "What types of content can I create with Archiks88 AI?":
      "Archiks88 AI can create various types of video content, including educational videos, product promotions, Reddit videos, ChatGPT-based explainers, and engaging split-screen content.",
    "Does Archiks88 AI provide subtitles for videos?":
      "Yes, Archiks88 AI automatically generates accurate subtitles for your videos. You can customize font styles, sizes, and placement to enhance the viewer experience.",
    "Can I upload my own content to use in videos?":
      "Yes, you can upload your own images, audio, and video clips to use alongside the AI-generated content. This helps you maintain brand consistency in your videos.",
    "How long does it take to generate a video with Archiks88 AI?":
      "It takes only a few minutes to generate a video, depending on the content complexity and length. The AI streamlines the process to save you time and effort.",
    "Do I need any video editing skills to use Archiks88 AI?":
      "No, Archiks88 AI is designed for ease of use. You don't need any prior video editing experience to create high-quality videos with our AI-powered tools.",
  };

  const handleSelectionChange = (keys) => {
    setExpandedKeys(typeof keys === "string" ? [keys] : Array.from(keys));
  };

  // Custom styles for accordion items
  const accordionItemStyles = (itemKey) => ({
    base: "border border-gray-700 rounded-md mb-2 overflow-hidden bg-primary",
    title: `font-semibold text-base sm:text-lg ${
      expandedKeys.includes(itemKey) ? "text-[#ed6d4a]" : "text-white"
    } focus:outline-none`,
    content: "px-4 py-3 mb-5 relative",
    indicator: `${
      expandedKeys.includes(itemKey) ? "text-[#ed6d4a]" : "text-white"
    }`,
    heading: "py-3 px-4 focus:outline-none relative z-30",
    trigger: "focus:outline-none data-[focus=true]:outline-none",
    triggerIcon: "focus:outline-none data-[focus=true]:outline-none",
  });

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 gap-10">
        <h2 className="text-2xl md:text-5xl font-bold max-sm:text-center sm:max-w-sm">
          Billing Questions 🎯
        </h2>
        <div className="relative">
          <Accordion
            selectedKeys={expandedKeys}
            onSelectionChange={handleSelectionChange}
            className="focus:outline-none"
          >
            {[
              "Do you offer free trials for Archiks88 AI?",
              "What happens if I cancel my subscription?",
              "What payment methods do you accept?",
              "Can I upgrade or downgrade my plan at any time?",
              "Do you offer refunds if I am not satisfied with the service?",
              "How does billing work for Enterprise plans?",
              "Will my subscription renew automatically?",
              "What happens if my payment fails?",
            ].map((key, index) => (
              <AccordionItem
                key={key}
                aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
                classNames={accordionItemStyles(key)}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <MinusIcon className="text-[#ed6d4a]" />
                  ) : (
                    <PlusIcon />
                  )
                }
                className="relative"
                defaultOpen={true}
                disableAnimation={false}
              >
                <div className="relative z-20">{defaultContent1[key]}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <h2 className="text-2xl sm:text-5xl font-bold max-sm:text-center sm:max-w-sm ">
          Product Questions 🥉
        </h2>
        <div className="relative">
          <Accordion
            selectedKeys={expandedKeys}
            onSelectionChange={handleSelectionChange}
            className="focus:outline-none !px-0"
          >
            {[
              "What is Archiks88 AI, and how does it work?",
              "Which social media platoforms are supported by Archiks88 AI?",
              "Can I customize videos generated by Archiks88 AI?",
              "What types of content can I create with Archiks88 AI?",
              "Does Archiks88 AI provide subtitles for videos?",
              "Can I upload my own content to use in videos?",
              "How long does it take to generate a video with Archiks88 AI?",
              "Do I need any video editing skills to use Archiks88 AI?",
            ].map((key, index) => (
              <AccordionItem
                key={key}
                aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
                classNames={accordionItemStyles(key)}
                indicator={({ isOpen }) =>
                  isOpen ? (
                    <MinusIcon className="text-[#ed6d4a]" />
                  ) : (
                    <PlusIcon />
                  )
                }
                className="relative"
                defaultExpanded={"Do you offer free trials for Archiks88 AI?"}
                disableAnimation={false}
              >
                <div className="relative z-20">{defaultContent2[key]}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
