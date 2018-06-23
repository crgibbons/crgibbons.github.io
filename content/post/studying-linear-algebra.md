+++
title = "How to study for Linear Algebra exams"
date = 2018-06-21T00:00:00
draft = false

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["proofs", "studying", "linear algebra"]
categories = ["teaching"]
summary = "For math exams in general, it can be useful to form a study group to talk over problems and solutions before the exams.  It's also useful to retry problems you've seen on homeworks, quizzes, and writing assignments (without looking at your previous attempt or the graders' comments) to figure out what you need to focus on studying.  For specific tips about studying for Linear Algebra exams, read on!"

# Featured image
# Place your image in the `static/img/` folder and reference its filename below, e.g. `image = "example.jpg"`.
# Use `caption` to display an image caption.
#   Markdown linking is allowed, e.g. `caption = "[Image credit](http://example.org)"`.
# Set `preview` to `false` to disable the thumbnail in listings.
[header]
image = ""
caption = ""
preview = true

+++

For math exams in general, it can be useful to form a study group to talk over problems and solutions before the exams.  It's also useful to retry problems you've seen on homeworks, quizzes, and writing assignments (without looking at your previous attempt or the graders' comments) to figure out what you need to focus on studying.

---

Prof. Gibbons' Linear Algebra exams should take you about 90 minutes to complete.  The format:

* **First Page:** "Example or impossible" and True False problems.
* **Middle 2-3 Pages:** Homework-like problems (~5 of them).
* **Last Page:** Writing Assignment-like problems (~2 of them).

---

**Studying for the First Page**

* At the end of each chapter, the book has True of False questions and discussion questions.  These are great problems to make sure that you have a handle on the theory in the class (meaning, literally, the theorems and other results that we have proved throughout the semester).  If you are studying these and would like solutions, contact Prof. Gibbons.
* Try to read my mind! Make up questions for this page by looking at the theorems and examples in the notes and book and seeing if you can find good questions that seem to be like the quiz questions.  Often the reason that something is impossible is that a theorem says it can't happen.
* Come up with some examples that show lots of things.  For example, the identity matrix and the zero matrix are great examples to keep in mind as you work these problems.  The zero matrix works for all of the following statements: 
    * A matrix that is singular 
    * A matrix for which $A\mathbf{x} = \mathbf{0}$ has infinitely many solutions
    * A matrix row equivalent to a matrix with a row of zeros
    and others.  The matrix $\begin{bmatrix} 2& 6 \\\ 3 & 1 \end{bmatrix}$ has already come up in class a few times as an example of: a singular matrix, a singular matrix without a zero row, a matrix that is not row equivalent to $I_2$, a matrix that has a number other than one or zero in reduced row eschelon form, and so on.


**Studying for the Middle Pages**

* There are additional problems at the end of the chapter if you want a source of more problems.  If you are studying these and would like solutions, contact Prof. Gibbons.
* There are no caluclators on exams, so practice to be sure that you can do a few simple steps (like row reduce or substitute) by hand.  (Prof. Gibbons doesn't want to check your arithmetic, so she might try to help you out with some row reduction, etc., already completed.)


**Studying for the Last Page**

* These questions will require you to form a Proposition (that is, a *universally quantified implication*: 
    * **Proposition.** For all ..., if ..., then ... .
    and then to write a proof that starts with "Proof" and ends with an end-of-proof symbol like $\square$ or QED.  Your first and last sentences should conform to good style (state your assumptions in the first sentences, do the math, and then conclude what the proof technique you're using requires you to conclude).
* One problem will come from a writing assignment or class groupwork, so you will have seen it before.  Another problem will be new, but it will use the same techniques as in class and on writing assignments (like letting $r$ and $s$ be real numbers where $r+s = 1$ in order to come up something new from two existing things, or using the logical equivalence $$p \implies (q \lor r) \equiv (p \land \lnot q) \implies r).$$
