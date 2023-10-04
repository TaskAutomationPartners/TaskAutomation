import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { Agent } from "~/api/agent";
import About from "~/components/sections/About";
import Contact from "~/components/sections/Contact";
import HeroSection from "~/components/sections/HeroSection";
import Solutions from "~/components/sections/Solutions";
import ToolSection from "~/components/sections/ToolSection";

export const meta: MetaFunction = () => {
  return [
    {
      title:
        "Task Automation Partners - Your Software Development Partner in Metro Detroit",
    },
    {
      name: "description",
      content:
        "Specializing in reliable and tailored software solutions to support companies in their everyday tasks. Serving Metro Detroit, Wayne County, and neighboring cities.",
    },
    {
      property: "og:title",
      content:
        "Task Automation Partners - Expert Software Solutions in Metro Detroit",
    },
    {
      property: "og:description",
      content:
        "Task Automation Partners provides reliable and tailored software solutions, focusing on professionalism and excellence, serving businesses in Metro Detroit, Wayne County, and beyond.",
    },
    { property: "og:type", content: "website" },
    //TODO:
    { property: "og:url", content: "https://" },
    //TODO:
    { property: "og:image", content: "" },
    { property: "og:site_name", content: "Task Automation Partners" },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content:
        "Task Automation Partners - Your Software Development Partner in Metro Detroit",
    },
    {
      name: "twitter:description",
      content:
        "Providing reliable and tailored software solutions to businesses in Metro Detroit, Wayne County, and neighboring cities.",
    },
    //TODO:
    {
      name: "twitter:image",
      content: "https://www.yourwebsite.com/twitter-image.jpg",
    },
    {
      name: "keywords",
      content:
        "Software Development, Task Automation, Metro Detroit, Wayne County, Professionalism, Excellence, Reliable Solutions",
    },
    { name: "geo.region", content: "US-MI" },
    { name: "geo.placename", content: "Detroit" },
    //TODO:
    { name: "geo.position", content: "42.3314;-83.0458" },
    //TODO:
    { name: "ICBM", content: "42.3314, -83.0458" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const entries = Object.fromEntries(await request.formData())
  entries.id = crypto.randomUUID()
  console.table(entries)
  const res = await Agent.Inquiry.submitInquiry(entries)
  console.log(res)
  if (res) {
    return {
      success: true,
    } 
  } else
    return {
      error: res,
    };
  }

export default function Index() {
  const actionData = useActionData() as { success?: boolean; error?: boolean };
  return (
    <>
      <HeroSection />
      <About />
      <ToolSection />
      <Solutions />
      <Contact
        actionData={actionData}
        title="Get in touch."
        contactDescription="Connecting with us opens the door to tailored digital solutions designed to meet your unique needs. We specialize in crafting innovative strategies that drive tangible results. Let’s discuss your goals and explore how we can achieve them together."
      />
    </>
  );
}
