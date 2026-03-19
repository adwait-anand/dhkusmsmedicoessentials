import { useState, useEffect } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface SubjectEntry {
  name: string;
  coachings: { coachingId: string; coachingName: string; price: number }[];
}

const SubjectSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allSubjects, setAllSubjects] = useState<SubjectEntry[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase
        .from("coaching_notes")
        .select("subject, coaching_institute, price")
        .eq("in_stock", true);

      if (!data) return;

      const map = new Map<string, SubjectEntry>();
      data.forEach((row) => {
        if (!map.has(row.subject)) {
          map.set(row.subject, { name: row.subject, coachings: [] });
        }
        map.get(row.subject)!.coachings.push({
          coachingId: encodeURIComponent(row.coaching_institute),
          coachingName: row.coaching_institute,
          price: row.price,
        });
      });
      setAllSubjects(Array.from(map.values()));
    };
    fetch();
  }, []);

  const filteredSubjects = searchQuery.trim()
    ? allSubjects.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search subjects across all coaching institutes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 py-6 text-base rounded-xl border-2 border-border bg-card focus:border-primary transition-colors"
        />
      </div>

      {filteredSubjects.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-50 max-h-80 overflow-y-auto">
          {filteredSubjects.map((subject) => (
            <div key={subject.name} className="border-b border-border last:border-b-0">
              <div className="px-4 py-3 bg-muted/50">
                <span className="font-semibold text-card-foreground">{subject.name}</span>
              </div>
              <div className="divide-y divide-border/50">
                {subject.coachings.map((coaching) => (
                  <Link
                    key={coaching.coachingId}
                    to={`/coaching/${coaching.coachingId}`}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-muted/30 transition-colors group"
                    onClick={() => setSearchQuery("")}
                  >
                    <span className="text-sm text-muted-foreground">{coaching.coachingName}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-primary">NRS {coaching.price.toLocaleString()}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {searchQuery.trim() && filteredSubjects.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-50 p-4 text-center text-muted-foreground">
          No subjects found matching "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default SubjectSearch;
