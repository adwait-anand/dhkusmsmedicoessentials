import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface InlineEditCellProps {
  value: number | string;
  onSave: (newValue: number | string) => void;
  type?: "number" | "text";
  prefix?: string;
}

const InlineEditCell = ({ value, onSave, type = "number", prefix }: InlineEditCellProps) => {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState(String(value));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const handleSave = () => {
    setEditing(false);
    const newVal = type === "number" ? Number(editValue) : editValue;
    if (newVal !== value && editValue.trim() !== "") {
      onSave(newVal);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditValue(String(value));
      setEditing(false);
    }
  };

  if (editing) {
    return (
      <Input
        ref={inputRef}
        type={type}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={handleKeyDown}
        className="h-8 w-24 text-sm"
      />
    );
  }

  return (
    <span
      onClick={() => {
        setEditValue(String(value));
        setEditing(true);
      }}
      className="cursor-pointer rounded px-2 py-1 hover:bg-muted transition-colors"
      title="Click to edit"
    >
      {prefix}{type === "number" ? Number(value).toLocaleString() : value}
    </span>
  );
};

export default InlineEditCell;
