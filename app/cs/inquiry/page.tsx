import Inquirytable from "@/components/Inquirytable";
import Cs from "@/components/ui/cs"

export default function InquiryPage() {
    return (
        <div>
          <main className="max-w-6xl mx-auto p-6">
          <Cs text="1:1 문의게시판" />
            <Inquirytable/>
          </main>
        </div>
      );
    }
 
