import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import InlineEditCell from "./InlineEditCell";
import type { Tables } from "@/integrations/supabase/types";

const FastrackBooksTable = () => {
  const [books, setBooks] = useState<Tables<"fastrack_books">[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchBooks = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("fastrack_books")
      .select("*")
      .order("book_title");

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      setBooks(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateField = async (id: string, field: string, value: number | string | boolean) => {
    const { error } = await supabase
      .from("fastrack_books")
      .update({ [field]: value } as any)
      .eq("id", id);

    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Updated", description: `${field} updated successfully.` });
      fetchBooks();
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground">FastTrack & Books</h2>
        <p className="text-sm text-muted-foreground">Click on prices or discount to edit inline. Final price auto-calculates.</p>
      </div>

      <div className="rounded-lg border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">#</TableHead>
              <TableHead>Book Title</TableHead>
              <TableHead>Original Price</TableHead>
              <TableHead>Discount %</TableHead>
              <TableHead>Final Price</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">Loading...</TableCell>
              </TableRow>
            ) : books.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">No data found</TableCell>
              </TableRow>
            ) : (
              books.map((book, i) => (
                <TableRow key={book.id}>
                  <TableCell className="text-muted-foreground">{i + 1}</TableCell>
                  <TableCell className="font-medium">
                    <InlineEditCell
                      value={book.book_title}
                      onSave={(val) => updateField(book.id, "book_title", val)}
                      type="text"
                    />
                  </TableCell>
                  <TableCell>
                    <InlineEditCell
                      value={book.original_price}
                      onSave={(val) => updateField(book.id, "original_price", val)}
                      prefix="₹ "
                    />
                  </TableCell>
                  <TableCell>
                    <InlineEditCell
                      value={book.discount_percentage}
                      onSave={(val) => updateField(book.id, "discount_percentage", val)}
                      prefix=""
                    />
                    <span className="text-muted-foreground">%</span>
                  </TableCell>
                  <TableCell className="font-semibold text-primary">
                    ₹ {book.final_price?.toLocaleString() ?? "—"}
                  </TableCell>
                  <TableCell>
                    <Switch
                      checked={book.in_stock}
                      onCheckedChange={(checked) => updateField(book.id, "in_stock", checked)}
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

export default FastrackBooksTable;
