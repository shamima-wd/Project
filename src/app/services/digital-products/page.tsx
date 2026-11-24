import ServicePage from "../../../components/ServicePage";

export default function DigitalProductsPage() {
  return (
    <ServicePage
      number="03"
      title="Digital Products"
      subtitle="Useful digital resources, designed with purpose."
      description="We are developing ideas for digital templates, resources and tools that may help individuals and businesses work more effectively."
      features={[
        "Digital templates",
        "Business resources",
        "Online tools",
        "Future software products",
      ]}
    />
  );
}
