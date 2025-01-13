import Forum from "@/components/forum"
import Cs from "@/components/ui/cs"

export default function InquiryPage() {
    return (
        <div>
          <main className="max-w-6xl mx-auto p-6">
          <Cs text="공지사항" />
            <Forum/>
          </main>
        </div>
      );
    }