import ServicePage from "../../../components/ServicePage";

export default function WebDevelopmentPage() {
  return (
    <ServicePage
      number="01"
      title="Web Development"
      subtitle="A stronger digital presence for your business."
      description="We aim to create responsive, accessible websites that communicate your value and help customers understand your business."
      features={[
        "Business websites",
        "Responsive web design",
        "Next.js development",
        "Website maintenance",
      ]}
    />
  );
}
