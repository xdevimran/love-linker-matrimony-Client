const Footer = () => {
  return (
    <div className="bg-pink-100">
      <section className="pt-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold py-8">❤️Linker</h2>
          <ul className="flex flex-wrap justify-center -m-5 pb-8">
            <li className="p-5">
              <a
                className="font-heading text-base text-gray-900 hover:text-gray-700"
                href="#features"
              >
                Features
              </a>
            </li>
            <li className="p-5">
              <a
                className="font-heading text-base text-gray-900 hover:text-gray-700"
                href="#pricing"
              >
                Pricing
              </a>
            </li>
            <li className="p-5">
              <a
                className="font-heading text-base text-gray-900 hover:text-gray-700"
                href="#affiliate"
              >
                Affiliate Program
              </a>
            </li>
            <li className="p-5">
              <a
                className="font-heading text-base text-gray-900 hover:text-gray-700"
                href="#press"
              >
                Press Kit
              </a>
            </li>
          </ul>
          <div className="border-b border-gray-100"></div>
          <p className="text-gray-600 text-center py-8 text-sm">
            © Copyright 2023. All Rights Reserved by ❤️Linker.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
