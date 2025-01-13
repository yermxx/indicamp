import Faq from "@/components/faq";
import Cs from "@/components/ui/cs"

export default function InquiryPage() {
    return (
        <div>
          <main className="max-w-6xl mx-auto p-6">
          <Cs text="FAQ" />
            <Faq/>
          </main>
        </div>
      );
    }