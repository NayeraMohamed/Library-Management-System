BEGIN;


CREATE TABLE IF NOT EXISTS public.books
(
    id serial NOT NULL,
    title character varying(255) NOT NULL,
    isbn character varying(255) NOT NULL,
    author character varying(255) NOT NULL,
    available_quantity integer NOT NULL,
    location text NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT books_title_uk UNIQUE (title),
    CONSTRAINT books_isbn_uk UNIQUE (isbn)
);

CREATE TABLE IF NOT EXISTS public.borrowers
(
    id serial NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    registered_date date NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT borrowers_email_uk UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS public.loans
(
    id serial NOT NULL,
    book_id integer NOT NULL,
    borrower_id integer NOT NULL,
    due_date date NOT NULL,
    returned boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.loans
    ADD CONSTRAINT books_loans_fk FOREIGN KEY (book_id)
    REFERENCES public.books (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.loans
    ADD CONSTRAINT borrowers_loans_fk FOREIGN KEY (borrower_id)
    REFERENCES public.borrowers (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;