import ServicePage from "../../../components/ServicePage";

export default function EcommercePage() {
  return (
    <ServicePage
      number="02"
      title="E-commerce Solutions"
      subtitle="Thoughtful online shopping experiences."
      description="We plan and develop practical online store experiences, with clear product information, intuitive navigation and a focus on usability."
      features={[
        "WooCommerce stores",
        "Product catalogues",
        "Online store design",
        "E-commerce user experience",
      ]}
    />
  );
}
