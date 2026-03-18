import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import InlineEditCell from "./InlineEditCell";
import type { Tables } from "@/integrations/supabase/types";

const INSTITUTES = [
  "M@rrow 8.0",
  "Cerebrum 2.0",
  "eGurukul 4.0",
  "D@MS Alpha",
  "M@rrow 6.0",
  "Stepladder (Prep X)",
  "DBMCI One",
];

const CoachingNotesTable = () => {
  const [notes, setNotes] = useState<Tables<"coaching_notes">[]>([]);
  const [selectedInstitute, setSelectedInstitute] = useState(INSTITUTES[0]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchNotes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("coaching_notes")
      .select("*")
      .eq("coaching_institute", selectedInstitute)
      .order("subject");

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setNotes(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, [selectedInstitute]);

  const updateField = async (id: string, field: string, value: number | string | boolean) => {
    const { error } = await supabase
      .from("coaching_notes")
      .update({ [field]: value })
      .eq("id", id);

    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Updated", description: `${field} updated successfully.` });
      fetchNotes();
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-foreground">Coaching Notes</h2>
          <p className="text-sm text-muted-foreground">Click on any price to edit it inline</p>
        </div>
        <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
          <SelectTrigger className="w-[220px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {INSTITUTES.map((inst) => (
              <SelectItem key={inst} value={inst}>{inst}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">#</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Price (NRS)</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">Loading...</TableCell>
              </TableRow>
            ) : notes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-muted-foreground py-8">No data found</TableCell>
              </TableRow>
            ) : (
              notes.map((note, i) => (
                <TableRow key={note.id}>
                  <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                  <TableCell className="font-medium">{note.subject}</TableCell>
                  <TableCell>
                    <InlineEditCell
                      value={note.price}
                      onSave={(val) => updateField(note.id, "price", val)}
                      prefix="₹ "
                    />
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={note.in_stock}
                      onCheckedChange={(checked) => updateField(note.id, "in_stock", checked)}
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CoachingNotesTable;
