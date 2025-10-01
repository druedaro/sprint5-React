import Button from "../atoms/Button";
import { faqs } from "../../config/appData";

const Faq = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-xl md:text-4xl font-semibold capitalize mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of our FAQs. If you have any other questions you’d like answered, please feel free to email us.
        </p>

        <div className="text-left rounded-lg overflow-hidden bg-white shadow-sm divide-y">
          {faqs.map((faqs, i) => (
            <details key={i} className="group">
              <summary className="w-full flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50">
                <span className="font-medium text-gray-900 text-lg">{faqs.q}</span>
                <img
                  src="/images/icon-arrow.svg"
                  alt=""
                  className="h-3 w-4 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6 text-gray-600">{faqs.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="primary">More Info</Button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
