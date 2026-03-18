
-- Create user roles table for admin access
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS for user_roles: only admins can read
CREATE POLICY "Admins can read roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Table A: Coaching Notes
CREATE TABLE public.coaching_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    coaching_institute TEXT NOT NULL,
    subject TEXT NOT NULL,
    price NUMERIC NOT NULL DEFAULT 0,
    in_stock BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (coaching_institute, subject)
);

ALTER TABLE public.coaching_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read coaching notes" ON public.coaching_notes
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert coaching notes" ON public.coaching_notes
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update coaching notes" ON public.coaching_notes
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete coaching notes" ON public.coaching_notes
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Table B: FastTrack & Books
CREATE TABLE public.fastrack_books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    book_title TEXT NOT NULL,
    original_price NUMERIC NOT NULL DEFAULT 0,
    discount_percentage NUMERIC NOT NULL DEFAULT 0,
    final_price NUMERIC GENERATED ALWAYS AS (original_price * (1 - discount_percentage / 100)) STORED,
    in_stock BOOLEAN NOT NULL DEFAULT true,
    category TEXT NOT NULL DEFAULT 'fastrack',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.fastrack_books ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read fastrack books" ON public.fastrack_books
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert fastrack books" ON public.fastrack_books
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update fastrack books" ON public.fastrack_books
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete fastrack books" ON public.fastrack_books
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_coaching_notes_updated_at
  BEFORE UPDATE ON public.coaching_notes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_fastrack_books_updated_at
  BEFORE UPDATE ON public.fastrack_books
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
